import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

// TODO Tabs 初始时设置值无效
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
            title: '自定义 item 渲染',
            'x-component': 'Tabs',
            'x-component-props': {
              defaultValue: 'home',
            },
            enum: [
              { title: '首页', value: 'home', children: 'home' },
              { title: '订单', value: 'order', children: 'order' },
              { title: '我的', value: 'user', children: 'user' },
            ],
            items: [
              {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  children: '自定义 item 渲染 Button',
                },
              },
              {
                type: 'void',
                'x-component': 'Cell',
                'x-component-props': {
                  children: '自定义 item 渲染 Cell',
                },
              },
              {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  children: '{{$record.title}}',
                },
              },
            ],
          },
        },
      }}
    />
  );
}

export default observer(Index);
