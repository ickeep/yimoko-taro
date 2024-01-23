import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Divider, Radio, RadioGroup, Tabs, Toast } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      s: 'javd uivjbj vbjef bn jdshn iscn',
      v1: 'top',
    },
  });
  const { tab, s, v1 } = store.values;
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
          <Divider>基础用法</Divider>
          <Toast
            msg={s}
            trigger={{
              component: Cell,
            }}
          >
            提示
          </Toast>
          <Divider>位置</Divider>
          <RadioGroup value={v1} onChange={v => setValues({ v1: v.toString() })}>
            <Radio value='top'>top</Radio>
            <Radio value='bottom'>bottom</Radio>
            <Radio value='center'>center</Radio>
          </RadioGroup>
          <Toast
            msg={v1}
            position={v1}
            trigger={{
              component: Cell,
            }}
          >
            提示
          </Toast>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              d1: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '基础用法',
                },
              },
              c1: {
                type: 'void',
                'x-component': 'Toast',
                'x-component-props': {
                  msg: s,
                  trigger: {
                    component: 'Cell',
                  },
                  children: '提示',
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '位置',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'RadioGroup',
                'x-component-props': {
                  defaultValue: 'top',
                  onChange: (v) => {
                    console.log(v);
                    setValues({ v1: v.toString() });
                  },
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-component': 'Radio',
                    'x-component-props': {
                      id: 'top',
                      children: 'top',
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-component': 'Radio',
                    'x-component-props': {
                      id: 'bottom',
                      children: 'bottom',
                    },
                  },
                  r3: {
                    type: 'void',
                    'x-component': 'Radio',
                    'x-component-props': {
                      id: 'center',
                      children: 'center',
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Toast',
                'x-component-props': {
                  msg: '{{curStore,value.v1}}',
                  position: '{{curStore,value.v1}}',
                  trigger: {
                    component: 'Cell',
                  },
                  children: '提示',
                },
              },
            },
          }
          }
        />)
      }
    </div >
  );
}

export default observer(Index);
