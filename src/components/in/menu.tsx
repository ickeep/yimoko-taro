import { observer, useField, useForm } from '@formily/react';
import { MenuItemProps as NMenuItemProps, Menu as NMenu, MenuProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions } from '@yimoko/store';
import React, { useMemo } from 'react';
import { isFragment } from 'react-is';

export const Menu = (props: Partial<MenuProps>) => {
  const { icon, children, ...rest } = props;
  const form = useForm();

  const curChildren = useMemo(() => {
    if (Array.isArray(children)) {
      return children;
    }
    if (children && !isFragment(children)) {
      return children;
    }
    if (!judgeIsEmpty(children) && typeof children === 'object') {
      // schema 中 MenuItem 被其他组件包裹 会导致无法渲染，必须提至最外层
      const arr = children?.props?.children?.[0]?.props?.children;
      return arr.map((item, index) => {
        const { schema, basePath, name } = item?.props ?? {};
        const field = form.createField({ basePath, name });

        return (
          <MenuItem
            key={index}
            title={schema?.title}
            options={schema?.enum}
            // 限制 Menu properties 的子组件只能是 MenuItem 并且必须是 x-component
            {...schema?.['x-component-props']}
            value={field.value}
            onChange={(v) => {
              field?.onInput(v);
              schema?.['x-component-props']?.onChange?.(v);
            }}
          />
        );
      });
    }
    return null;
  }, [children, form]);

  return (
    <NMenu {...rest} icon={icon} >{curChildren}</NMenu>
  );
};

export type MenuItemProps = Omit<Partial<NMenuItemProps>, 'onChange'> & Omit<IOptionsAPIProps<'value' | 'text'>, 'valueType'> & {
  onChange?: (value?: string | number) => void
};

const MenuItem = observer((props: MenuItemProps) => {
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
