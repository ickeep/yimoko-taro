import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import { useState } from 'react';

import { Button, Cell, Col, Divider, Row, Space } from '@/library';


function Index() {
  const store = useStore({});
  const { loading, setLoading } = store;

  return (
    <>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            arr1: {
              type: 'void',
              title: '设置 open-type',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '设置 open-type',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
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
            arr2: {
              type: 'void',
              title: '按钮类型',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '按钮类型',
                  },
                },
                arr2: {
                  type: 'void',
                  'x-decorator': 'Cell',
                  'x-component': 'Row',
                  'x-component-props': {
                    type: 'flex',
                    wrap: 'wrap',
                  },
                  properties: {
                    row1: {
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
                    row2: {
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
                    row3: {
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
            arr3: {
              type: 'void',
              title: '填充模式',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '填充模式',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
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
            arr4: {
              type: 'void',
              title: '禁用状态',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '禁用状态',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
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
            arr5: {
              type: 'void',
              title: '按钮形状',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '按钮形状',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
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
            arr6: {
              type: 'void',
              title: '加载状态',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '加载状态',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
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
                            setLoading(false);
                          }, 1500);
                          setLoading(!loading);
                        },
                      },
                    },
                  },
                },
              },
            },
            arr7: {
              type: 'void',
              title: '图标按钮',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '图标按钮',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
                  'x-component': 'Row',
                  'x-component-props': {
                    type: 'flex',
                    wrap: 'wrap',
                  },
                  properties: {
                    col1: {
                      type: 'void',
                      'x-component': 'Space',
                      'x-decorator': 'Col',
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
                    col2: {
                      type: 'void',
                      'x-component': 'Col',
                      properties: {
                        btn1: {
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
              },
            },
            arr8: {
              type: 'void',
              title: '按钮尺寸',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '按钮尺寸',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
                  'x-component': 'Row',
                  'x-component-props': {
                    type: 'flex',
                    wrap: 'wrap',
                  },
                  properties: {
                    col1: {
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
                    col2: {
                      type: 'void',
                      'x-component': 'Space',
                      'x-decorator': 'Col',
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
            arr9: {
              type: 'void',
              title: '块级元素',
              'x-component': 'Row',
              properties: {
                str1: {
                  type: 'void',
                  'x-component': 'Text',
                  'x-component-props': {
                    children: '块级元素',
                  },
                },
                arr1: {
                  type: 'void',
                  'x-decorator': 'Cell',
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
        }}
      />
      <Divider> JSX 写法 </Divider>
      <Row>
        设置 open-type
        <Cell>
          <Space>
            <Button openType='share'>分享给好友</Button>
            <Button openType='openSetting'>打开授权设置页</Button>
          </Space>
        </Cell>
      </Row>
      <Row>
        按钮类型
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
      </Row>
      <Row>
        填充模式
        <Cell>
          <Space>
            <Button fill='solid'>Solid</Button>
            <Button fill='outline'>Outline</Button>
            <Button fill='none'>None</Button>
          </Space>
        </Cell>
      </Row>
      <Row>
        禁用状态
        <Cell>
          <Space>
            <Button disabled type='primary'>禁用状态</Button>
            <Button fill='outline' disabled type='info'>禁用状态</Button>
            <Button fill='outline' disabled type='primary'>禁用状态</Button>
          </Space>
        </Cell>
      </Row>
      <Row>
        按钮形状
        <Cell>
          <Space>
            <Button shape='square' type='primary'>方形按钮</Button>
            <Button type='info'>圆形按钮</Button>
          </Space>
        </Cell>
      </Row>
      <Row>
        加载状态
        <Cell>
          <Space>
            <Button loading type='info' />
            <Button loading type='warning'>加载中...</Button>
            <Button
              loading={loading}
              type='success'
              onClick={() => {
                setTimeout(() => {
                  setLoading(false);
                }, 1500);
                setLoading(!loading);
              }}
            >
              Click me!
            </Button>
          </Space>
        </Cell>
      </Row>
      <Row>
        图标按钮
        <Cell>
          <Row type='flex' wrap='wrap'>
            <Col>
              <Space>
                <Button shape='square' type='primary' fill='outline' icon='star-fill'>收集</Button>
                <Button shape='square' type='primary' icon='star'>收藏</Button>
              </Space>
            </Col>
            <Col>
              <Button
                shape='round'
                type='primary'
                size='large'
                icon='star'
              >
                收藏
              </Button>
            </Col>
          </Row>
        </Cell>
      </Row>
      <Row>
        按钮尺寸
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
      </Row>
      <Row>
        块级元素
        <Cell>
          <Row type='flex' wrap='wrap'>
            <Space>
              <Button block type='primary'>块级元素</Button>
            </Space>
          </Row>
        </Cell>
      </Row>
      <Divider> Shame 写法 </Divider>
    </>
  );
}

export default observer(Index);
