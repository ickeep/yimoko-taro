import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import { useEffect } from 'react';

import { Button, Divider, Space } from '@/library';

const Index = observer(() => {
  const api = () => new Promise(resolve => setTimeout(() => resolve({ code: 0, msg: 'ok', data: { name: '张三' } }), 1000));
  const store = useStore({ api });
  const errStore = useStore({ api });
  useEffect(() => {
    // 当有内容时 不再显示 骨架屏
    store.setResponse({ code: 0, msg: 'ok', data: { name: '张三' } });
    errStore.setResponse({ code: 404, msg: '找不到内容' });
  }, [errStore, store]);

  return (
    <div>
      <Divider>Loading 默认不展示 错误时再加载时 默认展示</Divider>
      <Space>
        <Button
          onClick={() => {
            store.setLoading(true);
            setTimeout(() => {
              store.setLoading(false);
            }, 2000);
          }}
        >设置 loading </Button>
        <Button onClick={() => store.setResponse({ code: 0, msg: 'ok', data: '' })}>成功内容</Button>
        <Button onClick={() => store.setResponse({ code: 500, msg: '服务器出错了', data: '' })}>失败内容</Button>
      </Space>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
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
      <Divider>启用 并自定义属性</Divider>
      <Space>
        <Button
          onClick={() => {
            errStore.setLoading(true);
            setTimeout(() => {
              errStore.setLoading(false);
            }, 2000);
          }}
        >设置 loading </Button>
        <Button onClick={() => errStore.setResponse({ code: 0, msg: 'ok', data: '' })}>成功内容</Button>
        <Button onClick={() => errStore.setResponse({ code: 500, msg: '服务器出错了', data: '' })}>失败内容</Button>
      </Space>

      <StorePage
        store={errStore}
        schema={{
          type: 'object',
          properties: {
            content: {
              type: 'void',
              'x-component': 'StorePageContent',
              'x-component-props': {
                isAgain: true,
                isReturnIndex: true,
                load: {
                  type: 'spinner',
                  direction: 'vertical',
                  // icon: '',
                },
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
