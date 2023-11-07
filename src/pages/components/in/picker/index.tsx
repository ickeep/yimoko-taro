import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, Picker } from '@/library';

function Index() {
  const store = useStore({ defaultValues: { arr: [], arr2: [] } });
  console.log('index', store.values.arr);
  console.log('index', store.values.arr2);

  return (
    <>
      <Picker
        value={store.values.arr}
        onChange={(value: any) => store.setValues({ arr: value })}
        options={options}
      >
        {/* 子节点可当触发器 */}
        <Cell />
      </Picker>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            // arr: {
            //   type: 'array',
            //   title: '受控',
            //   enum: options,
            //   'x-decorator': 'Cell',
            //   'x-component': 'Picker',
            //   'x-component-props': {
            //     placeholder: '请选择地址 - 默认触发器 Text',
            //     closeable: true,
            //   },
            // },
            // // 自定义触发器
            // customize: {
            //   type: 'void',
            //   title: '自定义触发器',
            //   'x-component': 'Divider',
            //   'x-component-props': {
            //     children: 'schema 自定义触发器',
            //   },
            // },
            arr2: {
              type: 'array',
              title: '受控',
              enum: options,
              'x-component': 'Picker',
              'x-component-props': {
                placeholder: '请选择地址 - 自定义触发器',
                closeable: true,
              },
              properties: {
                cell: {
                  type: 'void',
                  'x-component': 'Cell',
                },
              },
            },
          },
        }}
      />
    </>
  );
}

export default observer(Index);

const options = [
  {
    text: '浙江',
    value: 'zj',
    children: [
      {
        text: '杭州',
        value: 'hz',
        disabled: true,
        children: [
          { text: '西湖区', value: 'xh', disabled: true },
          { text: '余杭区', value: 'yh' },
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
];
