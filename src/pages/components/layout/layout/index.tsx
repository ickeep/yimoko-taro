import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import React from 'react';

import { Cell, Col, Row, Tabs } from '@/library';

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
            <Row>
              {getCol(24, divStyle)}
            </Row>
            <Row>
              {getCol(12, divStyle)}
              {getCol(12, divStyleLight)}
            </Row>
            <Row>
              {getCol(8, divStyle)}
              {getCol(8, divStyleLight)}
              {getCol(8, divStyle)}
            </Row>
            <Row>
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
            </Row>
          </Cell.Group>
          <Cell.Group title='分栏间隔'>
            <Row gutter={10}>
              {getCol(8, divStyle)}
              {getCol(8, divStyleLight)}
              {getCol(8, divStyle)}
            </Row>
          </Cell.Group>
          <Cell.Group title='Flex布局'>
            <Row type='flex' wrap='nowrap'>
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
              {getCol(6, divStyle)}
            </Row>
            <Row type='flex' justify='center'>
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
              {getCol(6, divStyle)}
            </Row>
            <Row type='flex' justify='end'>
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
              {getCol(6, divStyle)}
            </Row>
            <Row type='flex' justify='space-between'>
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
              {getCol(6, divStyle)}
            </Row>
            <Row type='flex' justify='space-around'>
              {getCol(6, divStyle)}
              {getCol(6, divStyleLight)}
              {getCol(6, divStyle)}
            </Row>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              c1: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-component': 'Row',
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 24,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyle,
                              children: 'span:24',
                            },
                          },
                        },
                      },
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-component': 'Row',
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 12,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyle,
                              children: 'span:12',
                            },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 12,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyleLight,
                              children: 'span:12',
                            },
                          },
                        },
                      },
                    },
                  },
                  r3: {
                    type: 'void',
                    'x-component': 'Row',
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 8,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyle,
                              children: 'span:8',
                            },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 8,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyleLight,
                              children: 'span:8',
                            },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 8,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyle,
                              children: 'span:8',
                            },
                          },
                        },
                      },
                    },
                  },
                  r4: {
                    type: 'void',
                    'x-component': 'Row',
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyle,
                              children: 'span:6',
                            },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyleLight,
                              children: 'span:6',
                            },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyle,
                              children: 'span:6',
                            },
                          },
                        },
                      },
                      c4: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              style: divStyleLight,
                              children: 'span:6',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '分栏间隔',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      gutter: 10,
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 8,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              children: 'span:8',
                              style: divStyle,
                            },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 8,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              children: 'span:8',
                              style: divStyleLight,
                            },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 8,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              children: 'span:8',
                              style: divStyle,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: 'Flex布局',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      wrap: 'nowrap',
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              children: 'span:6',
                              style: divStyle,
                            },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              children: 'span:6',
                              style: divStyleLight,
                            },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': {
                              children: 'span:6',
                              style: divStyle,
                            },
                          },
                        },
                      },
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      justify: 'center',
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyleLight },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                    },
                  },
                  r3: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      justify: 'end',
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyleLight },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                    },
                  },
                  r4: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      justify: 'space-between',
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyleLight },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                    },
                  },
                  r5: {
                    type: 'void',
                    'x-component': 'Row',
                    'x-component-props': {
                      type: 'flex',
                      justify: 'space-around',
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
                        },
                      },
                      c2: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyleLight },
                          },
                        },
                      },
                      c3: {
                        type: 'void',
                        'x-component': 'Col',
                        'x-component-props': {
                          span: 6,
                        },
                        properties: {
                          c: {
                            type: 'void',
                            'x-component': 'div',
                            'x-component-props': { children: 'span:6', style: divStyle },
                          },
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

const getCol = (span: number, style: any) => (
  <Col span={span}>
    <div style={style}>span:{span}</div>
  </Col>
);

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  width: '100%',
  border: '1px solid #ccc',
};
const divStyleLight = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  width: '100%',
  border: '1px solid #ccc',
  backgroundColor: '#f5f5f5',
};
