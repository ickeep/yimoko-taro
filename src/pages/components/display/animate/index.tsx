import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Animate, Button, Divider, Tabs } from '@/library';

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
          <Divider>点击触发</Divider>
          <Animate type='slide-right' action='click'>
            <Button type='primary'>由右向左划入</Button>
          </Animate>
          <Animate type='slide-left' action='click'>
            <Button type='primary'>由左向右划入</Button>
          </Animate>
          <Animate type='slide-top' action='click'>
            <Button type='primary'>由上至下划入</Button>
          </Animate>
          <Animate type='slide-bottom' action='click'>
            <Button type='primary'>由下至上划入</Button>
          </Animate>
          <Divider>循环动画</Divider>
          <Animate type='shake' loop>
            <Button type='primary'>shake-抖动</Button>
          </Animate>
          <Animate type='ripple' loop>
            <Button type='primary'>ripple-心跳</Button>
          </Animate>
          <Animate type='breath' loop>
            <Button type='primary'>breath-呼吸灯</Button>
          </Animate>
          <Animate type='twinkle' loop>
            <Button type='primary'>twinkle-水波</Button>
          </Animate>
          <Animate type='flicker' loop>
            <Button type='primary'>flicker-擦亮</Button>
          </Animate>
          <Animate type='jump' loop>
            <Button type='primary'>jump-跳跃</Button>
          </Animate>
          <Animate type='float' loop>
            <Button type='primary'>float-漂浮</Button>
          </Animate>
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
                  children: '点击触发',
                },
              },
              c1: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'slide-right',
                  action: 'click',
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: '由右向左划入',
                    },
                  },
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'slide-left',
                  action: 'click',
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: '由左向右划入',
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'slide-top',
                  action: 'click',
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: '由上至下划入',
                    },
                  },
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'slide-bottom',
                  action: 'click',
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: '由下至上划入',
                    },
                  },
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '循环动画',
                },
              },
              c5: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'shake',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'shake-抖动',
                    },
                  },
                },
              },
              c6: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'ripple',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'ripple-心跳',
                    },
                  },
                },
              },
              c7: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'breath',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'breath-呼吸灯',
                    },
                  },
                },
              },
              c8: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'twinkle',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'twinkle-水波',
                    },
                  },
                },
              },
              c9: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'flicker',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'flicker-擦亮',
                    },
                  },
                },
              },
              c10: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'jump',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'jump-跳跃',
                    },
                  },
                },
              },
              c11: {
                type: 'void',
                'x-component': 'Animate',
                'x-component-props': {
                  type: 'float',
                  loop: true,
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      children: 'float-漂浮',
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
