import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({
    defaultValues: {
      strArr: [],
      numArr: [],
      objArr: [],
    },
    dictConfig: [
      { field: 'strArr', data: ['str1', 'str2', 'str3'] },
      { field: 'numArr', data: [1, 2, 3] },
      {
        field: 'objArr',
        data: [
          { name: 'obj1', value: 'obj1' },
          { name: 'obj2', value: 'obj2' },
          { name: 'obj3', value: 'obj3' },
        ],
      },

    ],
  });

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          strArr: {
            type: 'void',
            title: '字符串数组',
            enum: [1, 2, 3, 4],
            'x-component': 'Grid',
            items: {
              'x-decorator-props': {
                text: '{{$record.label}}',
              },

            },
          },
        },
      }}
    />
  );
}

export default Index;
