import { TabbarProps, Tabbar as NTabbar } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import React from 'react';

export const Tabbar = (props: Partial<TabbarProps> & Omit<IOptionsAPIProps, 'valueType'> & { onChange?: (value: number) => void }) => {
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
};

Tabbar.Item = NTabbar.Item;
