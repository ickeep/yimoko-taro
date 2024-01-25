import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Avatar, Divider, Space, Tabs } from '@/library';
import icons from '@/src/icons';

const { My } = icons;

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
          <Divider>大小</Divider>
          <Space align='center' justify='around'>
            <Avatar
              size='large'
              src='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
            />
            <Avatar
              size='normal'
              src='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
            />
            <Avatar
              size='small'
              src='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
            />
          </Space>
          <Divider>形状</Divider>
          <Space align='center' justify='around'>
            <Avatar icon={<My />} shape='square' />
            <Avatar icon={<My />} shape='round' />
          </Space>
          <Divider>头像类型</Divider>
          <Space>
            <Avatar src='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png' />
            <Avatar icon={<My />} />
            <Avatar>N</Avatar>
          </Space>
          <Divider>头像组合</Divider>
          <Space>
            <Avatar.Group max='3' maxColor='#fff' maxBackground='#498ff2'>
              <Avatar src='https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png' />
              <Avatar icon={<My />} />
              <Avatar color='rgb(245, 106, 0)' background='rgb(253, 227, 207)'>U</Avatar>
              <Avatar icon={<My />} />
            </Avatar.Group>
          </Space>
          <Divider>排列方向</Divider>
          <Space>
            <Avatar.Group max='3' maxColor='#fff' maxBackground='#498ff2' level='right'>
              <Avatar src='https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png' />
              <Avatar icon={<My />} />
              <Avatar color='rgb(245, 106, 0)' background='rgb(253, 227, 207)'>U</Avatar>
              <Avatar icon={<My />} />
            </Avatar.Group>
          </Space>
        </>
      ) : (
        <StorePage
          store={store}
          scope={{ icons }}
          schema={{
            type: 'object',
            properties: {
              d1: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '点击触发',
                },
              },
              c1: {
                type: 'void',
                'x-component': 'Space',
                'x-component-props': {
                  align: 'center',
                  justify: 'around',
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      size: 'large',
                      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
                    },
                  },
                  b2: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      size: 'normal',
                      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
                    },
                  },
                  b3: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      size: 'small',
                      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png',
                    },
                  },
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '形状',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Space',
                'x-component-props': {
                  align: 'center',
                  justify: 'around',
                },
                properties: {
                  b1: {
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
                  b2: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      shape: 'round',
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
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '头像类型',
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Space',
                'x-component-props': {
                  align: 'center',
                  justify: 'around',
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
                    },
                  },
                  b2: {
                    type: 'void',
                    'x-component': 'Avatar',
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
                  b3: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      children: 'N',
                    },
                  },
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '头像组合',
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Avatar.Group',
                'x-component-props': {
                  max: 3,
                  maxColor: '#fff',
                  maxBackground: '#498ff2',
                },
                properties: {
                  a1: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
                    },
                  },
                  a2: {
                    type: 'void',
                    'x-component': 'Avatar',
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
                  a3: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      color: 'rgb(245, 106, 0)',
                      background: 'rgb(253, 227, 207)',
                      children: 'U',
                    },
                  },
                  a4: {
                    type: 'void',
                    'x-component': 'Avatar',
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
              d5: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '排列方向',
                },
              },
              c5: {
                type: 'void',
                'x-component': 'Avatar.Group',
                'x-component-props': {
                  max: 3,
                  maxColor: '#fff',
                  maxBackground: '#498ff2',
                  level: 'right',
                },
                properties: {
                  a1: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
                    },
                  },
                  a2: {
                    type: 'void',
                    'x-component': 'Avatar',
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
                  a3: {
                    type: 'void',
                    'x-component': 'Avatar',
                    'x-component-props': {
                      color: 'rgb(245, 106, 0)',
                      background: 'rgb(253, 227, 207)',
                      children: 'U',
                    },
                  },
                  a4: {
                    type: 'void',
                    'x-component': 'Avatar',
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
          }
          }
        />)
      }
    </div >
  );
}

export default observer(Index);
