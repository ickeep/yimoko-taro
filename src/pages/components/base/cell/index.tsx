
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import React from 'react';

import { Cell, Switch, Tabs } from '@/library';

import icons from '@/src/icons';

function Index() {
  const store = useStore({ defaultValues: { tab: 'Schema' } });
  const { tab } = store.values;
  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => store.setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Cell.Group title='基础用法'>
            <Cell title='我是标题' extra='描述文字' />
            <Cell
              title='我是标题'
              description='我是描述'
              extra='描述文字'
            />
            <Cell
              title='点击测试'
              onClick={() => console.log('点击测试')}
            />
            <Cell title='圆角设置' radius={10} />
            <Cell
              align='center'
              title='垂直居中'
              description='通过 align 属性'
              extra='描述文字'
            />
          </Cell.Group>
          <Cell.Group title='自定义标题区域'>
            <Cell
              title={
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <icons.My />
                  我是标题
                </div>
              }
              description={
                <span>我是描述<b style={{ color: 'red' }}>1</b></span>
              }
              extra='描述文字'
            />
          </Cell.Group>
          <Cell.Group title='自定义右侧箭头区域'>
            <Cell title='Switch' extra={<Switch defaultChecked />} />
          </Cell.Group>
          <Cell.Group title='分组用法'>
            <Cell
              className='nutui-cell--clickable'
              title='链接'
              align='center'
            />
            <Cell
              className='nutui-cell--clickable'
              title='URL 跳转'
              extra={
                <span>pages/components/index</span>
              }
              align='center'
              onClick={() => console.log('跳转失败')}
            />
          </Cell.Group>
          <Cell.Group
            divider={false}
            title='分组用法'
            description='单元格之间不显示下边线'
          >
            <Cell title='我是标题' extra='描述文字' />
            <Cell title='我是标题' extra='描述文字' />
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
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  cell1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '我是标题',
                      extra: '描述文字',
                    },
                  },
                  cell2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '我是标题',
                      description: '我是描述',
                      extra: '描述文字',
                    },
                  },
                  cell3: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '点击测试',
                      onClick: () => console.log('点击测试'),
                    },
                  },
                  cell4: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '圆角设置',
                      radius: 10,
                    },
                  },
                  cell5: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '垂直居中',
                      description: '通过 align 属性',
                      extra: '描述文字',
                      align: 'center',
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义标题区域',
                },
                properties: {
                  cell1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      extra: '描述文字',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        title: {
                          type: 'void',
                          'x-component': 'div',
                          'x-component-props': {
                            style: {
                              display: 'inline-flex',
                              alignItems: 'center',
                            },

                          },
                          properties: {
                            t1: {
                              type: 'void',
                              'x-component': '{{icons.My}}',
                            },
                            t2: {
                              type: 'void',
                              'x-component': 'span',
                              'x-component-props': {
                                children: '我是标题',
                              },
                            },
                          },
                        },
                        description: {
                          type: 'void',
                          'x-component': 'span',
                          properties: {
                            d1: {
                              type: 'void',
                              'x-component': 'text',
                              'x-component-props': {
                                children: '我是描述',
                              },
                            },
                            d2: {
                              type: 'void',
                              'x-component': 'b',
                              'x-component-props': {
                                style: {
                                  color: 'red',
                                },
                                children: '1',
                              },
                            },
                          },
                        },
                      },

                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义右侧箭头区域',
                },
                properties: {
                  cell1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'Switch',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Switch',
                          'x-component-props': {
                            defaultChecked: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
              g4: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '分组用法',
                },
                properties: {
                  cell1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '链接',
                      align: 'center',
                    },
                  },
                  cell2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'URL 跳转',
                      align: 'center',
                      onClick: () => console.log('跳转失败'),
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'span',
                          'x-component-props': {
                            children: 'pages/components/index',
                          },
                        },
                      },
                    },
                  },
                },
              },
              g5: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '分组用法',
                  divider: false,
                  description: '单元格之间不显示下边线',
                },
                properties: {
                  cell1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '我是标题',
                      extra: '描述文字',
                    },
                  },
                  cell2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '我是标题',
                      extra: '描述文字',
                    },
                  },
                },
              },
            },
          }}
        />)
      }
    </div >
  );
}

export default observer(Index);

