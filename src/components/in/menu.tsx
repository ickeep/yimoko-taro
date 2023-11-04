import { observer, useField } from '@formily/react';
import { MenuItemProps as NMenuItemProps, Menu as NMenu } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';

export const Menu = NMenu;

export type MenuItemProps = Omit<NMenuItemProps, 'onChange'> & Omit<IOptionsAPIProps<'value' | 'text'>, 'valueType'> & {
  onChange?: (value?: string | number) => void
};

const MenuItem = observer((props: MenuItemProps) => {
  const { options, api, keys, splitter = ',', title, value, onChange, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const field = useField();

  return (
    <NMenu.Item
      {...rest}
      title={title ?? field.title}
      options={data}
      onChange={(v) => {
        onChange?.(v.value);
      }}
    />);
});

Menu.Item = MenuItem;
