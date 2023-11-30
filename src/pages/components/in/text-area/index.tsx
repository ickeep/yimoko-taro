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
              textArea: {
                type: 'string',
                title: '文本域',
                'x-component': 'TextArea',
                'x-component-props': {
                  placeholder: '基础使用',
                },
                'x-decorator': 'Cell',
              },
              showCount: {
                type: 'string',
                title: '显示字数',
                'x-component': 'TextArea',
                'x-component-props': {
                  showCount: true,
                  placeholder: '显示字数',
                },
                'x-decorator': 'Cell',
              },
              autoSize: {
                type: 'string',
                title: '自适应高度',
                'x-component': 'TextArea',
                'x-component-props': {
                  autoSize: true,
                  placeholder: '自适应高度',
                },
                'x-decorator': 'Cell',
              },
              disabled: {
                type: 'string',
                title: '禁用',
                'x-component': 'TextArea',
                'x-component-props': {
                  disabled: true,
                  placeholder: '禁用',
                },
                'x-decorator': 'Cell',
              },
              readonly: {
                type: 'string',
                title: '只读',
                'x-component': 'TextArea',
                'x-component-props': {
                  readonly: true,
                  placeholder: '只读',
                },
                'x-decorator': 'Cell',
              },
            },
          }}
        />
        </>
  );
}

export default observer(Index);
