import Taro from '@tarojs/taro';

import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, NavBar, Tabs } from '@/library';
import { Icon, icons } from '@/src/icons';

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
              <NavBar
                back={
                  <>
                    <Icon name='left' color='#979797' />
                    返回
                  </>
                }
                left={<Icon name='close' size={12} />}
                right={
                  <span onClick={e => Taro.showToast({ title: 'icon' })}>
                    {icons.Share}
                  </span>
                }
                onBackClick={_e => Taro.showToast({ title: '返回' })}
              >
                <span onClick={_e => Taro.showToast({ title: '标题' })}>
                  订单详情
                </span>
              </NavBar>
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
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  n1: {
                    type: 'void',
                    'x-component': 'NavBar',
                    'x-component-props': {
                      title: '订单详情',
                      back: <span>返回</span>,
                      left: <span>关闭</span>,
                      right: <span onClick={_e => Taro.showToast({ title: 'icon' })}>分享</span>,
                      onBackClick: _e => Taro.showToast({ title: '返回' }),
                    },
                    properties: {
                      s1: {
                        type: 'void',
                        'x-component': 'span',
                        'x-component-props': {
                          onClick: _e => Taro.showToast({ title: '标题' }),
                          children: '订单详情',
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
