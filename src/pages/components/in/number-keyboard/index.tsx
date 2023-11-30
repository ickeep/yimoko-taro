import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';


function Index() {
  const store = useStore({});

  return (
    <>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            base: {
              type: 'string',
              title: '基础用法',
              'x-component': 'NumberKeyboard',
              'x-component-props': {
                trigger: {
                  component: 'Cell',
                  title: '基础用法',
                },
              },
            },
            length: {
              type: 'string',
              title: '长度',
              'x-component': 'NumberKeyboard',
              'x-component-props': {
                length: 6,
                trigger: {
                  component: 'Cell',
                  title: '长度',
                },
              },
            },
            rightColumn: {
              type: 'string',
              title: '右侧键盘',
              'x-component': 'NumberKeyboard',
              'x-component-props': {
                type: 'rightColumn',
                custom: ['.', 'x'],
                trigger: {
                  component: 'Cell',
                  title: '右侧键盘',
                },
              },
            },
            title: {
              type: 'string',
              title: '标题',
              'x-component': 'NumberKeyboard',
              'x-component-props': {
                title: '标题',
                custom: ['.'],
                trigger: {
                  component: 'Cell',
                  title: '标题',
                },
              },
            },
            // 非记忆模式
            memory: {
              type: 'string',
              title: '非记忆模式',
              'x-component': 'NumberKeyboard',
              'x-component-props': {
                memory: false,
                trigger: {
                  component: 'Cell',
                  title: '非记忆模式',
                },
              },
            },
          },
        }}
      />
    </>
  );
}

export default observer(Index);
