import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React, { useState } from 'react';

import { Button, CountDown, Divider, Tabs } from '@/library';

const t1 = Date.now() + 20 * 1000;
const endTime = Date.now() + 5 * 1000;

function Index() {
  const [defaultValues] = useState(() => ({
    tab: 'Schema',
    time: 5 * 1000,
    paused: false,
    t1: Date.now() + 20 * 1000,
    endTime: Date.now() + 5 * 1000,
  }));

  const store = useStore({
    defaultValues,
  });

  const { tab, time, paused } = store.values;
  const { setValues } = store;
  const onEnd = () => {
    console.log('countdown: ended.');
  };
  const toggle = () => {
    setValues({ paused: !store.values.paused });
  };

  const onPaused = (v) => {
    console.log('paused: ', v);
  };
  const onRestart = (v) => {
    console.log('restart: ', v);
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
          <CountDown endTime={endTime} onEnd={onEnd} />
          <Divider>倒计时</Divider>
          <CountDown remainingTime={time} />
          <Divider>自定义</Divider>
          <CountDown endTime={endTime} onEnd={onEnd} format='DD 天 HH 时 mm 分 ss 秒' />
          <Divider>毫秒级渲染</Divider>
          <CountDown endTime={endTime} onEnd={onEnd} millisecond format='DD 天 HH 时 mm 分 ss 秒' />
          <Divider>暂停</Divider>
          <CountDown
            endTime={t1}
            paused={paused}
            onPaused={onPaused}
            onRestart={onRestart}
          />
          <Button type='primary' size='small' onClick={() => toggle()}>
            {paused ? 'start' : 'stop'}
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
                'x-component': 'CountDown',
                'x-component-props': {
                  endTime,
                  onEnd: () => console.log('countdown: ended.'),
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '倒计时',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'CountDown',
                'x-component-props': {
                  remainingTime: time,
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
                'x-component': 'CountDown',
                'x-component-props': {
                  endTime,
                  onEnd: () => console.log('countdown: ended.'),
                  format: 'DD 天 HH 时 mm 分 ss 秒',
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '毫秒级渲染',
                },
              },
              c4: {
                type: 'void',
                'x-component': 'CountDown',
                'x-component-props': {
                  endTime,
                  onEnd: () => console.log('countdown: ended.'),
                  millisecond: true,
                  format: 'DD 天 HH 时 mm 分 ss 秒',
                },
              },
              d5: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '暂停',
                },
              },
              c5: {
                type: 'void',
                'x-component': 'CountDown',
                'x-component-props': {
                  endTime: t1,
                  paused: '{{curStore.values.paused}}',
                  onPaused,
                  onRestart,
                },
              },
              c6: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'primary',
                  size: 'small',
                  children: '{{curStore.values.paused ? \'start\' : \'stop\'}}',
                  onClick: () => toggle(),
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
