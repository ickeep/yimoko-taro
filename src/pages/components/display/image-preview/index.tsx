import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Divider, ImagePreview, Tabs } from '@/library';

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
          <ImagePreview
            images={images}
            trigger={{
              component: Cell,
            }}
          >展示图片预览</ImagePreview>
          <Divider>关闭按钮</Divider>
          <ImagePreview
            images={images}
            trigger={{
              component: Cell,
            }}
            closeIcon
            closeIconPosition='bottom'
          >展示图片预览</ImagePreview>
          <Divider>初始页码</Divider>
          <ImagePreview
            defaultValue={2}
            images={images}
            trigger={{
              component: Cell,
            }}
          >展示图片预览</ImagePreview>
          <Divider>设置轮播指示器及颜色</Divider>
          <ImagePreview
            indicator indicatorColor='red'
            images={images}
            trigger={{
              component: Cell,
            }}
          >展示图片预览</ImagePreview>
          <Divider>视频、图片预览</Divider>
          <ImagePreview
            videos={videos}
            images={images}
            trigger={{
              component: Cell,
            }}
          >展示预览</ImagePreview>
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
              i1: {
                type: 'void',
                'x-component': 'ImagePreview',
                'x-component-props': {
                  images,
                  trigger: {
                    component: 'Cell',
                  },
                  children: '展示图片预览',
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '关闭按钮',
                },
              },
              i2: {
                type: 'void',
                'x-component': 'ImagePreview',
                'x-component-props': {
                  images,
                  trigger: {
                    component: 'Cell',
                  },
                  closeIcon: true,
                  closeIconPosition: 'bottom',
                  children: '展示图片预览',
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '初始页码',
                },
              },
              i3: {
                type: 'void',
                'x-component': 'ImagePreview',
                'x-component-props': {
                  defaultValue: 2,
                  images,
                  trigger: {
                    component: 'Cell',
                  },
                  children: '展示图片预览',
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '设置轮播指示器及颜色',
                },
              },
              i4: {
                type: 'void',
                'x-component': 'ImagePreview',
                'x-component-props': {
                  indicator: true,
                  indicatorColor: 'red',
                  images,
                  trigger: {
                    component: 'Cell',
                  },
                  children: '展示图片预览',
                },
              },
              d5: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '视频、图片预览',
                },
              },
              i5: {
                type: 'void',
                'x-component': 'ImagePreview',
                'x-component-props': {
                  videos,
                  images,
                  trigger: {
                    component: 'Cell',
                  },
                  children: '展示预览',
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

const images = [
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg',
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg',
  },
];

const videos = [
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4',
    },
    options: {
      muted: true,
      controls: true,
    },
  },
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4',
    },
    options: {
      muted: true,
      controls: true,
    },
  },
];
