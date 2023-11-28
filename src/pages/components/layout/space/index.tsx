import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Button, Cell, Space, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
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
              <Space>
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='换行'>
            <Cell>
              <Space wrap>
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
                <Button>按钮4</Button>
                <Button>按钮5</Button>
                <Button>按钮6</Button>
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='垂直'>
            <Cell>
              <Space direction='vertical'>
                <Button>按钮1</Button>
                <Button>按钮2</Button>
                <Button>按钮3</Button>
              </Space>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              c1: {
                type: 'object',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    properties: {
                      b1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮1',
                        },
                      },
                      b2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮2',
                        },
                      },
                      b3: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮3',
                        },
                      },
                    },
                  },
                },
              },
              c2: {
                type: 'object',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '换行',
                },
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      wrap: true,
                    },
                    properties: {
                      b1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮1',
                        },
                      },
                      b2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮2',
                        },
                      },
                      b3: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮3',
                        },
                      },
                      b4: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮4',
                        },
                      },
                      b5: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮5',
                        },
                      },
                      b6: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮6',
                        },
                      },
                    },
                  },
                },
              },
              c3: {
                type: 'object',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '垂直',
                },
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      direction: 'vertical',
                    },
                    properties: {
                      b1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮1',
                        },
                      },
                      b2: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮2',
                        },
                      },
                      b3: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          children: '按钮3',
                        },
                      },
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
