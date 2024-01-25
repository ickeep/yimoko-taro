import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Divider, Tabs, Video } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
    },
  });
  const { tab } = store.values;
  const { setValues } = store;
  const play = (elm: any) => console.log('play', elm);
  const pause = (elm: any) => console.log('pause', elm);
  const playend = (elm: any) => console.log('playend', elm);

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
          <Video
            source={source}
            style={{ height: '163px' }}
          />
          <Divider>控制选项</Divider>
          <Video
            source={source}
            options={options1}
            style={{ height: '163px' }}
          />
          <Divider>海报</Divider>
          <Video
            source={source}
            options={options2}
            style={{ height: '163px' }}
          />
          <Divider>背景图</Divider>
          <Video
            source={source}
            options={options3}
            style={{ height: '163px' }}
          />
          <Divider>回调</Divider>
          <Video
            source={source}
            onPause={pause}
            onPlay={play}
            onPlayEnd={playend}
            style={{ height: '163px' }}
          />
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
              v1: {
                type: 'void',
                'x-component': 'Video',
                'x-component-props': {
                  source,
                  style,
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '控制选项',
                },
              },
              v2: {
                type: 'void',
                'x-component': 'Video',
                'x-component-props': {
                  source,
                  options: options1,
                  style,
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '海报',
                },
              },
              v3: {
                type: 'void',
                'x-component': 'Video',
                'x-component-props': {
                  source,
                  options: options2,
                  style,
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '背景图',
                },
              },
              v4: {
                type: 'void',
                'x-component': 'Video',
                'x-component-props': {
                  source,
                  options: options3,
                  style,
                },
              },
              d5: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '回调',
                },
              },
              v5: {
                type: 'void',
                'x-component': 'Video',
                'x-component-props': {
                  source,
                  onPause: (elm: any) => console.log('pause', elm),
                  onPlay: (elm: any) => console.log('play', elm),
                  onPlayEnd: (elm: any) => console.log('playEnd', elm),
                  style,
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

const style = { height: '163px' };

const source = {
  src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  type: 'video/mp4',
};

const options1 = {
  // 自动播放
  autoplay: true,
  // 是否展示操作栏
  controls: true,
  // 是否循环播放
  loop: true,
  // 是否静音播放
  muted: true,
  // 是否设置为行内播放元素
  playsinline: true,
};

const options2 = {
  controls: true,
  poster: 'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp',
};

const options3 = {
  // 当设置视频为背景图时
  controls: false,
  autoplay: true,
  disabled: true,
  muted: true,
  playsinline: true,
  loop: true,
};
