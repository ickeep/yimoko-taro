
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import React from 'react';

import { ActionSheet, Button } from '@/library';

const options = [{ name: '全部商品', value: 0 }, { name: '新款商品', value: 1 }, { name: '活动商品', value: 2, url: '/pages/index/index' }];

function Index() {
  const store = useStore({ defaultValues: { v1: 0 } });

  return (
    <div>
      <ActionSheet options={options} value={store.values.v1} onChange={v => store.setValues({ v1: v })}>
        <Button />
      </ActionSheet>

      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            v1: {
              title: 'schema',
              type: 'number',
              enum: options,
              'x-component': 'ActionSheet',
              properties: {
                btn: {
                  type: 'void',
                  'x-component': 'Button',
                },
              },
            },
          },
        }}
      />
    </div>

  );
}

export default observer(Index);
