import Taro from '@tarojs/taro';

import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Switch, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      checkedAsync: false,
    },
  });
  const { tab, checkedAsync } = store.values;
  const { setValues } = store;
  const onChangeAsync = (value) => {
    Taro.showToast({ title: `2秒后异步触发 ${value}` });
    setTimeout(() => {
      setValues({ checkedAsync: value });
    }, 2000);
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
              <Switch defaultChecked />
            </Cell>
            <Cell>
              受控
              <Switch
                checked={checkedAsync}
                onChange={value => onChangeAsync(value)}
              />
            </Cell>
            <Cell>
              禁用
              <Switch defaultChecked disabled />
            </Cell>
            <Cell>
              文字
              <Switch defaultChecked activeText='开' inactiveText='关' />
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              group: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Switch',
                    'x-component-props': {
                      defaultChecked: true,
                    },
                  },
                  checkedAsync: {
                    type: 'boolean',
                    'x-decorator': 'Cell',
                    'x-component': 'Switch',
                    'x-component-props': {
                      onChange: value => onChangeAsync(value),
                    },
                  },
                  c3: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Switch',
                    'x-component-props': {
                      disabled: true,
                    },
                  },
                  c4: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Switch',
                    'x-component-props': {
                      activeText: '开',
                      inactiveText: '关',
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

