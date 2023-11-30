import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

function Index() {
  const store = useStore({});
  return (
    <StorePage
      store={store}
      schema={{
        type: 'void',
        properties: {
          base: {
            type: 'void',
            title: '基础用法',
            'x-component': 'NavBar',
            'x-component-props': {
              children: '标题',
              right: 'right',
              left: 'left',
              back: '返回',
            },
          },
          custom: {
            type: 'void',
            title: '自定义',
            'x-component': 'NavBar',
            properties: {
              link: {
                type: 'void',
                title: '链接',
                'x-component': 'Link',
                'x-component-props': {
                  to: '/pages/components/base/button/index',
                  children: '链接',
                },
              },
            },
            additionalProperties: {
              properties: {
                back: {
                  type: 'void',
                  title: '返回',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '返回',
                  },
                },
                left: {
                  type: 'void',
                  title: '左侧',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '左侧',
                  },
                },
                right: {
                  type: 'void',
                  title: '右侧',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '右侧',
                  },
                },
              },
            },
          },
        },
      }}
    />
  );
}

export default Index;
