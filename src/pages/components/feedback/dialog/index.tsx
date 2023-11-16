
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Avatar, Dialog, TabPane, Tabs } from '@/library';

function Index() {
  const store = useStore({ defaultValues: { v1: false, v2: false } });
  return (
    <Tabs defaultValue='jsx'>
      <TabPane title='JSX' value='jsx'>
        <Dialog value={store.values.visible} trigger={{ children: '对话框', onClick: () => store.setValues({ v1: true }) }}  >
          <Avatar shape='square' />
        </Dialog>
      </TabPane>
      <TabPane title='Schema' value='schema' >
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              v2: {
                type: 'boolean',
                'x-component': 'Dialog',
                'x-component-props': {
                  title: '对话框',
                },
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
        />
      </TabPane>
    </Tabs >
  );
}

export default observer(Index);
