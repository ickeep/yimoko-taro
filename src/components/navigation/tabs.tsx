import { observer } from '@formily/react';
import { TabsProps, Tabs as NTabs, TabPaneProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';

export const Tabs = (props: TabsProps & Omit<IOptionsAPIProps, 'valueType'>) => {
  const { options, api, keys, splitter, children, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const curChildren = useChildrenNullishCoalescing(children);

  return (
    <NTabs  {...rest} >
      {data.map((item, index) => <NTabs.TabPane key={index} {...item} />)}
      {curChildren}
    </NTabs>
  );
};

const TabPane = observer((props: TabPaneProps) => {
  const { children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  console.log('TabPane', rest);

  return (
    <NTabs.TabPane  {...rest} title='x'>
      {curChildren}
    </NTabs.TabPane>
  );
});

Tabs.TabPane = TabPane;
