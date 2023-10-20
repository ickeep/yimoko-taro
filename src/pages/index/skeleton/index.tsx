import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import { useEffect } from 'react';

import { Divider } from '@/library';

const Index = observer(() => {
  const api = () => new Promise(resolve => setTimeout(() => resolve({ code: 0, msg: 'ok', data: { name: '张三' } }), 1000));
  const store = useStore({ api });
  useEffect(() => {
    store.setLoading(true);
    setTimeout(() => {
      store.setLoading(false);
      store.setResponse({ code: 404, msg: '找不到内容' });
    }, 2000);
  }, [store]);

  return (
    <div>
      <Divider>骨架屏</Divider>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
              'x-component-props': {
                isAgain: true,
                isReturnIndex: true,
                // 不传 skeleton false  则默认启用
                // skeleton: false
              },
              properties: {
                name: {
                  type: 'string',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '内容',
                  },
                },
              },
            },
          },

        }}
      />

      <Divider>自定义骨架屏属性</Divider>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
              'x-component-props': {
                isAgain: true,
                isReturnIndex: true,
                skeleton: { row: 3, animated: false, avatar: true, title: true, avatarShape: 'round', avatarSize: 40 },
              },
              properties: {
                name: {
                  type: 'string',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '内容',
                  },
                },
              },
            },
          },

        }}
      />

    </div>
  );
});

export default Index;
