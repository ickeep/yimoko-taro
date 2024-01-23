import Taro from '@tarojs/taro';

import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Divider, InputNumber, Swipe, Tabs } from '@/library';

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
          <Divider>基础用法</Divider>

          <Swipe
            rightAction={
              <Button type='primary' shape='square'>
                删除
              </Button>
            }
          >
            <Cell title='左滑删除' />
          </Swipe>
          <Divider>禁用滑动</Divider>
          <Swipe
            rightAction={
              <Button shape='square' type='danger'>
                删除
              </Button>
            }
            disabled
          >
            <Cell title='禁用滑动' />
          </Swipe>
          <Divider>事件监听</Divider>
          <Swipe
            leftAction={
              <Button shape='square' type='success'>
                选择
              </Button>
            }
            rightAction={
              <>
                <Button shape='square' type='danger'>
                  删除
                </Button>
                <Button shape='square' type='info'>
                  收藏
                </Button>
              </>
            }
            onOpen={() => Taro.showToast({ title: '打开' })}
            onClose={() => Taro.showToast({ title: '关闭' })}
          >
            <Cell title='事件' />
          </Swipe>
          <Divider>自定义内容</Divider>
          <Swipe
            rightAction={
              <>
                <Button shape='square' type='danger'>
                  加入购物车
                </Button>
              </>
            }
          >
            <Content />
          </Swipe>
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
                'x-component': 'Swipe',
                properties: {
                  children: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '左滑删除',
                    },
                  },
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    rightAction: {
                      type: 'void',
                      'x-component': 'Button',
                      'x-component-props': {
                        type: 'primary',
                        shape: 'square',
                        children: '删除',
                      },
                    },
                  },
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '禁用滑动',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Swipe',
                'x-component-props': {
                  disabled: true,
                },
                properties: {
                  children: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '禁用滑动',
                    },
                  },
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    rightAction: {
                      type: 'void',
                      'x-component': 'Button',
                      'x-component-props': {
                        type: 'danger',
                        shape: 'square',
                        children: '删除',
                      },
                    },
                  },
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '事件监听',
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Swipe',
                'x-component-props': {
                  onOpen: () => Taro.showToast({ title: '打开' }),
                  onClose: () => Taro.showToast({ title: '关闭' }),
                },
                properties: {
                  children: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '事件',
                    },
                  },
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    leftAction: {
                      type: 'void',
                      'x-component': 'Button',
                      'x-component-props': {
                        type: 'success',
                        shape: 'square',
                        children: '选择',
                      },
                    },
                    rightAction: {
                      type: 'void',
                      'x-component': 'div',
                      properties: {
                        rightAction1: {
                          type: 'void',
                          'x-component': 'Button',
                          'x-component-props': {
                            type: 'danger',
                            shape: 'square',
                            children: '删除',
                          },
                        },
                        rightAction2: {
                          type: 'void',
                          'x-component': 'Button',
                          'x-component-props': {
                            type: 'info',
                            shape: 'square',
                            children: '收藏',
                          },
                        },
                      },
                    },
                  },
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '自定义内容',
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Swipe',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      children: <Content />,
                    },
                  },
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    rightAction: {
                      type: 'void',
                      'x-component': 'Button',
                      'x-component-props': {
                        type: 'danger',
                        shape: 'square',
                        children: '加入购物车',
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

const Content = function () {
  return (
    <Cell>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <span>商品</span>
        <InputNumber style={{ float: 'right' }} />
      </div>
    </Cell>
  );
};
