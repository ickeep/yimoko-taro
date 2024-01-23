import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Radio, RadioGroup, Tabs } from '@/library';
import icons from '@/src/icons';

const { Checklist } = icons;

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
          <Cell.Group title='基础用法'>
            <Cell>
              <RadioGroup defaultValue='1'>
                <Radio value='1' checked={false}>
                  选项1
                </Radio>
                <Radio value='2'>选项2</Radio>
                <Radio value='3'>选项3</Radio>
              </RadioGroup>
            </Cell>
          </Cell.Group>
          <Cell.Group title='Group'>
            <Cell>
              单个禁用
              <RadioGroup defaultValue='2' options={options} />
            </Cell>
            <Cell>
              全部禁用
              <RadioGroup disabled options={options} />
            </Cell>
          </Cell.Group>
          <Cell.Group title='水平使用'>
            <Cell>
              <RadioGroup
                defaultValue='2'
                options={options}
                direction='horizontal'
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='触发事件'>
            <Cell>
              <RadioGroup
                options={options}
                defaultValue='1'
                onChange={value => console.log(value)}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义图标'>
            <Cell>
              <RadioGroup defaultValue='1'>
                <Radio
                  value='1'
                  icon={<Checklist />}
                  activeIcon={<Checklist style={{ color: 'red' }} />}
                >
                  选项1
                </Radio>
                <Radio
                  value='2'
                  icon={<Checklist />}
                  activeIcon={<Checklist style={{ color: 'red' }} />}
                >
                  选项2
                </Radio>
              </RadioGroup>
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
              c1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'RadioGroup',
                    'x-component-props': {
                      defaultValue: '1',
                    },
                    properties: {
                      r1: {
                        type: 'void',
                        'x-component': 'Radio',
                        'x-component-props': {
                          disabled: true,
                          id: '1',
                          children: '选项1',
                        },
                      },
                      r2: {
                        type: 'void',
                        'x-component': 'Radio',
                        'x-component-props': {
                          id: '2',
                          children: '选项2',
                        },
                      },
                      r3: {
                        type: 'void',
                        'x-component': 'Radio',
                        'x-component-props': {
                          id: '3',
                          children: '选项3',
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
                  title: 'Group',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'RadioGroup',
                    'x-component-props': {
                      defaultValue: '2',
                      options,
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'RadioGroup',
                    'x-component-props': {
                      disabled: true,
                      options,
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '水平使用',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'RadioGroup',
                    'x-component-props': {
                      defaultValue: '2',
                      options,
                      direction: 'horizontal',
                    },
                  },
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '触发事件',
                },
                properties: {
                  v1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'RadioGroup',
                    'x-component-props': {
                      defaultValue: '1',
                      options,
                      onChange: value => console.log(value),
                    },
                  },
                },
              },
              c5: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义图标',
                },
                properties: {
                  r1: {
                    'x-decorator': 'Cell',
                    'x-component': 'Radio',
                    'x-component-props': {
                      id: '1',
                      children: '选项1',
                    },
                    additionalProperties: {
                      type: 'void',
                      properties: {
                        icon: {
                          type: 'void',
                          'x-component': '{{icons.Checklist}}',
                        },
                        activeIcon: {
                          type: 'void',
                          'x-component': '{{icons.Checklist}}',
                          'x-component-props': {
                            style: {
                              color: 'red',
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
  {
    label: '选项一',
    value: '1',
    disabled: true,
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
];
