import { observer } from '@formily/react';
import { Col } from '@nutui/nutui-react-taro';
import { StorePage, useStore } from '@yimoko/store';

import { Button, Cell, Row, Space, Tabs } from '@/library';

function Index() {
  const store = useStore({ defaultValues: { tab: 'JSX', v1: false, v2: false } });
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
          <Cell.Group title='设置 open-type'>
            <Cell>
              <Space>
                <Button openType='share'>
                  分享给好友
                </Button>
                <Button openType='openSetting'>
                  打开授权设置页
                </Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='按钮类型'>
            <Cell>
              <Row type='flex' wrap='wrap'>
                <Space>
                  <Button type='primary'>主要按钮</Button>
                  <Button type='info'>信息按钮</Button>
                </Space>
                <Space>
                  <Button type='default'>默认按钮</Button>
                  <Button type='danger'>危险按钮</Button>
                </Space>
                <Space>
                  <Button type='warning'>警告按钮</Button>
                  <Button type='success'>成功按钮</Button>
                </Space>
              </Row>
            </Cell>
          </Cell.Group>
          <Cell.Group title='填充模式'>
            <Cell>
              <Space>
                <Button fill='solid'>Solid</Button>
                <Button fill='outline'>Outline</Button>
                <Button fill='none'>None</Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='禁用状态'>
            <Cell>
              <Space>
                <Button disabled type='primary'>禁用状态</Button>
                <Button fill='outline' disabled type='info'>禁用状态</Button>
                <Button fill='outline' disabled type='primary'>禁用状态</Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='按钮形状'>
            <Cell>
              <Space>
                <Button shape='square' type='primary'>方形按钮</Button>
                <Button type='info'>圆形按钮</Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='加载状态'>
            <Cell>
              <Space>
                <Button loading type='info' />
                <Button loading type='warning'>加载中...</Button>
                <Button
                  loading={store.loading}
                  type='success'
                  onClick={() => {
                    setTimeout(() => {
                      store.setLoading(false);
                    }, 1500);
                    store.setLoading(!store.loading);
                  }}
                >
                  Click me!
                </Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='图标按钮'>
            <Cell>
              <Row type='flex' wrap='wrap'>
                <Space>
                  <Button shape='square' type='primary' fill='outline' icon='star-fill'>
                    收集
                  </Button>
                  <Button shape='square' type='primary' icon='star'>
                    收藏
                  </Button>
                </Space>
                <Button
                  shape='round'
                  type='primary'
                  size='large'
                  icon='star'
                >
                  收藏
                </Button>
              </Row>
            </Cell>
          </Cell.Group>
          <Cell.Group title='按钮尺寸'>
            <Cell>
              <Row type='flex' wrap='wrap'>
                <Col>
                  <Button size='large' type='primary'>大号按钮</Button>
                </Col>
                <Space>
                  <Button type='primary'>普通按钮</Button>
                  <Button size='small' type='primary'>小型按钮</Button>
                </Space>
              </Row>
            </Cell>
          </Cell.Group>
          <Cell.Group title='块级元素'>
            <Cell>
              <Row type='flex' wrap='wrap'>
                <Space>
                  <Button block type='primary'>块级元素</Button>
                </Space>
              </Row>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              cell1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '设置 open-type',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    properties: {
                      btn1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          openType: 'share',
                          children: '分享给好友',
                        },
                      },
                      btn2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          openType: 'openSetting',
                          children: '打开授权设置页',
                        },
                      },
                    },
                  },
                },
              },
              cell2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '按钮类型',
                },
                'x-component': 'Cell',
                properties: {
                  r: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      wrap: 'wrap',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Space',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              children: '主要按钮',
                            },
                          },
                          btn2: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'info',
                              children: '信息按钮',
                            },
                          },
                        },
                      },
                      s2: {
                        type: 'void',
                        'x-component': 'Space',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'default',
                              children: '默认按钮',
                            },
                          },
                          btn2: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'danger',
                              children: '危险按钮',
                            },
                          },
                        },
                      },
                      s3: {
                        type: 'void',
                        'x-component': 'Space',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'warning',
                              children: '警告按钮',
                            },
                          },
                          btn2: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'success',
                              children: '成功按钮',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              cell3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '填充模式',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    properties: {
                      btn1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          fill: 'solid',
                          children: 'solid',
                        },
                      },
                      btn2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          fill: 'outline',
                          children: 'outline',
                        },
                      },
                      btn3: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          fill: 'none',
                          children: 'none',
                        },
                      },
                    },
                  },
                },
              },
              cell4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '禁用状态',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    properties: {
                      btn1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          disabled: true,
                          children: '禁用状态',
                        },
                      },
                      btn2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          fill: 'outline',
                          disabled: true,
                          type: 'info',
                          children: '禁用状态',
                        },
                      },
                      btn3: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          fill: 'outline',
                          disabled: true,
                          type: 'primary',
                          children: '禁用状态',
                        },
                      },
                    },
                  },
                },
              },
              cell5: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '按钮形状',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    properties: {
                      btn1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          shape: 'square',
                          children: '方形按钮',
                        },
                      },
                      btn2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'info',
                          children: '圆形按钮',
                        },
                      },
                    },
                  },
                },
              },
              cell6: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '加载状态',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    properties: {
                      btn1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'info',
                          loading: true,
                        },
                      },
                      btn2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'warning',
                          loading: true,
                        },
                      },
                      btn3: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'success',
                          loading: '{{curStore.loading}}',
                          children: 'Click me!',
                          onClick: () => {
                            setTimeout(() => {
                              store.setLoading(false);
                            }, 1500);
                            store.setLoading(!store.loading);
                          },
                        },
                      },
                    },
                  },
                },
              },
              cell7: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '图标按钮',
                },
                'x-component': 'Cell',
                properties: {
                  r: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      wrap: 'wrap',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Space',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              shape: 'square',
                              fill: 'outline',
                              icon: 'star-fill',
                              children: '收集',
                            },
                          },
                          btn2: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              shape: 'square',
                              icon: 'star',
                              children: '收集',
                            },
                          },
                        },
                      },
                      s2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          shape: 'round',
                          icon: 'star',
                          size: 'large',
                          children: '收集',
                        },
                      },
                    },
                  },
                },
              },
              cell8: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '按钮尺寸',
                },
                'x-component': 'Cell',
                properties: {
                  r: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      wrap: 'wrap',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Col',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              size: 'large',
                              children: '大号按钮',
                            },
                          },
                        },
                      },
                      s2: {
                        type: 'void',
                        'x-component': 'Space',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              children: '普通按钮',
                            },
                          },
                          btn2: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              size: 'small',
                              children: '小型按钮',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              cell9: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '块级元素',
                },
                'x-component': 'Cell',
                properties: {
                  r: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      wrap: 'wrap',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Space',
                        properties: {
                          btn1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              block: true,
                              children: '块级元素',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          }}
        />)}
    </div>
  );
}

export default observer(Index);
