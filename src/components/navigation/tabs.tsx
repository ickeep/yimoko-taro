import { RecordScope, RecursionField, observer, useFieldSchema } from '@formily/react';
import { TabsProps, Tabs as NTabs } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { pick } from 'lodash-es';
import { useMemo } from 'react';

const TabPane: typeof NTabs.TabPane = observer((props) => {
  const { children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return (
    <NTabs.TabPane  {...rest}>
      {curChildren}
    </NTabs.TabPane>
  );
});

export const Tabs = (props: TabsProps & Omit<IOptionsAPIProps, 'valueType'>) => {
  const { options, api, keys, splitter, children, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const curChildren = useChildrenNullishCoalescing(children);
  const { items } = useFieldSchema();
  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(data)) {
      return null;
    }

    if (judgeIsEmpty(items)) {
      return data.map((record, dataIndex) => <TabPane key={dataIndex} {...record} />);
    }

    return data.map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      return (
        <TabPane key={dataIndex} {...(pick(record, ['title', 'value', 'disabled']))} >
          <RecordScope getRecord={() => record} getIndex={() => dataIndex} >
            <RecursionField schema={schemaItem} name={dataIndex} />
          </RecordScope>
        </TabPane>
      );
    });
  }, [items, data]);

  return (
    <NTabs  {...rest} >
      {itemsChildren}
      {curChildren}
    </NTabs>
  );
};

Tabs.TabPane = TabPane;
