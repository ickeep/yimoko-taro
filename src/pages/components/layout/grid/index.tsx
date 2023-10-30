import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({
    defaultValues: {
      strArr: ['str1', 'str2', 'str3'],
    },
  });

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          strArr: {
            type: 'array',
            title: '字符串数组',
            'x-component': 'Grid',
            items: {
              type: 'string',
              'x-component': 'Grid.Item',
              properties: {
                void: {
                  type: 'void',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '{{$record}}',
                  },
                },
              },
            },
          },
          void: {
            type: 'void',
            title: 'options',
            enum: [1, 2, 3, 4],
            'x-component': 'Grid',
            items: {
              type: 'void',
              'x-decorator': 'Grid.Item',
              'x-decorator-props': {
                text: '{{$record.label}}',
              },
              'x-component': 'div',
              properties: {
                btnC: {
                  type: 'void',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '{{$record.label}}',
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
