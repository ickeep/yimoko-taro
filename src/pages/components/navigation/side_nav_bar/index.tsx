import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

function Index() {
  const store = useStore({ defaultValues: { visible: false } });
  console.log('visible', store.values.visible);

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          base: {
            type: 'void',
            title: '基础用法',
            enum: [
              { label: '一级 - 1', value: '1' },
              { label: '一级 - 2', value: '2', children: [{ label: '二级 - 1', value: '2-1' }, { label: '二级 - 2', value: '2-2' }] },
              { label: '一级 - 3 url 跳转', value: '3', url: '/pages/components/index' },
              { label: '一级 - 4', value: '4' },
              { label: '一级 - 5', value: '5' },
            ],
            'x-component': 'SideNavBar',
            'x-component-props': {
              keys: { title: 'label', key: 'value' },
              title: '菜单',
              trigger: {
                component: 'Button',
              },
            },
          },
          visible: {
            type: 'boolean',
            title: '受控',
            'x-component': 'SideNavBar',
            'x-component-props': {
              keys: { title: 'label', key: 'value' },
              title: '菜单',
              trigger: {
                component: 'Cell',
                title: '触发器',
              },
            },
          },
        },
      }}
    />
  );
}

export default observer(Index);
