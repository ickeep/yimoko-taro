import { RecordScope, RecordsScope, RecursionField, observer, useFieldSchema } from '@formily/react';
import { CollapseItemProps, CollapseProps, Collapse as NCollapse } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useAdditionalNode, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { FC, useMemo } from 'react';
import { isFragment } from 'react-is';

import { ItemSchemaToProps } from '../../tools/schema';

// Collapse 的子组件必须为 Collapse.Item 组件
// 渲染数据支持 value 和 options 两种方式 优先级 value > options
// Collapse 多为展示数据，不引入 ArrayBase 组件

type ICollapseFC = FC<Partial<CollapseProps> & Omit<IOptionsAPIProps, 'valueType'>>;
type ICollapse = ICollapseFC & { Item: FC<CollapseItemProps>; };

const CollapseFC: ICollapseFC = observer((props) => {
  const { options, api, keys, splitter, children, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const schema = useFieldSchema();
  const { items } = schema ?? {};
  const curChildren = useChildrenNullishCoalescing(children);

  // 当 schema 使用时 会对 children 进行处理 导致 Collapse.Item 不在顶层 必须将其取出来
  // eslint-disable-next-line complexity
  const uscChildren = useMemo(() => {
    let tmpChildren = curChildren;
    if (schema && isFragment(tmpChildren)) {
      tmpChildren = tmpChildren?.props?.children;
    }
    if (Array.isArray(tmpChildren)) {
      // 过滤undefined
      tmpChildren = tmpChildren.filter(item => item) as any[];
      // 如果长度等于1，且是Fragment，那么可能是schema中的children
      if (Array.from(tmpChildren).length === 1 && isFragment(tmpChildren[0])) {
        tmpChildren = tmpChildren[0]?.props?.children;
      }
    }
    if (Array.isArray(tmpChildren)) {
      return tmpChildren.map((item, index) => {
        // 判断是不是用 RecursionField 渲染 如果是则处理进 item 的方式
        if (item.type === RecursionField) {
          const { schema: itemSchema, ...args } = item.props;
          const itemProps = ItemSchemaToProps(itemSchema, 'Collapse.Item', args);
          return (
            <Item key={index} {...itemProps} />
          );
        }
        return item;
      });
    }
    return tmpChildren;
  }, [curChildren, schema]);

  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(items) || judgeIsEmpty(data)) {
      return null;
    }
    // eslint-disable-next-line complexity
    return (data).map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      const { children: itemChildren, ...itemProps } = ItemSchemaToProps(schemaItem, 'Collapse.Item', {}, dataIndex);
      return (
        <Item key={dataIndex}  {...itemProps} >
          <RecordScope getRecord={() => record} getIndex={() => dataIndex} >
            {itemChildren}
          </RecordScope>
        </Item >
      );
    });
  }, [data, items]);

  return (
    <RecordsScope getRecords={() => data}>
      <NCollapse  {...rest} >
        {itemsChildren}
        {uscChildren}
      </NCollapse>
    </RecordsScope>
  );
});

// 父组件有侵入性，不可使用 useChildrenNullishCoalescing， 会导致读取的schema为父组件的schema
const Item = (props: Partial<CollapseItemProps>) => {
  const { title, extra, expandIcon, ...rest } = props;
  const curTitle = useAdditionalNode('title', title);
  const curExtra = useAdditionalNode('extra', extra);
  const curExpandIcon = useAdditionalNode('expandIcon', expandIcon);

  return <NCollapse.Item {...rest} title={curTitle} extra={curExtra} expandIcon={curExpandIcon} />;
};

export const Collapse = CollapseFC as ICollapse;
Collapse.Item = Item;


