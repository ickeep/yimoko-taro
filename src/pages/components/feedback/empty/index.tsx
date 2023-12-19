import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Empty, Tabs } from '@/library';

import icons from '@/src/icons';

const { Refresh } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: '0',
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
              <Empty
                title='标题'
                description='无数据'
                actions={[
                  { text: '操作按钮' },
                  { text: '操作按钮' },
                ]}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='图片类型'>
            <Cell>
              <Tabs style={{ width: '100%' }}>
                {options.map(item => (
                  <Tabs.TabPane key={item.value} title={item.title}>
                    {item.children}
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义图片'>
            <Cell>
              <Empty
                description='无优惠券'
                image={<img src='https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png' alt='' />}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='底部内容'>
            <Cell>
              <Empty status='error' description='加载失败'>
                <div style={{ marginTop: '10px' }}>
                  <Button icon={<Refresh />} type='primary' size='small'>重试</Button>
                </div>
              </Empty>
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
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  e1: {
                    type: 'void',
                    'x-component': 'Empty',
                    'x-component-props': {
                      title: '标题',
                      description: '无数据',
                      actions: [
                        { text: '操作按钮' },
                        { text: '操作按钮' },
                      ],
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '图片类型',
                },
                'x-component': 'Cell',
                properties: {
                  v1: {
                    type: 'string',
                    'x-component': 'Tabs',
                    'x-component-props': {
                      style: { width: '100%' },
                      onchange: (value: any) => {
                        setValues({ v1: value });
                      },
                    },
                    enum: options,
                    items: [
                      {
                        type: 'void',
                        'x-component': 'Tabs.TabPane',
                        'x-component-props': {
                          title: '{{$record.title}}',
                          children: '{{$record.children}}',
                        },
                      },
                    ],
                  },
                },
              },
              g3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义图片',
                },
                'x-component': 'Cell',
                properties: {
                  e2: {
                    type: 'void',
                    'x-component': 'Empty',
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        description: {
                          type: 'void',
                          'x-component': 'text',
                          'x-component-props': {
                            children: '无优惠券',
                          },
                        },
                        image: {
                          type: 'void',
                          'x-component': 'img',
                          'x-component-props': {
                            src: 'https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png',
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
                  title: '底部内容',
                },
                'x-component': 'Cell',
                properties: {
                  e3: {
                    type: 'void',
                    'x-component': 'Empty',
                    'x-component-props': {
                      status: 'error',
                      description: '加载失败',
                    },
                    properties: {
                      d1: {
                        type: 'void',
                        'x-component': 'div',
                        'x-component-props': {
                          style: { marginTop: '10px' },
                        },
                        properties: {
                          b1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'primary',
                              size: 'small',
                              children: '重试',
                            },
                            additionalProperties: {
                              type: 'void',
                              properties: {
                                icon: {
                                  type: 'void',
                                  'x-component': '{{icons.Refresh}}',
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

const options = [
  { title: '无内容', value: '0', children: <Empty description='无内容' size='small' /> },
  { title: '加载失败/错误', value: '1', children: <Empty status='error' description='加载失败/错误' size='small' /> },
  { title: '无网络', value: '2', children: <Empty status='network' description='无网络' size='small' /> },
];
