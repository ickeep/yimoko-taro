import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Notify, Tabs } from '@/library';
import icons from '@/src/icons';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
      v6: false,
    },
  });
  const { tab, v1, v2, v3, v4, v5, v6 } = store.values;
  const { setValues } = store;
  const message = '123456!';

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
            <Cell>
              <Notify
                visible={v1}
                onClose={() => {
                  setValues({ v1: false });
                }}
              >{message}</Notify>
              <Button
                onClick={() => {
                  setValues({ v1: true });
                }}
              >显示</Button>
            </Cell>
          </Cell.Group>
          <Cell.Group title='通知类型'>
            <Cell>
              <Notify
                visible={v2}
                type='primary'
                onClose={() => {
                  setValues({ v2: false });
                }}
              >主要通知</Notify>
              <Button
                type='primary'
                onClick={() => {
                  setValues({ v2: true });
                }}
              >主要通知</Button>
            </Cell>
            <Cell>
              <Notify
                visible={v3}
                type='success'
                onClose={() => {
                  setValues({ v3: false });
                }}
              >成功通知</Notify>
              <Button
                type='success'
                onClick={() => {
                  setValues({ v3: true });
                }}
              >成功通知</Button>
            </Cell>
            <Cell>
              <Notify
                visible={v4}
                type='danger'
                onClose={() => {
                  setValues({ v4: false });
                }}
              >危险通知</Notify>
              <Button
                type='danger'
                onClick={() => {
                  setValues({ v4: true });
                }}
              >危险通知</Button>
            </Cell>
            <Cell>
              <Notify
                visible={v5}
                type='warning'
                onClose={() => {
                  setValues({ v5: false });
                }}
              >警告通知</Notify>
              <Button
                type='warning'
                onClick={() => {
                  setValues({ v5: true });
                }}
              >警告通知</Button>
            </Cell>
          </Cell.Group>
          <Cell.Group title='时长与位置'>
            <Cell>
              <Notify
                visible={v6}
                duration={5000}
                position='bottom'
                onClose={() => {
                  setValues({ v6: false });
                }}
              >{message}</Notify>
              <Button
                onClick={() => {
                  setValues({ v6: true });
                }}
              >显示</Button>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          scope={{ icons }}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Notify',
                    'x-component-props': {
                      visible: '{{curStore.values.v1}}',
                      onClose: () => setValues({ v1: false }),
                      children: message,
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      onClick: () => setValues({ v1: true }),
                      children: '显示',
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '通知类型',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    properties: {
                      g1: {
                        type: 'void',
                        'x-component': 'Notify',
                        'x-component-props': {
                          visible: '{{curStore.values.v2}}',
                          type: 'primary',
                          onClose: () => setValues({ v2: false }),
                          children: '主要通知',
                        },
                      },
                      g2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          onClick: () => setValues({ v2: true }),
                          children: '主要通知',
                        },
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    properties: {
                      g1: {
                        type: 'void',
                        'x-component': 'Notify',
                        'x-component-props': {
                          visible: '{{curStore.values.v3}}',
                          type: 'success',
                          onClose: () => setValues({ v3: false }),
                          children: '成功通知',
                        },
                      },
                      g2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'success',
                          onClick: () => setValues({ v3: true }),
                          children: '成功通知',
                        },
                      },
                    },
                  },
                  c3: {
                    type: 'void',
                    'x-component': 'Cell',
                    properties: {
                      g1: {
                        type: 'void',
                        'x-component': 'Notify',
                        'x-component-props': {
                          visible: '{{curStore.values.v4}}',
                          type: 'danger',
                          onClose: () => setValues({ v4: false }),
                          children: '危险通知',
                        },
                      },
                      g2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'danger',
                          onClick: () => setValues({ v4: true }),
                          children: '危险通知',
                        },
                      },
                    },
                  },
                  c4: {
                    type: 'void',
                    'x-component': 'Cell',
                    properties: {
                      g1: {
                        type: 'void',
                        'x-component': 'Notify',
                        'x-component-props': {
                          visible: '{{curStore.values.v5}}',
                          type: 'warning',
                          onClose: () => setValues({ v5: false }),
                          children: '警告通知',
                        },
                      },
                      g2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'warning',
                          onClick: () => setValues({ v5: true }),
                          children: '警告通知',
                        },
                      },
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '时长与位置',
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Notify',
                    'x-component-props': {
                      visible: '{{curStore.values.v6}}',
                      duration: 5000,
                      position: 'bottom',
                      onClose: () => setValues({ v6: false }),
                      children: message,
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      onClick: () => setValues({ v6: true }),
                      children: '显示',
                    },
                  },
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

