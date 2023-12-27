import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Divider, Popover, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: false,
    },
  });
  const { tab, v1 } = store.values;
  const { setValues } = store;
  const itemList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ];

  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Divider>基础用法</Divider>
          <Popover
            visible={v1}
            list={itemList}
            location='bottom-start'
            style={{ marginRight: '30px' }}
            onClick={() => {
              v1 ? setValues({ v1: false }) : setValues({ v1: true });
            }}
            onOpen={() => {
              console.log('打开菜单时触发');
            }}
            onClose={() => {
              console.log('关闭菜单时触发');
            }}
          >
            <Button type='primary' shape='square'>
              基础用法
            </Button>
          </Popover>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {

            },
          }
          }
        />)
      }
    </div >
  );
}

export default observer(Index);

