import {  observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import './index.scss';

function Index() {
  const store = useStore({});
  return (
        <div className='demo demo-signature demo-taro-signature'>
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              base: {
                type: 'string',
                title: '基础使用',
                'x-component': 'Signature',
                'x-component-props': {
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '基础使用',
                },
              },
              strokeStyle: {
                type: 'string',
                title: '笔触颜色',
                'x-component': 'Signature',
                'x-component-props': {
                  strokeStyle: 'red',
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '笔触颜色',
                },
              },
              lineWidth: {
                type: 'string',
                title: '笔触宽度',
                'x-component': 'Signature',
                'x-component-props': {
                  lineWidth: 5,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '笔触宽度',
                },
              },
            },
          }}
        />
        </div>
  );
}

export default observer(Index);
