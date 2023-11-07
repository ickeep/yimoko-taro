import { TabbarProps, Tabbar as NTabbar } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';

export const Tabbar = (props: TabbarProps & Omit<IOptionsAPIProps, 'valueType'> & { onChange?: (value: number) => void }) => {
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
