import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Radio, RadioGroup, Tabs } from '@/library';
import { Icon, icons } from '@/src/icons';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: 1,
    },
  });
  const { tab, v1 } = store.values;
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
              <Radio defaultChecked>选项</Radio>
            </Cell>
            <Cell>
              禁用
              <Radio defaultChecked disabled>选项</Radio>
            </Cell>
            <Cell>
              自定义选中
              <Radio
                defaultChecked
                disabled
                icon={icons.Checklist}
                activeIcon={<Icon name='checklist' style={{ color: 'red' }} />}
              >选项
              </Radio>
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
                labelTrigger={{ component: Button }}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='触发事件'>
            <Cell>
              <RadioGroup
                options={options}
                defaultValue={v1}
                onChange={value => console.log(value)}
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
              c1: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  r1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Radio',
                    'x-component-props': {
                      defaultChecked: true,
                      children: '选项',
                    },
                  },
                  r2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Radio',
                    'x-component-props': {
                      defaultChecked: true,
                      disabled: true,
                      children: '选项',
                    },
                  },
                  r3: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Radio',
                    'x-component-props': {
                      defaultChecked: true,
                      disabled: true,
                      icon: '{{icons.Checklist}}',
                      activeIcon: <Icon name='checklist' style={{ color: 'red' }} />,
                      children: '选项',
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
                      labelTrigger: {
                        component: 'Button',
                      },
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
                      options,
                      onChange: value => console.log(value),
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
