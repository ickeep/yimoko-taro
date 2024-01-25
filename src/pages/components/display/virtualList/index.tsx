import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React, { useCallback, useEffect } from 'react';

import { Tabs, VirtualList } from '@/library';

function Index() {
  const store = useStore<{
    tab?: string,
    tab2?: string,
    list?: string[],
    pageNo?: number,
    isLoading?: boolean,
  }>({
    defaultValues: {
      tab: 'Schema',
      tab2: '垂直等高',
      list: [],
      pageNo: 1,
      isLoading: false,
    },
  });
  const { tab, tab2, list, pageNo, isLoading } = store.values;
  const { setValues } = store;

  const getData = useCallback(() => {
    const datas: string[] = [];
    const pageSize = 90;
    for (let i = 10; i < pageSize; i++) {
      datas.push(`${i} Item`);
    }
    setValues({ list: [...list, ...datas] });
  }, [setValues]);

  useEffect(() => {
    getData();
  }, [getData]);

  const itemRender = (data: any, dataIndex: number) => (
    <div
      style={{
        ...itemStyle,
        backgroundColor: `${dataIndex % 2 === 0 ? '#fff' : '#666'}`,
      }}
    >{data}</div>
  );
  const itemVariable = (data: any, dataIndex: number) => (
    <div
      style={{
        ...itemStyle,
        height: `${dataIndex % 2 === 0 ? '80px' : '30px'}`,
        backgroundColor: `${dataIndex % 2 === 0 ? '#fff' : '#666'}`,
      }}
    >{data}</div>
  );

  const onScroll = () => {
    if (pageNo > 50 || isLoading) return;
    setValues({ isLoading: true });
    setTimeout(() => {
      setValues({ pageNo: pageNo + 1 });
      setValues({ isLoading: false });
    }, 30);
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
          <Tabs
            value={tab2}
            options={[{ title: '垂直等高', value: '垂直等高' }, { title: '垂直不等高', value: '垂直不等高' }]}
            onChange={value => setValues({ tab2: `${value}` })}
          />
          {tab2 === '垂直等高' ? (
            <>
              <VirtualList
                itemHeight={50}
                list={list}
                itemRender={itemRender}
                onScroll={onScroll}
              />
            </>
          ) : (
            <>
              <VirtualList
                itemHeight={80}
                list={list}
                itemRender={itemVariable}
                onScroll={onScroll}
                itemEqual={false}
                containerHeight={500}
              />
            </>
          )}
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              tab2: {
                type: 'string',
                'x-component': 'Tabs',
                'x-component-props': {
                  style: { width: '100%' },
                  onchange: (value: any) => {
                    setValues({ tab2: value });
                  },
                },
                enum: [{ title: '垂直等高', value: '垂直等高' }, { title: '垂直不等高', value: '垂直不等高' }],
                items: [
                  {
                    type: 'void',
                    'x-component': 'VirtualList',
                    'x-component-props': {
                      itemHeight: 50,
                      list,
                      itemRender,
                      onScroll,
                    },
                  },
                  {
                    type: 'void',
                    'x-component': 'VirtualList',
                    'x-component-props': {
                      itemHeight: 50,
                      list,
                      itemRender: itemVariable,
                      itemEuqal: false,
                      containerHeight: 500,
                      onScroll,
                    },
                  },
                ],
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

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '50px',
  background: '#fff',
  borderRadius: '10px',
};
