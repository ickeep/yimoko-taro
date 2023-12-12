import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Tabbar, Tabs } from '@/library';
import { Icon } from '@/src/icons';

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
              <Tabbar onSwitch={(idx) => {
                console.log(idx);
              }}
              >
                <Tabbar.Item title='首页' icon={<Icon name='home' width={18} height={18} />} />
                <Tabbar.Item title='分类' icon={<Icon name='category' width={18} height={18} />} />
                <Tabbar.Item icon={<Icon name='find' width={18} height={18} />} />
                <Tabbar.Item title='购物车' icon={<Icon name='cart' width={18} height={18} />} />
                <Tabbar.Item title='我的' icon={<Icon name='my' width={18} height={18} />} />
              </Tabbar>
            </Cell>
          </Cell.Group>
          <Cell.Group title='默认值'>
            <Cell>
              <Tabbar defaultValue={2} onSwitch={(idx) => {
                console.log(idx);
              }}
              >
                <Tabbar.Item title='首页' icon={<Icon name='home' width={18} height={18} />} />
                <Tabbar.Item title='分类' icon={<Icon name='category' width={18} height={18} />} />
                <Tabbar.Item icon={<Icon name='find' width={18} height={18} />} />
                <Tabbar.Item title='购物车' icon={<Icon name='cart' width={18} height={18} />} />
                <Tabbar.Item title='我的' icon={<Icon name='my' width={18} height={18} />} />
              </Tabbar>
            </Cell>
          </Cell.Group>
          <Cell.Group title='徽标红点'>
            <Cell>
              <Tabbar onSwitch={(idx) => {
                console.log(idx);
              }}
              >
                <Tabbar>
                  <Tabbar.Item title='首页' icon={<Icon name='home' width={12} height={12} />} value={11} />
                  <Tabbar.Item title='分类' icon={<Icon name='category' width={12} height={12} />} dot />
                  <Tabbar.Item icon={<Icon name='find' width={12} height={12} />} />
                  <Tabbar.Item title='购物车' icon={<Icon name='cart' width={12} height={12} />} value={110} />
                  <Tabbar.Item title='我的' icon={<Icon name='my' width={12} height={12} />} />
                </Tabbar>
              </Tabbar>
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义颜色'>
            <Cell>
              <Tabbar inactiveColor='#7d7e80' activeColor='#1989fa' onSwitch={(idx) => {
                console.log(idx);
              }}
              >
                <Tabbar>
                  <Tabbar.Item title='首页' icon={<Icon name='home' width={12} height={12} />} value={11} />
                  <Tabbar.Item title='分类' icon={<Icon name='category' width={12} height={12} />} dot />
                  <Tabbar.Item icon={<Icon name='find' width={12} height={12} />} />
                  <Tabbar.Item title='购物车' icon={<Icon name='cart' width={12} height={12} />} value={110} />
                  <Tabbar.Item title='我的' icon={<Icon name='my' width={12} height={12} />} />
                </Tabbar>
              </Tabbar>
            </Cell>
          </Cell.Group>
          <Cell.Group title='固定底部'>
            <Cell>
              <Tabbar fixed onSwitch={(idx) => {
                console.log(idx);
              }}
              >
                <Tabbar.Item title='首页' icon={<Icon name='home' width={18} height={18} />} />
                <Tabbar.Item title='分类' icon={<Icon name='category' width={18} height={18} />} />
                <Tabbar.Item icon={<Icon name='find' width={18} height={18} />} />
                <Tabbar.Item title='购物车' icon={<Icon name='cart' width={18} height={18} />} />
                <Tabbar.Item title='我的' icon={<Icon name='my' width={18} height={18} />} />
              </Tabbar>
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
                  t1: {
                    type: 'void',
                    'x-component': 'Tabbar',
                    'x-component-props': {
                      onSwitch: (idx: number) => {
                        console.log(idx);
                      },
                      options: [
                        { title: '首页', icon: <Icon name='home' width={18} height={18} /> },
                        { title: '分类', icon: <Icon name='category' width={18} height={18} /> },
                        { icon: <Icon name='find' width={18} height={18} /> },
                        { title: '购物车', icon: <Icon name='cart' width={18} height={18} /> },
                        { title: '我的', icon: <Icon name='my' width={18} height={18} /> },
                      ],
                    },
                  },
                },
              },
              c2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '默认值',
                },
                'x-component': 'Cell',
                properties: {
                  t1: {
                    type: 'void',
                    'x-component': 'Tabbar',
                    'x-component-props': {
                      defaultValue: 2,
                      onSwitch: (idx: number) => {
                        console.log(idx);
                      },
                      options: [
                        { title: '首页', icon: <Icon name='home' width={18} height={18} /> },
                        { title: '分类', icon: <Icon name='category' width={18} height={18} /> },
                        { icon: <Icon name='find' width={18} height={18} /> },
                        { title: '购物车', icon: <Icon name='cart' width={18} height={18} /> },
                        { title: '我的', icon: <Icon name='my' width={18} height={18} /> },
                      ],
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '徽标红点',
                },
                'x-component': 'Cell',
                properties: {
                  t1: {
                    type: 'void',
                    'x-component': 'Tabbar',
                    'x-component-props': {
                      onSwitch: (idx: number) => {
                        console.log(idx);
                      },
                      options: [
                        { title: '首页', icon: <Icon name='home' width={12} height={12} />, value: 11 },
                        { title: '分类', icon: <Icon name='category' width={12} height={12} />, dot: true },
                        { icon: <Icon name='find' width={12} height={12} /> },
                        { title: '购物车', icon: <Icon name='cart' width={12} height={12} />, value: 110 },
                        { title: '我的', icon: <Icon name='my' width={12} height={12} /> },
                      ],
                    },
                  },
                },
              },
              c4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义颜色',
                },
                'x-component': 'Cell',
                properties: {
                  t1: {
                    type: 'void',
                    'x-component': 'Tabbar',
                    'x-component-props': {
                      inactiveColor: '#7d7e80',
                      activeColor: '#1989fa',
                      onSwitch: (idx: number) => {
                        console.log(idx);
                      },
                      options: [
                        { title: '首页', icon: <Icon name='home' width={12} height={12} />, value: 11 },
                        { title: '分类', icon: <Icon name='category' width={12} height={12} />, dot: true },
                        { icon: <Icon name='find' width={12} height={12} /> },
                        { title: '购物车', icon: <Icon name='cart' width={12} height={12} />, value: 110 },
                        { title: '我的', icon: <Icon name='my' width={12} height={12} /> },
                      ],
                    },
                  },
                },
              },
              c5: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '固定底部',
                },
                'x-component': 'Cell',
                properties: {
                  t1: {
                    type: 'void',
                    'x-component': 'Tabbar',
                    'x-component-props': {
                      fixed: true,
                      onSwitch: (idx: number) => {
                        console.log(idx);
                      },
                      options: [
                        { title: '首页', icon: <Icon name='home' width={18} height={18} /> },
                        { title: '分类', icon: <Icon name='category' width={18} height={18} /> },
                        { icon: <Icon name='find' width={18} height={18} /> },
                        { title: '购物车', icon: <Icon name='cart' width={18} height={18} /> },
                        { title: '我的', icon: <Icon name='my' width={18} height={18} /> },
                      ],
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
