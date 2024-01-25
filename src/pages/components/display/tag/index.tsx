import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Tabs, Tag } from '@/library';
import icons from '@/src/icons';

const { Failure } = icons;

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
          <Cell.Group title='标签类型'>
            <Cell title='primary' extra={<Tag type='primary'>标签</Tag>} />
            <Cell title='success' extra={<Tag type='success'>标签</Tag>} />
            <Cell title='warning' extra={<Tag type='warning'>标签</Tag>} />
            <Cell title='danger' extra={<Tag type='danger'>标签</Tag>} />
            <Cell title='info' extra={<Tag type='info'>标签</Tag>} />
          </Cell.Group>
          <Cell.Group title='样式风格'>
            <Cell title='plain' extra={<Tag plain>标签</Tag>} />
            <Cell title='round' extra={<Tag round>标签</Tag>} />
            <Cell title='mark' extra={<Tag mark>标签</Tag>} />
          </Cell.Group>
          <Cell.Group title='可关闭'>
            <Cell title='round' extra={
              <Tag closeable
                onClose={() => console.log('Tag closed')}
                type='primary'
              >
                可关闭</Tag>
            }
            />
            <Cell title='mark' extra={
              <Tag closeable
                closeIcon={<Failure size={8} />}
                onClose={() => console.log('Tag closed')}
                type='primary'
              >
                可关闭</Tag>
            }
            />
          </Cell.Group>
          <Cell.Group title='颜色'>
            <Cell title='标签' extra={<Tag background='#FA685D'>标签</Tag>} />
            <Cell title='标签' extra={<Tag background='#E9E9E9' color='#999999'>标签</Tag>} />
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '标签类型',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'primary',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            type: 'primary',
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'success',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            type: 'success',
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c3: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'warning',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            type: 'warning',
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c4: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'danger',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            type: 'danger',
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c5: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'info',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            type: 'info',
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '样式风格',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'plain',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            plain: true,
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'round',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            round: true,
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c3: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'mark',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            mark: true,
                            children: '标签',
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
                  title: '可关闭',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'round',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            closeable: true,
                            onClose: () => console.log('Tag closed'),
                            children: '可关闭',
                          },
                        },
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: 'mark',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            closeable: true,
                            closeIcon: <Failure size={8} />,
                            onClose: () => console.log('Tag closed'),
                            children: '可关闭',
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
                  title: '颜色',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '标签',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            background: '#FA685D',
                            children: '标签',
                          },
                        },
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '标签',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': 'Tag',
                          'x-component-props': {
                            background: '#E9E9E9',
                            color: '#999999',
                            children: '标签',
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
