import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, CircleProgress, Divider, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      percent: 50,
    },
  });
  const { tab, percent } = store.values;
  const { setValues } = store;

  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setValues({ percent: 0 });
      return;
    }
    setValues({ percent: store.values.percent - 10 });
  };

  const setAddVal = () => {
    if (percent >= 100) {
      return;
    }
    setValues({ percent: store.values.percent + 10 });
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
          <Divider>基础用法</Divider>
          <CircleProgress percent={20} />
          <CircleProgress percent={60}>60%</CircleProgress>
          <Divider>自定义</Divider>
          <CircleProgress percent={50} strokeWidth={10} >粗细</CircleProgress>
          <CircleProgress percent={50} radius={60}>半径</CircleProgress>
          {/* nutui 的 bug, 小程序颜色不会变 */}
          <CircleProgress percent={50} color='#fa2c19'>
            颜色
          </CircleProgress>
          <CircleProgress percent={100} color={gradientColor}>
            渐变色
          </CircleProgress>

          {/* 低代码模式存在 bug */}
          <Divider>动态</Divider>
          <CircleProgress percent={percent}>{percent}</CircleProgress>
          <Button type='primary' size='small' onClick={setReduceVal}>
            减少
          </Button>
          <Button type='primary' size='small' onClick={setAddVal}>
            增加
          </Button>
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
              c1: {
                type: 'void',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  percent: 20,
                },
              },
              c2: {
                type: 'void',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  percent: 60,
                  children: '60%',
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '自定义',
                },
              },
              c3: {
                type: 'void',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  percent: 50,
                  strokeWidth: 10,
                  children: '粗细',
                },
              },
              c4: {
                type: 'void',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  percent: 50,
                  radius: 60,
                  children: '半径',
                },
              },
              c5: {
                type: 'void',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  percent: 50,
                  color: '#fa2c19',
                  children: '颜色',
                },
              },
              c6: {
                type: 'void',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  percent: 100,
                  color: gradientColor,
                  children: '渐变色',
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '动态',
                },
              },
              percent: {
                type: 'number',
                'x-component': 'CircleProgress',
                'x-component-props': {
                  children: '{{curStore.values.percent}}',
                },
              },
              b1: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'primary',
                  size: 'small',
                  children: '减少',
                  onClick: () => setReduceVal(),
                },
              },
              b2: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'primary',
                  size: 'small',
                  children: '增加',
                  onClick: () => setAddVal(),
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

const gradientColor = {
  '0%': '#ff404f',
  '100%': '#fa2c19',
};
