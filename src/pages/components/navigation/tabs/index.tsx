import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';


// TODO  schema 中 Tabs.TabPane tab 无法显示
// Tabs 初始值设置无效
function Index() {
  const store = useStore({ defaultValues: { index: 'order' } });
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
            'x-component': 'Tabs',
            'x-component-props': {
              defaultValue: 'order',
            },
            enum: [
              { title: '首页', value: 'home', children: 'home' },
              { title: '订单', value: 'order', children: 'order' },
              { title: '我的', value: 'user', children: 'user' },
            ],
          },
          btn: {
            'x-component': 'Button',
            'x-component-props': {
              children: '切换到 我的',
              onClick: () => store.setValues({ index: 'user' }),
            },
          },
          void: {
            type: 'void',
            // type: 'number',
            title: '非受控',
            'x-component': 'Tabs',
            properties: {
              0: {
                type: 'void',
                'x-decorator': 'Tabs.TabPane',
                'x-decorator-props': {
                  title: '首页',
                  icon: 'home',
                  value: 0,
                },
                'x-component': 'Button',
                'x-component-props': {
                  children: '按钮 0',
                },
              },
              1: {
                type: 'void',
                'x-component': 'Tabs.TabPane',
                'x-component-props': {
                  title: '订单',
                  icon: 'order',
                  value: 1,
                },
                properties: {
                  btn: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      children: '按钮 1',
                    },
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

export default observer(Index);
