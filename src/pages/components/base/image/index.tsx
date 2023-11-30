
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import React from 'react';

import { Cell, Tabs, Image, Loading, Col, Space } from '@/library';

function Index() {
  const store = useStore({ defaultValues: { tab: 'JSX' } });
  const { tab } = store.values;
  const src = 'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png';
  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => store.setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Cell.Group title='基础用法'>
            <Cell>
              <Image src={src} width='100%' />
            </Cell>
          </Cell.Group>
          <Cell.Group title='圆形图片'>
            <Cell>
              <Space align='center'>
                <Image
                  src={src}
                  mode='scaleToFill'
                  width='100'
                  height='80'
                  radius='50%'
                />
                <Image
                  src={src}
                  mode='scaleToFill'
                  width='80'
                  height='80'
                  radius='50%'
                />
                <Image
                  src={src}
                  mode='scaleToFill'
                  width='80'
                  height='80'
                  radius='10px'
                />
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='加载中图片'>
            <Cell>
              <Space align='center'>
                <Image
                  width='100'
                  height='100'
                />
                <Image
                  width='100'
                  height='100'
                  loading={<Loading />}
                />
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='加载失败'>
            <Cell>
              <Space align='center'>
                <Image src='x' width='100' height='100' />
                <Image
                  src='x'
                  width='100'
                  height='100'
                  error={<Loading />}
                />
              </Space>
            </Cell>
          </Cell.Group>
          <Cell.Group title='填充模式'>
            <Cell style={{ flexWrap: 'wrap' }}>
              {[
                'scaleToFill',
                'aspectFit',
                'aspectFill',
                'widthFix',
                'heightFix',
              ].map(mode => (
                <Col span='8' key={mode}>
                  <Image src={src} mode={mode as any} width='80' height='80' />
                </Col>
              ))}
            </Cell>
          </Cell.Group>
          <Cell.Group title='图片位置'>
            <Cell style={{ flexWrap: 'wrap' }}>
              {[
                'top',
                'bottom',
                'center',
                'left',
                'right',
                'top left',
                'top right',
                'bottom left',
                'bottom right',
              ].map(mode => (
                <Col span='8' key={mode}>
                  <Image src={src} mode={mode as any} width='80' height='80' />
                </Col>
              ))}
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              cell1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      width: '100%',
                    },
                  },
                },
              },
              cell2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '圆形图片',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      align: 'center',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          src,
                          mode: 'scaleToFill',
                          width: '100',
                          height: '80',
                          radius: '50%',
                        },
                      },
                      s2: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          src,
                          mode: 'scaleToFill',
                          width: '80',
                          height: '80',
                          radius: '50%',
                        },
                      },
                      s3: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          src,
                          mode: 'scaleToFill',
                          width: '80',
                          height: '80',
                          radius: '10px',
                        },
                      },
                    },
                  },
                },
              },
              cell3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '加载中图片',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      align: 'center',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          width: '100',
                          height: '100',
                        },
                      },
                      s2: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          width: '100',
                          height: '100',
                          loading: <Loading />,
                        },
                      },
                    },
                  },
                },
              },
              cell4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '加载失败',
                },
                'x-component': 'Cell',
                properties: {
                  s: {
                    type: 'void',
                    'x-component': 'Space',
                    'x-component-props': {
                      align: 'center',
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          src: 'x',
                          width: '100',
                          height: '100',
                        },
                      },
                      s2: {
                        type: 'void',
                        'x-component': 'Image',
                        'x-component-props': {
                          src: 'x',
                          width: '100',
                          height: '100',
                          error: <Loading />,
                        },
                      },
                    },
                  },
                },
              },
              cell5: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '填充模式',
                },
                'x-component': 'Cell',
                'x-component-props': {
                  style: { flexWrap: 'wrap' },
                },
                properties: {
                  s1: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'scaleToFill',
                      width: '80',
                      height: '80',
                    },
                  },
                  s2: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'aspectFit',
                      width: '80',
                      height: '80',
                    },
                  },
                  s3: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'aspectFill',
                      width: '80',
                      height: '80',
                    },
                  },
                  s4: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'widthFix',
                      width: '80',
                      height: '80',
                    },
                  },
                  s5: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'heightFix',
                      width: '80',
                      height: '80',
                    },
                  },
                },
              },
              cell6: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '图片位置',
                },
                'x-component': 'Cell',
                'x-component-props': {
                  style: { flexWrap: 'wrap' },
                },
                properties: {
                  s1: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'top',
                      width: '80',
                      height: '80',
                    },
                  },
                  s2: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'bottom',
                      width: '80',
                      height: '80',
                    },
                  },
                  s3: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'center',
                      width: '80',
                      height: '80',
                    },
                  },
                  s4: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'left',
                      width: '80',
                      height: '80',
                    },
                  },
                  s5: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'right',
                      width: '80',
                      height: '80',
                    },
                  },
                  s6: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'top left',
                      width: '80',
                      height: '80',
                    },
                  },
                  s7: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'top right',
                      width: '80',
                      height: '80',
                    },
                  },
                  s8: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'bottom left',
                      width: '80',
                      height: '80',
                    },
                  },
                  s9: {
                    type: 'void',
                    'x-decorator': 'Col',
                    'x-decorator-props': {
                      span: 8,
                    },
                    'x-component': 'Image',
                    'x-component-props': {
                      src,
                      mode: 'bottom right',
                      width: '80',
                      height: '80',
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
