import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

function Index() {
  const store = useStore({ defaultValues: { index: 0 } });
  console.log('index', store.values.index);

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          index: {
            type: 'number',
            title: '受控',
            'x-component': 'Tabbar',
            enum: [
              { title: '首页', icon: 'home' },
              { title: '订单', icon: 'order' },
              { title: '我的', icon: 'user' },
            ],
          },
          void: {
            type: 'void',
            title: '非受控',
            'x-component': 'Tabbar',
            properties: {
              0: {
                type: 'void',
                'x-component': 'Tabbar.Item',
                'x-component-props': {
                  title: '首页',
                  icon: 'home',
                },
              },
              1: {
                type: 'void',
                'x-component': 'Tabbar.Item',
                'x-component-props': {
                  title: '订单',
                  icon: 'order',
                },
              },
            },
          },
        },
      }}
    />
  );
}

export default observer(Index);
