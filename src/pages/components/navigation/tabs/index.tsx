import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: '0',
      v2: '1',
      v3: '0',
      v4: '0',
    },
  });
  const { tab, v1, v2, v3, v4 } = store.values;
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
              <Tabs
                value={v1}
                onChange={(value) => {
                  setValues({ v1: `${value}` });
                }}
                style={{ width: '100%' }}
              >
                <Tabs.TabPane value='0' title='Tab 1'> Tab 1 </Tabs.TabPane>
                <Tabs.TabPane value='1' title='Tab 2'> Tab 2 </Tabs.TabPane>
                <Tabs.TabPane value='2' title='Tab 3'> Tab 3 </Tabs.TabPane>
              </Tabs>
            </Cell>
          </Cell.Group>
          <Cell.Group title='粘性布局'>
            <Cell>在微信小程序里组件外层元素不能存在 overflow 为 hidden、auto、scroll的设置。</Cell>
          </Cell.Group>
          <>
            <Tabs value={v2}
              tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}
              onChange={(value) => {
                setValues({ v2: `${value}` });
              }}
            >
              <Tabs.TabPane value='0' title='Tab 1'>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
                <p>Tab 1</p>
              </Tabs.TabPane>
              <Tabs.TabPane value='1' title='Tab 2'>
                <p>Tab 2</p>
                <p>Tab 2</p>
                <p>Tab 2</p>
                <p>Tab 2</p>
                <p>Tab 2</p>
                <p>Tab 2</p>
                <p>Tab 2</p>
                <p>Tab 2</p>
              </Tabs.TabPane>
              <Tabs.TabPane value='2' title='Tab 3'>
                <p>Tab 3</p>
                <p>Tab 3</p>
                <p>Tab 3</p>
                <p>Tab 3</p>
                <p>Tab 3</p>
                <p>Tab 3</p>
                <p>Tab 3</p>
                <p>Tab 3</p>
              </Tabs.TabPane>
            </Tabs>
          </>
          <Cell.Group title='适应高度'>
            <Cell>
              <Tabs
                value={v3}
                autoHeight
                onChange={(value) => {
                  setValues({ v3: `${value}` });
                }}
                style={{ width: '100%' }}
              >
                <Tabs.TabPane value='0' title='Tab 1'>
                  <p>Tab 1</p>
                  <p>Tab 1</p>
                  <p>Tab 1</p>
                  <p>Tab 1</p>
                </Tabs.TabPane>
                <Tabs.TabPane value='1' title='Tab 2'> Tab 2 </Tabs.TabPane>
                <Tabs.TabPane value='2' title='Tab 3'> Tab 3 </Tabs.TabPane>
              </Tabs>
            </Cell>
          </Cell.Group>
          <Cell.Group title='水平布局'>
            <Cell>
              <Tabs
                value={v4}
                onChange={(value) => {
                  setValues({ v4: `${value}` });
                }}
                style={{ width: '100%' }}
                direction='vertical'
              >
                <Tabs.TabPane value='0' title='Tab 1'> Tab 1 </Tabs.TabPane>
                <Tabs.TabPane value='1' title='Tab 2'> Tab 2 </Tabs.TabPane>
                <Tabs.TabPane value='2' title='Tab 3'> Tab 3 </Tabs.TabPane>
              </Tabs>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              c1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  v1: {
                    type: 'string',
                    'x-component': 'Tabs',
                    'x-component-props': {
                      onchange: (value: any) => {
                        setValues({ v1: value });
                      },
                      style: { width: '100%' },
                    },
                    enum: [
                      { title: 'Tab 1', value: '0', children: 'Tab 1' },
                      { title: 'Tab 2', value: '1', children: 'Tab 2' },
                      { title: 'Tab 3', value: '2', children: 'Tab 3' },
                    ],
                    items: [
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                    ],
                  },
                },
              },
              c2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '粘性布局',
                },
                'x-component': 'Cell',
                'x-component-props': {
                  children: '在微信小程序里组件外层元素不能存在 overflow 为 hidden、auto、scroll的设置。',
                },
              },
              v2: {
                type: 'string',
                'x-component': 'Tabs',
                'x-component-props': {
                  onchange: (value: any) => {
                    setValues({ v2: value });
                  },
                  tabStyle: { position: 'sticky', top: '0px', zIndex: 11 },
                },
                enum: [
                  { title: 'Tab 1', value: '0', children: 'Tab 1' },
                  { title: 'Tab 2', value: '1', children: 'Tab 2' },
                  { title: 'Tab 3', value: '2', children: 'Tab 3' },
                ],
                items: [
                  {
                    type: 'void',
                    'x-component': 'Tabs.TabPane',
                    properties: {
                      p1: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p2: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p3: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p4: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p5: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p6: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p7: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      p8: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                    },
                  },
                  {
                    type: 'void',
                    'x-component': 'Tabs.TabPane',
                    properties: {
                      p1: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p2: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p3: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p4: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p5: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p6: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p7: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      p8: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                    },
                  },
                  {
                    type: 'void',
                    'x-component': 'Tabs.TabPane',
                    properties: {
                      p1: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p2: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p3: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p4: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p5: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p6: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p7: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                      p8: {
                        type: 'void',
                        'x-component': 'p',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                    },
                  },
                ],
              },
              c3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '适应高度',
                },
                'x-component': 'Cell',
                properties: {
                  v3: {
                    type: 'string',
                    'x-component': 'Tabs',
                    'x-component-props': {
                      onchange: (value: any) => {
                        setValues({ v3: value });
                      },
                      style: { width: '100%' },
                      autoHeight: true,
                    },
                    enum: [
                      { title: 'Tab 1', value: '0', children: 'Tab 1' },
                      { title: 'Tab 2', value: '1', children: 'Tab 2' },
                      { title: 'Tab 3', value: '2', children: 'Tab 3' },
                    ],
                    items: [
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        properties: {
                          p1: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p2: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p3: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p4: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p5: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p6: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p7: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                          p8: {
                            type: 'void',
                            'x-component': 'p',
                            'x-component-props': {
                              children: 'Tab 1',
                            },
                          },
                        },
                      },
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                    ],
                  },
                },
              },
              c4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '水平布局',
                },
                'x-component': 'Cell',
                properties: {
                  v4: {
                    type: 'string',
                    'x-component': 'Tabs',
                    'x-component-props': {
                      onchange: (value: any) => {
                        setValues({ v4: value });
                      },
                      style: { width: '100%' },
                      direction: 'vertical',
                    },
                    enum: [
                      { title: 'Tab 1', value: '0', children: 'Tab 1' },
                      { title: 'Tab 2', value: '1', children: 'Tab 2' },
                      { title: 'Tab 3', value: '2', children: 'Tab 3' },
                    ],
                    items: [
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 1',
                        },
                      },
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 2',
                        },
                      },
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          children: 'Tab 3',
                        },
                      },
                    ],
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
