
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Avatar, Badge, Divider } from '@/library';

function Index() {
  const store = useStore({ defaultValues: { v1: 11 } });

  return (
    <div>
      <Divider>JSX 用法</Divider>
      <Badge value={store.values.v1} >
        <Avatar shape='square' />
      </Badge>

      <Divider>Schema 用法</Divider>

      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            v1: {
              title: 'schema',
              type: 'number',
              'x-component': 'Badge',
              properties: {
                avatar: {
                  type: 'void',
                  'x-component': 'Avatar',
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
