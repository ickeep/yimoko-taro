import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { BackTop, Cell, Tabs } from '@/library';

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
          <Cell.Group title='基础用法'>
            <div style={{ height: '800px' }}>
              {new Array(12).fill(0)
                .map((_, index) => <Cell key={index}>我是测试数据{index}</Cell>)}
              <BackTop />
            </div>
          </Cell.Group>
          <Cell.Group title='设置出现位置'>
            <div style={{ height: '800px' }}>
              {new Array(12).fill(0)
                .map((_, index) => <Cell key={index}>我是测试数据{index}</Cell>)}
              <BackTop threshold={50} />
            </div>
          </Cell.Group>
          <Cell.Group title='自定义样式'>
            <div style={{ height: '800px' }}>
              {new Array(12).fill(0)
                .map((_, index) => <Cell key={index}>我是测试数据{index}</Cell>)}
              <BackTop threshold={100}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontSize: '12px' }}>顶部</div>
                </div>
              </BackTop>
            </div>
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
                'x-component': 'div',
                'x-component-props': {
                  style: {
                    height: '800px',
                  },
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      children: new Array(12).fill(0)
                        .map((_, index) => <Cell key={index}>我是测试数据{index}</Cell>),
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'BackTop',
                    'x-component-props': {
                      threshold: 50,
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '设置出现位置',
                },
                'x-component': 'div',
                'x-component-props': {
                  style: {
                    height: '800px',
                  },
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      children: new Array(12).fill(0)
                        .map((_, index) => <Cell key={index}>我是测试数据{index}</Cell>),
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'BackTop',
                    'x-component-props': {
                      threshold: 100,
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义样式',
                },
                'x-component': 'div',
                'x-component-props': {
                  style: {
                    height: '800px',
                  },
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      children: new Array(12).fill(0)
                        .map((_, index) => <Cell key={index}>我是测试数据{index}</Cell>),
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'BackTop',
                    'x-component-props': {
                      threshold: 100,
                      children: (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <div style={{ fontSize: '12px' }}>顶部</div>
                        </div>
                      ),
                    },
                  },
                },
              },
            },
          }}
        />)
      }
    </div >
  );
}

export default observer(Index);
