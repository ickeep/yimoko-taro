import { RecordScope, RecordsScope, RecursionField, useFieldSchema } from '@formily/react';
import { GridItemProps, GridProps, Grid as NGrid } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { ReactNode, useMemo } from 'react';

// 渲染数据支持 value 和 options 两种方式 优先级 value > options
// Grid 多为展示数据，不引入 ArrayBase 组件
export const Grid = (props: GridProps & Omit<IOptionsAPIProps, 'valueType'> & { children?: ReactNode, value?: any[] }) => {
  const { options, api, keys, splitter, children, value, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const schema = useFieldSchema() ?? {};
  const { items } = schema;

  const curValue = value ?? data;

  const curChildren = useChildrenNullishCoalescing(children);

  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(items) || judgeIsEmpty(curValue)) {
      return null;
    }
    return (curValue).map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      return (
        <RecordScope getRecord={() => record} getIndex={() => dataIndex} key={dataIndex}>
          <RecursionField schema={schemaItem} name={dataIndex} />
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

const Item = (props: GridItemProps & { value?: ReactNode }) => {
  const { value, text, children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return <NGrid.Item {...rest} text={text ?? value} >{curChildren}</NGrid.Item>;
};

Grid.Item = Item;
