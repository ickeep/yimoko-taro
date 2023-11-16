
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Avatar, Dialog, Tabs } from '@/library';

function Index() {
  const store = useStore({ defaultValues: { tab: 'JSX', v1: false, v2: false } });
  const { tab } = store.values;
  return (
    <div>
      {/* Dialog 在 TabPane 里时 高度有问题 待官方修复  */}
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => store.setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <Dialog value={store.values.visible} trigger={{ children: '对话框', onClick: () => store.setValues({ v1: true }) }}  >
          <Avatar shape='square' />
        </Dialog>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              v2: {
                title: '对话框',
                type: 'boolean',
                'x-component': 'Dialog',
                properties: {
                  avatar: {
                    type: 'void',
                    'x-component': 'Avatar',
                  },
                },
              },
              d: {
                type: 'void',
                'x-decorator': 'Dialog',
                'x-decorator-props': {},
                'x-component': 'Avatar',
              },
            },
          }}
        />)}
    </div>
  );
}

export default observer(Index);
