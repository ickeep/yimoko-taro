import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, NoticeBar, Space, Tabs } from '@/library';
import icons from '@/src/icons';

const { Fabulous, Failure } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',

    },
  });
  const { tab } = store.values;
  const { setValues } = store;
  const text = '123456789abcdefghijklmn123456789abcdefghijklmn123456789abcdefghijklmn123456789abcdefghijklmn';
  const demo = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ];

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
              <Space direction='vertical' style={{ width: '100%' }}>
                <NoticeBar content={text} />
                <NoticeBar content={text} scrollable={false} />
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='可关闭模式'>
            <Cell>
              <NoticeBar content={text} closeable />
            </Cell>
          </Cell.Group>
          <Cell.Group title='纵向滚动'>
            <Cell>
              <NoticeBar
                direction='vertical'
                list={demo}
                speed={10}
                duration={1000}
                closeable
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义图标'>
            <Cell>
              <Space direction='vertical' style={{ width: '100%' }}>
                <NoticeBar
                  direction='vertical'
                  list={demo}
                  speed={10}
                  duration={1000}
                  leftIcon={<Fabulous size={16} color='#f0250f' />}
                />
                <NoticeBar
                  direction='vertical'
                  list={demo}
                  speed={10}
                  duration={1000}
                  rightIcon={<Failure size={16} color='#f0250f' />}
                />
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
                  g1: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      direction: 'vertical',
                      style: {
                        width: '100%',
                      },
                    },
                    properties: {
                      g1: {
                        type: 'void',
                        'x-component': 'NoticeBar',
                        'x-component-props': {
                          content: text,
                        },
                      },
                      g2: {
                        type: 'void',
                        'x-component': 'NoticeBar',
                        'x-component-props': {
                          content: text,
                          scrollable: false,
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
                  title: '可关闭模式',
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'NoticeBar',
                    'x-component-props': {
                      content: text,
                      closeable: true,
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '纵向滚动',
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'NoticeBar',
                    'x-component-props': {
                      direction: 'vertical',
                      list: demo,
                      speed: 10,
                      duration: 1000,
                      closeable: true,
                    },
                  },
                },
              },
              g4: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义图标',
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      direction: 'vertical',
                      style: {
                        width: '100%',
                      },
                    },
                    properties: {
                      g1: {
                        type: 'void',
                        'x-component': 'NoticeBar',
                        'x-component-props': {
                          direction: 'vertical',
                          list: demo,
                          speed: 10,
                          duration: 1000,
                        },
                        additionalProperties: {
                          type: 'void',
                          properties: {
                            leftIcon: {
                              type: 'void',
                              'x-component': '{{icons.Fabulous}}',
                              'x-component-props': {
                                size: 16,
                                color: '#f0250f',
                              },
                            },
                          },
                        },
                      },
                      g2: {
                        type: 'void',
                        'x-component': 'NoticeBar',
                        'x-component-props': {
                          direction: 'vertical',
                          list: demo,
                          speed: 10,
                          duration: 1000,
                        },
                        additionalProperties: {
                          type: 'void',
                          properties: {
                            rightIcon: {
                              type: 'void',
                              'x-component': '{{icons.Failure}}',
                              'x-component-props': {
                                size: 16,
                                color: '#f0250f',
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

