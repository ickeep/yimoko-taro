import { Schema, observer, useField } from '@formily/react';
import { MenuItemProps as NMenuItemProps, Menu as NMenu, MenuProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions } from '@yimoko/store';
import { useMemo } from 'react';
import { isFragment } from 'react-is';

export const Menu = (props: Partial<MenuProps>) => {
  const { icon, children, ...rest } = props;

  const curChildren = useMemo(() => {
    if (Array.isArray(children)) {
      return children;
    }
    if (children && !isFragment(children)) {
      return children;
    }
    if (!judgeIsEmpty(children)) {
      // schema 中 MenuItem 被其他组件包裹 会导致无法渲染，必须提至最外层
      const arr = children?.props?.children?.[0]?.props?.children;
      return arr.map((item, index) => {
        const { schema, basePath, name } = item?.props ?? {};
        console.log('schema', schema);

        // const formSchema = new Schema(schema)
        const field = schema.compile();
        console.log('field', field);


        return <MenuItem key={index} title={schema?.title} options={schema?.enum} {...schema?.['x-component-props']} />;
      });
    }
    return null;
  }, [children]);

  return (
    <NMenu {...rest} icon={icon} >{curChildren}</NMenu>
  );
};

export type MenuItemProps = Omit<Partial<NMenuItemProps>, 'onChange'> & Omit<IOptionsAPIProps<'value' | 'text'>, 'valueType'> & {
  onChange?: (value?: string | number) => void
};

export const MenuItem = observer((props: MenuItemProps) => {
  const { options, api, keys, splitter = ',', title, value, onChange, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const field = useField() ?? {};

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
