import { observer } from '@formily/react';
import { TabbarProps, Tabbar as NTabbar } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { FC } from 'react';

type ITabbarFC = FC<Partial<TabbarProps> & Omit<IOptionsAPIProps, 'valueType'> & { onChange?: (value: number) => void }>;
type ITabbar = ITabbarFC & { Item: typeof NTabbar.Item };

const TabbarFC: ITabbarFC = observer((props) => {
  const { options, api, keys, splitter, value, onChange, onSwitch, children, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter);
  const curChildren = useChildrenNullishCoalescing(children);

  return (
    <NTabbar
      {...rest}
      onSwitch={(val) => {
        onChange?.(val);
        onSwitch?.(val);
      }}
    >
      {data.map((item, index) => <NTabbar.Item key={index} {...item} />)}
      {curChildren}
    </NTabbar>
  );
});

export const Tabbar = TabbarFC as ITabbar;
Tabbar.Item = NTabbar.Item;
