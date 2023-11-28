import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { useRef } from 'react';

import { Button, Cell, Sticky, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JS',
    },
  });
  const { tab } = store.values;
  const { setValues } = store;

  const handleChange = (val: boolean) => {
    console.log('吸顶状态发生了改变,当前fixed为', val);
  };
  const containerTopRef = useRef<HTMLDivElement>();

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
            <Cell style={{ height: '64px' }}>
              <Sticky threshold={0} onChange={handleChange}>
                <Button type='primary'>吸顶</Button>
              </Sticky>
            </Cell>
          </Cell.Group>
          <Cell.Group title='吸顶距离'>
            <Cell style={{ height: '64px' }}>
              <Sticky threshold={120} onChange={handleChange}>
                <Button type='primary'>距离顶部120px</Button>
              </Sticky>
            </Cell>
          </Cell.Group>
          <Cell.Group title='指定容器内吸底'>
            <Cell style={{ height: '800px' }}>
              <div
                ref={containerTopRef}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: 'gray',
                }}
              >
                <Sticky container={containerTopRef} threshold={160}>
                  <Button type='info'>指定容器内吸顶</Button>
                </Sticky>
              </div>
            </Cell>
          </Cell.Group>
          <Cell.Group title='吸底距离'>
            <Cell style={{ height: '64px' }}>
              <Sticky position='bottom' threshold={0} onChange={handleChange}>
                <Button type='primary'>距离底部0px</Button>
              </Sticky>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Sticky',
                    'x-component-props': {
                      threshold: 0,
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '吸顶',
                        },
                      },
                    },
                  },
                },
              },
              g2: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '吸顶距离',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Sticky',
                    'x-component-props': {
                      threshold: 120,
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '距离顶部120px',
                        },
                      },
                    },
                  },
                },
              },
              g3: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '指定容器内吸底',
                },
                'x-component': 'Cell',
                'x-component-props': {
                  style: {
                    height: '800px',
                  },
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      ref: containerTopRef,
                      style: {
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'gray',
                      },
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Sticky',
                        'x-component-props': {
                          container: containerTopRef,
                          threshold: 160,
                        },
                        properties: {
                          c1: {
                            type: 'void',
                            'x-component': 'Button',
                            'x-component-props': {
                              type: 'info',
                              children: '指定容器内吸顶',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              g4: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '吸底距离',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Sticky',
                    'x-component-props': {
                      position: 'bottom',
                      threshold: 0,
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props': {
                          type: 'primary',
                          children: '距离底部0px',
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
