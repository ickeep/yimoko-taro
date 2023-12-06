import { RecordScope, RecursionField, observer, useFieldSchema } from '@formily/react';
import { My } from '@nutui/icons-react-taro';
import { TabsProps, Tabs as NTabs } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { pick } from 'lodash-es';
import React, { FC, useMemo } from 'react';

export const TabPane = observer((props: any) => {
  const { children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return (
    <NTabs.TabPane  {...rest}>
      {curChildren}
    </NTabs.TabPane>
  );
});

const MyTabs: FC<Partial<TabsProps> & Omit<IOptionsAPIProps, 'valueType'>> = observer((props) => {
  const { options, api, keys, splitter, children, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const curChildren = useChildrenNullishCoalescing(children);
  const { items } = useFieldSchema() ?? {};
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
        // TabPane 必须在顶层
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
});

export const Tabs: typeof MyTabs & {
  TabPane: typeof TabPane;
} = MyTabs as any;

Tabs.TabPane = TabPane;

