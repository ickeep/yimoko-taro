import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Loading, PageLoading, Tabs } from '@/library';

import icons from '@/src/icons';

const { Star } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: false,
    },
  });
  const { tab, v1 } = store.values;
  const { setValues } = store;

  const showOverlay = () => {
    setValues({ v1: true });
    setTimeout(() => {
      setValues({ v1: false });
    }, 2000);
  };

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
              <Loading type='circular' />
              <Loading type='spinner' />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义文字'>
            <Cell>
              <Loading>加载中</Loading>
              <Loading direction='vertical'>加载中</Loading>
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义图标'>
            <Cell>
              <Loading direction='vertical' icon={<Star size={30} color='red' />} />
            </Cell>
          </Cell.Group>
          <Cell.Group title='全局'>
            <Cell>
              <Button type='success' onClick={() => showOverlay()}>遮罩层loading(两秒后关闭)</Button>
              <PageLoading loading={v1} loadText='加载中' icon={<Star size={30} color='red' />} />
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          scope={{ icons, showOverlay }}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'Loading',
                    'x-component-props': {
                      type: 'circular',
                    },
                  },
                  v2: {
                    type: 'void',
                    'x-component': 'Loading',
                    'x-component-props': {
                      type: 'spinner',
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义文字',
                },
                'x-component': 'Cell',
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'Loading',
                    'x-component-props': {
                      type: 'circular',
                      children: '加载中',
                    },
                  },
                  v2: {
                    type: 'void',
                    'x-component': 'Loading',
                    'x-component-props': {
                      type: 'spinner',
                      direction: 'vertical',
                      children: '加载中',
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义图标',
                },
                'x-component': 'Cell',
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'Loading',
                    'x-component-props': {
                      type: 'circular',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        icon: {
                          type: 'void',
                          'x-component': '{{icons.Star}}',
                          'x-component-props': {
                            size: 30,
                            color: 'red',
                          },
                        },
                      },
                    },
                  },
                },
              },
              g4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '全局',
                },
                'x-component': 'Cell',
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'success',
                      onClick: '{{showOverlay}}',
                      children: '遮罩层loading(两秒后关闭)',
                    },
                  },
                  b2: {
                    type: 'void',
                    'x-component': 'PageLoading',
                    'x-component-props': {
                      loadText: '加载中',
                      loading: '{{curStore.values.v1}}',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        icon: {
                          type: 'void',
                          'x-component': '{{icons.Star}}',
                          'x-component-props': {
                            size: 30,
                            color: 'red',
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
