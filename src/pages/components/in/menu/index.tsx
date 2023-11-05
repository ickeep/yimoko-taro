import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Menu, MenuItem } from '@/library';


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
    <>
      <Menu>
        <MenuItem value={0} options={[{ text: '全部商品', value: 0 }, { text: '新款商品', value: 1 }, { text: '活动商品', value: 2 }]} />
        <MenuItem value={0} options={[{ text: '全部商品', value: 0 }, { text: '新款商品', value: 1 }, { text: '活动商品', value: 2 }]} />
      </Menu>
      <Menu>
        <MenuItem value={0} options={[{ text: '全部商品', value: 0 }, { text: '新款商品', value: 1 }, { text: '活动商品', value: 2 }]} />
      </Menu>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            base: {
              type: 'void',
              'x-component': 'Menu',
              properties: {
                m1: {
                  title: '菜单一',
                  type: 'string',
                  'x-component': 'MenuItem',
                  enum: [
                    { text: '选项 1', value: '1' },
                    { text: '选项 2', value: '2' },
                  ],
                },
                m2: {
                  title: '菜单二',
                  type: 'string',
                  'x-component': 'MenuItem',
                  enum: [
                    { text: '选项 1', value: '1' },
                    { text: '选项 2', value: '2' },
                  ],
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
