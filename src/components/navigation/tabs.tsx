import { RecordScope, RecursionField, observer, useFieldSchema } from '@formily/react';
import { TabsProps, Tabs as NTabs, TabPaneProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { pick } from 'lodash-es';
import React, { FC, useMemo } from 'react';

export const TabPane = observer((props: Partial<TabPaneProps>) => {
  const { children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return (
    <NTabs.TabPane  {...rest}>
      {curChildren}
    </NTabs.TabPane>
  );
});

type ITabsFC = FC<Partial<TabsProps> & Omit<IOptionsAPIProps, 'valueType'> & { value?: any[] }>;
type ITabs = ITabsFC & { TabPane: typeof NTabs.TabPane };

const TabsFC: ITabsFC = observer((props) => {
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

export const Tabs = TabsFC as ITabs;
Tabs.TabPane = TabPane;

