import { RecordScope, RecordsScope, RecursionField, useFieldSchema } from '@formily/react';
import { GridProps, Grid as NGrid } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, getItemPropsBySchema, judgeIsEmpty, useAPIOptions } from '@yimoko/store';
import { ReactNode, useMemo } from 'react';

// 渲染数据支持 value 和 options 两种方式 优先级 value > options
// Grid 多为展示数据，不引入 ArrayBase 组件
export const Grid = (props: GridProps & Omit<IOptionsAPIProps, 'valueType'> & { children?: ReactNode, isRenderProperties?: boolean, value?: any[] }) => {
  const { options, api, keys, splitter, children, isRenderProperties, value, ...rest } = props;
  const [data] = useAPIOptions(options, api, { ...keys }, splitter);
  const schema = useFieldSchema() ?? {};
  const { items, properties, name } = schema;

  const curValue = value ?? data;

  const curChildren = useMemo(() => {
    if (children !== undefined) {
      return children;
    }
    if (!isRenderProperties || judgeIsEmpty(properties)) {
      return null;
    }
    return <RecursionField name={name} onlyRenderProperties schema={{ type: 'void', properties }} />;
  }, [children, isRenderProperties, properties, name]);

  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(items) || judgeIsEmpty(curValue)) {
      return null;
    }
    return (curValue).map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      const itemProps = getItemPropsBySchema(schemaItem, 'Grid.Item', dataIndex);

      return (
        <RecordScope getRecord={() => record} getIndex={() => dataIndex} key={dataIndex}>
          <NGrid.Item {...itemProps} />
        </RecordScope>
      );
    });
  }, [curValue, items]);

  return (
    <RecordsScope getRecords={() => curValue}>
      <NGrid  {...rest} >
        {itemsChildren}
        {curChildren}
      </NGrid>
    </RecordsScope>
  );
};

Grid.Item = NGrid.Item;
