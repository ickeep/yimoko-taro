import { RecordScope, RecordsScope, RecursionField, useFieldSchema } from '@formily/react';
import { GridProps, Grid as NGrid } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, getItemPropsBySchema, judgeIsEmpty, useAPIOptions } from '@yimoko/store';
import { ReactNode, useMemo } from 'react';

export const Grid = (props: GridProps & IOptionsAPIProps & { children?: ReactNode, isRenderProperties?: boolean }) => {
  const { options, api, keys, splitter, valueType, children, isRenderProperties, ...rest } = props;
  const [data] = useAPIOptions(options, api, { ...keys }, splitter);
  const schema = useFieldSchema() ?? {};
  const { items, properties, name } = schema;

  const curChildren = useMemo(() => {
    if (children !== undefined) {
      return children;
    }
    if (!isRenderProperties || judgeIsEmpty(properties)) {
      return null;
    }
    // 默认 schema type 为 array 不渲染 properties, 表格这里特意做加强
    return <RecursionField name={name} onlyRenderProperties schema={{ type: 'void', properties }} />;
  }, [children, isRenderProperties, properties, name]);


  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(items) || judgeIsEmpty(data)) {
      return null;
    }
    return data.map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      const itemProps = getItemPropsBySchema(schemaItem, 'Grid.Item', dataIndex);
      console.log(itemProps);

      return (
        <RecordScope getRecord={() => record} getIndex={() => dataIndex} key={dataIndex}>
          <NGrid.Item {...itemProps} />
        </RecordScope>
      );
    });
  }, [data, items]);


  return (
    <RecordsScope getRecords={() => data}>
      <NGrid  {...rest} >
        {itemsChildren}
        {curChildren}
      </NGrid>
    </RecordsScope>
  );
};


Grid.Item = NGrid.Item;
