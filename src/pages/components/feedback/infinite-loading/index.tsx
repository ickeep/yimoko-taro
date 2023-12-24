import Taro from '@tarojs/taro';

import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React, { useEffect } from 'react';

import { Cell, InfiniteLoading, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      defaultList: [],
      hasMore: true,
    },
  });
  const { tab, defaultList, hasMore } = store.values;
  const { setValues } = store;

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      defaultList.push(`${i}`);
    }
    setValues({ defaultList });
  }, [defaultList, setValues]);

  const loadMore = (done: () => void) => {
    setTimeout(() => {
      const curLen = defaultList.length;
      for (let i = curLen; i < curLen + 10; i++) {
        defaultList.push(`${i}`);
      }
      if (defaultList.length >= 30) {
        setValues({ hasMore: false });
      } else {
        setValues({ defaultList });
      }
      done();
    }, 500);
  };

  const refresh = (done: () => void) => {
    setTimeout(() => {
      Taro.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000,
      });
      done();
    }, 1000);
  };

  const infiniteUlStyle: React.CSSProperties = {
    height: '500px',
    width: '100%',
    padding: '0',
    overflowY: 'auto',
    overflowX: 'hidden',
  };

  const infiniteLiStyle: React.CSSProperties = {
    marginTop: '10px',
    fontSize: '14px',
    color: 'rgba(100, 100, 100, 1)',
    textAlign: 'center',
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
          <Cell.Group title='基础用法'>
            <Cell>
              <ul id='scrollDemo' style={infiniteUlStyle}>
                <InfiniteLoading
                  pullingText={pullingText}
                  loadingText={loadingText}
                  loadMoreText={loadMoreText}
                  pullRefresh
                  target='scrollDemo'
                  hasMore={hasMore}
                  onLoadMore={loadMore}
                  onRefresh={refresh}
                >
                  {defaultList.map((item, index) => (
                    <li key={index} style={infiniteLiStyle}>
                      {item}
                    </li>
                  ))}
                </InfiniteLoading>
              </ul>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  ul1: {
                    type: 'void',
                    'x-component': 'ul',
                    'x-component-props': {
                      id: 'scrollDemo',
                      style: {
                        height: '500px',
                        width: '100%',
                        padding: '0',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                      },
                    },
                    properties: {
                      l1: {
                        type: 'void',
                        'x-component': 'InfiniteLoading',
                        'x-component-props': {
                          pullingText,
                          loadingText,
                          loadMoreText,
                          pullRefresh: true,
                          target: 'scrollDemo',
                          hasMore,
                          onLoadMore: loadMore,
                          onRefresh: refresh,
                        },
                        enum: defaultList,
                        items: [
                          {
                            type: 'void',
                            'x-component': 'li',
                            'x-component-props': {
                              style: {
                                marginTop: '10px',
                                fontSize: '14px',
                                color: 'rgba(100, 100, 100, 1)',
                                textAlign: 'center',
                              },
                            },
                          },
                        ],
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

const pullingText = <>
  <i className='top-box-icons'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='36'
      height='26'
      viewBox='0 0 36 26'
      fill='none'
    >
      <path
        // eslint-disable-next-line max-len
        d='M34.7243 10.965C32.842 8.94809 32.4297 5.92727 31.2018 4.90525C29.9738 3.88324 28.1722 5.51123 27.5089 6.46993C23.8429 3.88324 17.9809 4.00082 17.9809 4.00082C17.9809 4.00082 12.1458 3.88324 8.47083 6.46993C7.80754 5.51123 6.01488 3.88324 4.78691 4.90525C3.55894 5.92727 3.15559 8.94809 1.2733 10.965C-0.133943 12.4844 -0.250465 12.9276 0.323186 14.1305C0.887874 15.3334 4.40149 16.3283 6.88432 13.9496C7.21596 15.1887 10.0125 21.9991 17.9899 21.9991C25.9672 21.9991 28.7817 15.1887 29.1043 13.9496C31.5872 16.3283 35.1098 15.3334 35.6834 14.1305C36.2481 12.9276 36.1316 12.4844 34.7243 10.965Z'
        fill='#8C8C8C'
      />
    </svg>
  </i>
  松开刷新
</>;
const loadingText = <>
  <i className='bottom-box-icons'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <circle cx='2' cy='12' r='2' fill='#8C8C8C' />
      <circle cx='12' cy='12' r='2' fill='#8C8C8C' />
      <circle cx='22' cy='12' r='2' fill='#8C8C8C' />
    </svg>
  </i>
  加载中
</>;
const loadMoreText = <>
  <i className='bottom-box-icons'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <g clipPath='url(#clip0_202_858)'>
        <path
          // eslint-disable-next-line max-len
          d='M23.1507 10.6435C21.8958 9.29889 21.6209 7.28491 20.8022 6.60353C19.9835 5.92216 18.7824 7.00753 18.3402 7.6467C15.896 5.92216 11.9879 6.00054 11.9879 6.00054C11.9879 6.00054 8.09759 5.92216 5.6475 7.6467C5.20528 7.00753 4.01012 5.92216 3.19143 6.60353C2.37274 7.28491 2.10383 9.29889 0.848906 10.6435C-0.0892994 11.6566 -0.166985 11.952 0.215468 12.754C0.591945 13.556 2.93447 14.2193 4.58977 12.6334C4.81088 13.4595 6.67534 18 11.9938 18C17.3123 18 19.1887 13.4595 19.4039 12.6334C21.0592 14.2193 23.4077 13.556 23.7901 12.754C24.1666 11.952 24.0889 11.6566 23.1507 10.6435Z'
          fill='#8C8C8C'
        />
      </g>
      <defs>
        <clipPath id='clip0_202_858'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  </i>
  没有更多了
</>;
