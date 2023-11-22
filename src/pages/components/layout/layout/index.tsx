import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
    },
  });
  const { tab } = store.values;
  const { setValues } = store;

  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Cell.Group title='基础用法'>

          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
          }}
        />)
      }
    </div >
  );
}

export default observer(Index);
