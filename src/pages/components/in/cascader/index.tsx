import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({ defaultValues: { arr: [] } });
  console.log('index', store.values.arr);

  return (
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          arr: {
            type: 'array',
            title: '受控',
            'x-decorator': 'Cell',
            'x-component': 'Cascader',
            'x-component-props': {
              title: '选择地址',
              placeholder: '请选择地址',
              closeable: true,
            },
            enum: [
              {
                text: '浙江',
                value: 'zj',
                children: [
                  {
                    text: '杭州',
                    value: 'hz',
                    disabled: true,
                    children: [
                      { text: 'xh', value: '西湖区', disabled: true },
                      { text: 'yh', value: '余杭区' },
                    ],
                  },
                  {
                    value: 'wz',
                    text: '温州',
                    children: [
                      { value: 'lc', text: '鹿城区' },
                      { value: 'oh', text: '瓯海区' },
                    ],
                  },
                ],
              },
            ],
          },
        },
      }}
    />
  );
}

export default observer(Index);
