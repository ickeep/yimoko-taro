import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Divider, Pagination, Tabs } from '@/library';

import icons from '@/src/icons';

const { ArrowRight } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      currentPage: 1,
    },
  });
  const { tab, currentPage } = store.values;
  const { setValues } = store;
  const itemRender = (page: any) => <div>{page.number > 10 ? 'hot' : page.text}</div>;

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
          <Pagination
            value={currentPage}
            total={25}
            pageSize={1}
            onChange={value => setValues({ currentPage: value })}
          />
          <Divider>简单模式</Divider>
          <Pagination
            value={currentPage}
            total={25}
            mode='simple'
            onChange={value => setValues({ currentPage: value })}
          />
          <Divider>显示省略号</Divider>
          <Pagination
            value={currentPage}
            total={25}
            ellipse
            onChange={value => setValues({ currentPage: value })}
          />
          <Divider>自定义按钮</Divider>
          <Pagination
            value={currentPage}
            total={25}
            onChange={value => setValues({ currentPage: value })}
            itemRender={itemRender}
            prev={<ArrowRight />}
            next={<ArrowRight />}
          />
        </>
      ) : (
        <StorePage
          store={store}
          scope={{ icons }}
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
                'x-component': 'Pagination',
                'x-component-props': {
                  total: 25,
                  pageSize: 5,
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '简单模式',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Pagination',
                'x-component-props': {
                  total: 25,
                  pageSize: 5,
                  mode: 'simple',
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '显示省略号',
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Pagination',
                'x-component-props': {
                  total: 25,
                  pageSize: 5,
                  ellipse: true,
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '自定义按钮',
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Pagination',
                'x-component-props': {
                  total: 25,
                  pageSize: 1,
                  itemRender,
                },
                additionalProperties: {
                  type: 'void',
                  properties: {
                    prev: {
                      type: 'void',
                      'x-component': '{{icons.ArrowRight}}',
                    },
                    next: {
                      type: 'void',
                      'x-component': '{{icons.ArrowRight}}',
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
