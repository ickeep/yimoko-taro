import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Divider, Tabbar, Tabs, Tour } from '@/library';

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
          <Tour
            list={steps1}
            trigger={{
              component: Cell,
              id: 'target1',
            }}
            type='tile'
            location='bottom-end'
          >点击触发</Tour>
          <Divider>偏移量</Divider>
          <Tour
            list={steps2}
            trigger={{
              component: Cell,
              id: 'target2',
            }}
            type='tile'
            location='bottom-end'
          >点击触发</Tour>
          <Divider>步骤引导</Divider>
          <Tour
            list={steps3}
            trigger={{
              component: Cell,
            }}
            type='step'
          >点击触发</Tour>
          <Tabbar fixed>
            <Tabbar.Item id='target4' title='首页' />
            <Tabbar.Item id='target5' title='分类' />
            <Tabbar.Item id='target6' title='购物车' />
            <Tabbar.Item id='target7' title='我的' />
          </Tabbar>
        </>
      ) : (
        <StorePage
          store={store}
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
              t1: {
                type: 'void',
                'x-component': 'Tour',
                'x-component-props': {
                  list: steps1,
                  trigger: {
                    component: 'Cell',
                    id: 'target1',
                  },
                  type: 'tile',
                  location: 'bottom-end',
                  children: '点击触发',
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '偏移量',
                },
              },
              t2: {
                type: 'void',
                'x-component': 'Tour',
                'x-component-props': {
                  list: steps2,
                  trigger: {
                    component: 'Cell',
                    id: 'target2',
                  },
                  type: 'tile',
                  location: 'bottom-end',
                  children: '点击触发',
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '步骤引导',
                },
              },
              t3: {
                type: 'void',
                'x-component': 'Tour',
                'x-component-props': {
                  list: steps3,
                  trigger: {
                    component: 'Cell',
                  },
                  type: 'step',
                  children: '点击触发',
                },
              },
              t4: {
                type: 'void',
                'x-component': 'Tabbar',
                'x-component-props': {
                  fixed: true,
                  options: [
                    { title: '首页', id: 'target4' },
                    { title: '分类', id: 'target5' },
                    { title: '购物车', id: 'target6' },
                    { title: '我的', id: 'target7' },
                  ],
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


const steps1 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target1',
  },
];
const steps2 = [
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target2',
    popoverOffset: [-40, 20],
    arrowOffset: -200,
  },
];
const steps3 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target4',
    location: 'top-start',
  },
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target5',
    location: 'top-start',
  },
  {
    content: '基于京东APP 10.0 视觉规范',
    target: 'target6',
    location: 'top-end',
  },
  {
    content: '支持定制主题，内置 700+ 个主题变量',
    target: 'target7',
    location: 'top-end',
  },
];
