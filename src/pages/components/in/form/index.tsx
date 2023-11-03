import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({
    defaultValues: {
      str: 'str',
      num: 1,
      bool: true,
      arr: [],
      obj: {
        name: '张三',
      },
    },
  });

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          form: {
            type: 'void',
            'x-component': 'Form',
            properties: {
              str: {
                type: 'string',
                title: '字符串',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
              },
            },
          },
        },
      }}
    />
  );
}

export default observer(Index);
