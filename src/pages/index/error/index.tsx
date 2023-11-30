import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React, { useEffect } from 'react';

import { Divider } from '@/library';

const Index = observer(() => {
  const store404 = useStore({});
  const store500 = useStore({});
  const store600 = useStore({});
  useEffect(() => {
    store404.setLoading(true);
    store500.setLoading(true);
    store600.setLoading(true);
    setTimeout(() => {
      store404.setLoading(false);
      store500.setLoading(false);
      store600.setLoading(false);
      store404.setResponse({ code: 404, msg: '找不到内容' });
      store500.setResponse({ code: 500, msg: '服务器出错了' });
      store600.setResponse({ code: 600, msg: '网络出错了' });
    }, 1000);
  }, [store404, store500, store600]);

  return (
    <div>
      <Divider>404</Divider>
      <StorePage
        store={store404}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
            },
          },
        }}
      />
      <Divider>500</Divider>
      <StorePage
        store={store500}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
              'x-component-props': {
                isAgain: true,
                isReturnIndex: true,
              },
            },
          },
        }}
      />
      <Divider>600</Divider>
      <StorePage
        store={store600}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
              'x-component-props': {
                isAgain: false,
              },
            },
          },
        }}
      />
    </div>
  );
});

export default Index;
