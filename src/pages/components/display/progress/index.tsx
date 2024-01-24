import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Divider, Progress, Tabs } from '@/library';

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
          <Divider>基础用法</Divider>
          <Progress percent={30} />
          <Divider>显示百分比</Divider>
          <Progress percent={50} showText />
          <Divider>自定义</Divider>
          <Progress
            percent={30}
            background='rgba(0,44,25,0.2)'
            color='rgba(0,44,25,0.9)'
            strokeWidth='15'
          />
          <Divider>状态</Divider>
          <Cell>
            <Progress
              percent={30}
              color='linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)'
              animated
            />
          </Cell>
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
                'x-component': 'Progress',
                'x-component-props': {
                  percent: 30,
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '显示百分比',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Progress',
                'x-component-props': {
                  percent: 50,
                  showText: true,
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
                'x-component': 'Progress',
                'x-component-props': {
                  percent: 30,
                  background: 'rgba(0,44,25,0.2)',
                  color: 'rgba(0,44,25,0.9)',
                  strokeWidth: '15',
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '状态',
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Progress',
                'x-component-props': {
                  percent: 30,
                  color:
                    'linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)',
                  animated: true,
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
