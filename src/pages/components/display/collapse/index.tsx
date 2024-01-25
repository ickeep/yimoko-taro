import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Collapse, Divider, Tabs } from '@/library';

import icons from '@/src/icons';

const { ArrowDown, Checked } = icons;

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
          <Divider>基础用法</Divider>
          <Collapse defaultActiveName={['1', '2']} expandIcon={<ArrowDown />}>
            <Collapse.Item title='标题1' name='1'>
              京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
            </Collapse.Item>
            <Collapse.Item title='标题2' name='2'>
              京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
            </Collapse.Item>
            <Collapse.Item title='标题3' name='3' disabled>
              京东“厂直优品计划”首推“政府优品馆”
            </Collapse.Item>
          </Collapse>
          <Divider>手风琴模式</Divider>
          <Collapse defaultActiveName={['1', '2']} accordion expandIcon={<ArrowDown />}>
            <Collapse.Item title='标题1' name='1'>
              京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
            </Collapse.Item>
            <Collapse.Item title='标题2' name='2'>
              京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
            </Collapse.Item>
            <Collapse.Item title='标题3' name='3'>
              京东“厂直优品计划”首推“政府优品馆”
            </Collapse.Item>
          </Collapse>
          <Divider>自定义</Divider>
          <Collapse defaultActiveName={['1', '2']} expandIcon={<ArrowDown />}>
            <Collapse.Item
              title={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Checked />
                </div>
              }
              name='1'
            >
              京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
            </Collapse.Item>
            <Collapse.Item
              title='标题2'
              name='2'
              extra={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Checked color='red' />
                </div>
              }
            >
              京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
            </Collapse.Item>
            <Collapse.Item title='标题3' name='3' expandIcon={<Checked />}>
              京东“厂直优品计划”首推“政府优品馆”
            </Collapse.Item>
          </Collapse>
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
                  children: '基础用法',
                },
              },
              c1: {
                type: 'void',
                'x-component': 'Collapse',
                'x-component-props': {
                  defaultActiveName: ['1', '2'],
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    expandIcon: {
                      type: 'void',
                      'x-component': '{{icons.ArrowDown}}',
                    },
                  },
                },
                properties: {
                  c1i1: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题1',
                      name: '1',
                      children: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
                    },
                  },
                  c1i2: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题2',
                      name: '2',
                      children: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
                    },
                  },
                  c1i3: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题3',
                      name: '3',
                      children: '京东“厂直优品计划”首推“政府优品馆”',
                      disabled: true,
                    },
                  },
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '手风琴模式',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Collapse',
                'x-component-props': {
                  defaultActiveName: ['1', '2'],
                  accordion: true,
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    expandIcon: {
                      type: 'void',
                      'x-component': '{{icons.ArrowDown}}',
                    },
                  },
                },
                properties: {
                  c2i1: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题1',
                      name: '1',
                      children: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
                    },
                  },
                  c2i2: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题2',
                      name: '2',
                      children: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
                    },
                  },
                  c2i3: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题3',
                      name: '3',
                      children: '京东“厂直优品计划”首推“政府优品馆”',
                    },
                  },
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '自定义',
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Collapse',
                'x-component-props': {
                  defaultActiveName: ['1', '2'],
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    expandIcon: {
                      type: 'void',
                      'x-component': '{{icons.ArrowDown}}',
                    },
                  },
                },
                properties: {
                  c3i1: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      name: '1',
                      children: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        title: {
                          type: 'void',
                          'x-component': '{{icons.Checked}}',
                        },
                      },
                    },
                  },
                  c3i2: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题2',
                      name: '2',
                      children: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        extra: {
                          type: 'void',
                          'x-component': '{{icons.Checked}}',
                          'x-component-props': {
                            color: 'red',
                          },
                        },
                      },
                    },
                  },
                  c3i3: {
                    type: 'void',
                    'x-component': 'Collapse.Item',
                    'x-component-props': {
                      title: '标题3',
                      name: '3',
                      children: '京东“厂直优品计划”首推“政府优品馆”',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        expandIcon: {
                          type: 'void',
                          'x-component': '{{icons.Checked}}',
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
