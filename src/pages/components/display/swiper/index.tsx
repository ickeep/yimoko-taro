import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Divider, Swiper, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      current: 0,
    },
  });
  const { tab, current } = store.values;
  const { setValues } = store;
  const onChange = (e) => {
    setValues({ current: e });
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
          <Swiper
            autoPlay
            defaultValue={0}
            indicator
          >
            {list.map((item, index) => (
              <Swiper.Item key={item}>
                <img width='100%' height='100%' src={item} onClick={() => console.log(index)} alt='' />
              </Swiper.Item>
            ))}
          </Swiper>
          <Divider>方向</Divider>
          <Swiper
            autoPlay
            defaultValue={0}
            indicator
            direction='vertical'
          >
            {list.map((item, index) => (
              <Swiper.Item key={item}>
                <img width='100%' height='100%' src={item} onClick={() => console.log(index)} alt='' />
              </Swiper.Item>
            ))}
          </Swiper>
          <Divider>水平居中展示</Divider>
          <Swiper
            autoPlay
            defaultValue={0}
            indicator
            loop previousMargin='20px' nextMargin='20px'
          >
            {list.map((item, index) => (
              <Swiper.Item key={item}>
                <img width='100%' height='100%' src={item} onClick={() => console.log(index)} alt='' />
              </Swiper.Item>
            ))}
          </Swiper>
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
            },
          }
          }
        />)
      }
    </div >
  );
}

export default observer(Index);

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
];
