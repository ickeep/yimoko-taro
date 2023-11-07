import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({
    defaultValues: {}, api: params => console.log('api', params),
  });

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          base: {
            type: 'void',
            'x-component': 'Trigger',
            'x-component-props': {
              text: '基础',
              onTrig: '{{curStore.runAPI}}',
            },
          },
          // 自定义组件
          custom: {
            type: 'void',
            'x-decorator': 'Trigger',
            'x-decorator-props': {
              onTrig: '{{curStore.runAPI}}',
            },
            'x-component': 'Cell',
            'x-component-props': {
              children: '自定义组件',
            },
          },
          children: {
            type: 'void',
            'x-component': 'Trigger',
            'x-component-props': {
              text: '基础',
              onTrig: '{{curStore.runAPI}}',
            },
            properties: {
              cell: {
                type: 'void',
                'x-component': 'Cell',
                'x-component-props': {
                  children: '自定义组件',
                },
              },
              Btn: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  children: 'Btn',
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
