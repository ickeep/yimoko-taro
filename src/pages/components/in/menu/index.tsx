import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({
    defaultValues: {
      base: {
        m1: '',
      },
    },
  });
  console.log('index', store.values.base);

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          base: {
            type: 'void',
            'x-component': 'Menu',
            properties: {
              // m1: {
              //   title: '菜单一',
              //   type: 'string',
              //   'x-component': 'Menu.Item',
              //   enum: [
              //     { text: '选项 1', value: '1' },
              //     { text: '选项 2', value: '2' },
              //   ],
              // },
            },
          },
        },
      }}
    />
  );
}

export default observer(Index);
