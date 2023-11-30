import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

function Index() {
  const store = useStore({});

  return (
        <>
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              base: {

              },
            },
          }}
        />
        </>
  );
}

export default observer(Index);
