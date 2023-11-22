import { RecordScope, RecordsScope, RecursionField, useFieldSchema } from '@formily/react';
import { GridItemProps, GridProps, Grid as NGrid } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { ReactNode, useMemo } from 'react';
import { isFragment } from 'react-is';

import { ItemSchemaToProps } from '../../tools/schema';

// Grid 的子组件必须为 Grid.Item 组件
// 渲染数据支持 value 和 options 两种方式 优先级 value > options
// Grid 多为展示数据，不引入 ArrayBase 组件
export const Grid = (props: Partial<GridProps> & Omit<IOptionsAPIProps, 'valueType'> & { children?: ReactNode, value?: any[] }) => {
  const { options, api, keys, splitter, children, value, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const schema = useFieldSchema();
  const { items } = schema ?? {};
  const curValue = value ?? data;
  const curChildren = useChildrenNullishCoalescing(children);

  // 当 schema 使用时 会对 children 进行处理 导致 Grid.Item 不在顶层 必须将其取出来
  // eslint-disable-next-line complexity
  const uscChildren = useMemo(() => {
    let tmpChildren = curChildren;
    if (schema && isFragment(tmpChildren)) {
      tmpChildren = tmpChildren?.props?.children;
    }
    if (Array.isArray(tmpChildren)) {
      // 过滤undefined
      tmpChildren = tmpChildren.filter(item => item) as any[];
      // 如果长度等于1，且是Fragment，那么就是schema中的children
      if (Array.from(tmpChildren).length === 1 && isFragment(tmpChildren[0])) {
        tmpChildren = tmpChildren[0]?.props?.children;
      }
    }
    if (Array.isArray(tmpChildren)) {
      tmpChildren = tmpChildren.map((item, index) => {
        // 判断是不是用 RecursionField 渲染 如果是则处理进 item的方式
        if (item.type === RecursionField) {
          const { schema: itemSchema, ...args } = item.props;
          const itemProps = ItemSchemaToProps(itemSchema, 'Grid.Item', args, index);
          return (
            <Item key={index} text={itemSchema.title} {...itemProps} >
            </Item >
          );
        }
        return item;
      });
    }
    return tmpChildren;
  }, [curChildren, schema]);

  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(items) || judgeIsEmpty(curValue)) {
      return null;
    }
    // eslint-disable-next-line complexity
    return (curValue).map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      const { children: itemChildren, ...itemProps } = ItemSchemaToProps(schemaItem, 'Grid.Item', {}, dataIndex);
      return (
        <Item key={dataIndex} text={record.text ?? record.label} {...itemProps} >
          <RecordScope getRecord={() => record} getIndex={() => dataIndex} >
            {itemChildren}
          </RecordScope>
        </Item >
      );
    });
  }, [curValue, items]);

  return (
    <RecordsScope getRecords={() => curValue}>
      <NGrid  {...rest} >
        {itemsChildren}
        {uscChildren}
      </NGrid>
    </RecordsScope>
  );
};

const Item = (props: Partial<GridItemProps> & { value?: ReactNode }) => {
  const { value, text, children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);
  return <NGrid.Item {...rest} text={text ?? value} >{curChildren}</NGrid.Item>;
};

Grid.Item = Item;


