import Taro from '@tarojs/taro';

import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Range, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      v1: 40,
      v2: [20, 80],
      v3: 30,
    },
  });
  const { tab, v1, v2, v3 } = store.values;
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
              <Range defaultValue={50} disabled />
            </Cell>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range defaultValue={40} onEnd={val => console.log(`${val}`)} />
            </Cell>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range value={v1} onChange={(val) => {
                setValues({ v1: val as number });
              }}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义描述'>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                defaultValue={40}
                minDescription='0%'
                maxDescription='100%'
                currentDescription={value => `${value}%`}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                defaultValue={20}
                currentDescription={null}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='双滑块'>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                defaultValue={[20, 80]}
                range
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range range value={v2} onChange={(val) => {
                setValues({ v2: val as number[] });
              }}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='范围与步长'>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                defaultValue={0}
                max={10}
                min={-10}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                defaultValue={30}
                maxDescription={null}
                minDescription={null}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                defaultValue={30}
                step={5}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义按钮'>
            <Cell style={{
              marginTop: '20px',
            }}
            >
              <Range
                value={v3}
                button={<div style={buttonStyle}>{v3}</div>}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='标识'>
            <Cell style={{
              marginTop: '20px',
              marginBottom: '20px',
            }}
            >
              <Range
                defaultValue={60}
                marks={{ 20: '20', 40: '40', 60: '60', 80: '80' }}
                onEnd={val => console.log(`${val}`)}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='垂直'>
            <Cell
              style={{
                height: '200px',
              }}
            >
              <Range
                defaultValue={20}
                vertical
                onEnd={val => console.log(`${val}`)}
              />
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
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 50,
                      disabled: true,
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 40,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                  v1: {
                    type: 'number',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义描述',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 40,
                      minDescription: '0%',
                      maxDescription: '100%',
                      currentDescription: value => `${value}%`,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 20,
                      currentDescription: null,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '双滑块',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: [20, 80],
                      range: true,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                  v2: {
                    type: 'array',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      range: true,
                    },
                  },
                },
              },
              g4: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '范围与步长',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 0,
                      max: 10,
                      min: -10,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 30,
                      maxDescription: null,
                      minDescription: null,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                  r3: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 30,
                      step: 5,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                },
              },
              g5: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义按钮',
                },
                properties: {
                  v3: {
                    type: 'number',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      button: <div style={buttonStyle}>{v3}</div>,
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                },
              },
              g6: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '标识',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        marginTop: '20px',
                        marginBottom: '20px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 60,
                      marks: { 20: '20', 40: '40', 60: '60', 80: '80' },
                      onEnd: val => console.log(`${val}`),
                    },
                  },
                },
              },
              g7: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '垂直',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-decorator-props': {
                      style: {
                        height: '200px',
                      },
                    },
                    'x-component': 'Range',
                    'x-component-props': {
                      defaultValue: 20,
                      vertical: true,
                      onEnd: val => console.log(`${val}`),
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

const buttonStyle: React.CSSProperties = {
  width: '26px',
  color: 'white',
  fontSize: '10px',
  lineHeight: '18px',
  textAlign: 'center',
  backgroundColor: 'red',
  borderRadius: '10px',
};
