import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Rate, Tabs } from '@/library';
import icons from '@/src/icons';

const { HeartFill } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      v1: 3,
    },
  });
  const { tab, v1 } = store.values;
  const { setValues } = store;
  const onChange = (val: any) => {
    console.log('评分变化：', val);
  };

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
              非受控
              <Rate defaultValue={3} />
            </Cell>
            <Cell>
              受控
              <Rate value={v1} onChange={value => setValues({ v1: value })} />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义规则'>
            <Cell>
              支持半选
              <Rate allowHalf defaultValue={3.5} />
            </Cell>
            <Cell>
              最大值
              <Rate count={6} defaultValue={3} />
            </Cell>
            <Cell>
              最小值
              <Rate min={2} defaultValue={3} />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义样式'>
            <Cell>
              自定义 icon
              <Rate
                checkedIcon={<HeartFill />}
                defaultValue={3}
              />
            </Cell>
            <Cell>
              自定义颜色
              <Rate
                defaultValue={3}
                checkedIcon={<HeartFill color='rgb(255, 200, 0)' />}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='特殊状态'>
            <Cell>
              禁用
              <Rate disabled defaultValue={3} />
            </Cell>
            <Cell>
              只读
              <Rate defaultValue={3} readOnly />
            </Cell>
            <Cell>
              触发事件
              <Rate defaultValue={3} onChange={onChange} />
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
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      defaultValue: 3,
                    },
                  },
                  v1: {
                    type: 'number',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      defaultValue: 3,
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义规则',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      allowHalf: true,
                      defaultValue: 3.5,
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      count: 6,
                      defaultValue: 3,
                    },
                  },
                  c3: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      min: 2,
                      defaultValue: 3,
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义样式',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      checkedIcon: '{{icons.HeartFill}}',
                      defaultValue: 3,
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      defaultValue: 3,
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        checkedIcon: {
                          type: 'void',
                          'x-component': '{{icons.Heart}}',
                          'x-component-props': {
                            color: 'rgb(0, 200, 0)',
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
                  title: '特殊状态',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      disabled: true,
                      defaultValue: 3,
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      readOnly: true,
                      defaultValue: 3,
                    },
                  },
                  c3: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Rate',
                    'x-component-props': {
                      onChange,
                      defaultValue: 3,
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
