import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Avatar, Badge, Cell, Space, Tabs } from '@/library';
import icons from '@/src/icons';

const { My, Star, Heart } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      v1: 8,
      v2: 'NEW',
      v3: 88,
      v4: <Star color='white' />,
      v5: <Heart color='white' />,
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
              <Space style={{ width: '100%' }} justify='around'>
                <Badge value={8}>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
                <Badge value='NEW'>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
                <Badge dot>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='最大值'>
            <Cell>
              <Space style={{ width: '100%' }} justify='around'>
                <Badge value={8} max={10}>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
                <Badge value={88} max={10}>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
              </Space>
            </Cell>
          </Cell.Group>
          {/* nutui库存在bug，同时改变value和color时，color不会生效 */}
          <Cell.Group title='自定义内容'>
            <Cell>
              <Space style={{ width: '100%' }} justify='around'>
                <Badge value={<Star color='white' />} color='red'>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
                <Badge
                  value={<Heart color='white' />}
                  color='#777'
                >
                  <Avatar icon={<My />} shape='square' />
                </Badge>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义位置'>
            <Cell>
              <Space style={{ width: '100%' }} justify='around'>
                <Badge value={8} top='5' right='5'>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
                <Badge value='NEW' top='10' right='10'>
                  <Avatar icon={<My />} shape='square' />
                </Badge>
              </Space>
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
                  c1: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      style: { width: '100%' },
                      justify: 'around',
                    },
                    properties: {
                      v1: {
                        type: 'number',
                        'x-component': 'Badge',
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                      v2: {
                        type: 'string',
                        'x-component': 'Badge',
                        'x-component-props': {
                          value: 'NEW',
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                      v3: {
                        type: 'number',
                        'x-component': 'Badge',
                        'x-component-props': {
                          dot: true,
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '最大值',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      style: { width: '100%' },
                      justify: 'around',
                    },
                    properties: {
                      v1: {
                        type: 'number',
                        'x-component': 'Badge',
                        'x-component-props': {
                          max: 10,
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                      v2: {
                        type: 'number',
                        'x-component': 'Badge',
                        'x-component-props': {
                          max: 10,
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
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
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义内容',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      style: { width: '100%' },
                      justify: 'around',
                    },
                    properties: {
                      v4: {
                        type: 'Object',
                        'x-component': 'Badge',
                        'x-component-props': {
                          color: 'red',
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                      v5: {
                        type: 'Object',
                        'x-component': 'Badge',
                        'x-component-props': {
                          color: '#777',
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                              value: <Heart color='white' />,
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              g4: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义位置',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      style: { width: '100%' },
                      justify: 'around',
                    },
                    properties: {
                      v1: {
                        type: 'number',
                        'x-component': 'Badge',
                        'x-component-props': {
                          top: 5,
                          right: 5,
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
                        },
                      },
                      v2: {
                        type: 'string',
                        'x-component': 'Badge',
                        'x-component-props': {
                          top: 10,
                          right: 10,
                        },
                        properties: {
                          a1: {
                            type: 'void',
                            'x-component': 'Avatar',
                            'x-component-props': {
                              shape: 'square',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.My}}',
                                },
                              },
                            },
                          },
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
