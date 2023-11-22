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
          c1: {
            type: 'void',
            'x-component': 'Grid',
            'x-component-props': {
              columns: 2,
            },
            properties: {
              g1: {
                type: 'void',
                'x-component': 'Grid.Item',
                'x-component-props': {
                  text: 'g1',
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Grid.Item',
                'x-component-props': {
                  text: 'g2',
                },
              },
              g3: {
                type: 'void',
                'x-component': 'Grid.Item',
                'x-component-props': {
                  text: 'g3',
                },
              },
              g4: {
                type: 'void',
                'x-component': 'Grid.Item',
                'x-component-props': {
                  text: 'g4',
                },
              },
            },
          },
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
            'x-component-props': {
              columns: 2,
            },
            items: {
              type: 'void',
              'x-decorator': 'Grid.Item',
              'x-decorator-props': {
                text: '123',
              },
              'x-component': 'div',
              properties: {
                btnC: {
                  type: 'void',
                  'x-component': 'Button',
                  'x-component-props': {
                    children: '123',
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
