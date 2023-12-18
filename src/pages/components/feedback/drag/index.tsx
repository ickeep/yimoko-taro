import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Drag, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
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
            <Cell>
              <Drag>
                <Button type='primary'>拖拽</Button>
              </Drag>
              <Drag attract>
                <Button type='primary'>自动吸边</Button>
              </Drag>
            </Cell>
          </Cell.Group>
          <Cell.Group title='限制拖拽方向'>
            <Cell>
              <Drag direction='x' style={{ top: '200px', left: '8px' }}>
                <Button type='primary'>只能X轴拖拽</Button>
              </Drag>
              <Drag direction='y' style={{ top: '200px', right: '50px' }}>
                <Button type='primary'>只能Y轴拖拽</Button>
              </Drag>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'object',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                properties: {
                  d1: {
                    type: 'void',
                    'x-component': 'Drag',
                    properties: {
                      d1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '拖拽',
                        },
                      },
                    },
                  },
                  d2: {
                    type: 'void',
                    'x-component': 'Drag',
                    'x-component-props': {
                      attract: true,
                    },
                    properties: {
                      d1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '自动吸边',
                        },
                      },
                    },
                  },
                },
              },
              g2: {
                type: 'object',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '限制拖拽方向',
                },
                properties: {
                  d1: {
                    type: 'void',
                    'x-component': 'Drag',
                    'x-component-props': {
                      direction: 'x',
                      style: {
                        top: '200px',
                        left: '8px',
                      },
                    },
                    properties: {
                      d1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '只能X轴拖拽',
                        },
                      },
                    },
                  },
                  d2: {
                    type: 'void',
                    'x-component': 'Drag',
                    'x-component-props': {
                      direction: 'y',
                      style: {
                        top: '200px',
                        right: '50px',
                      },
                    },
                    properties: {
                      d1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '只能Y轴拖拽',
                        },
                      },
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
