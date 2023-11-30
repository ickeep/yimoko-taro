
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import React from 'react';

import { Button, Cell, Overlay, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: false,
      v2: false,
    },
  });
  const { tab, v1, v2 } = store.values;
  const { setValues } = store;

  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => store.setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Cell.Group title='基础用法'>
            <Cell>
              <Overlay
                trigger={{
                  component: Cell,
                  children: '显示遮罩层',
                }}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='遮罩层样式'>
            <Cell>
              <Overlay
                visible={v1}
                onClick={() => setValues({ v1: false })}
                trigger={{
                  component: Button,
                  children: '显示遮罩层',
                  onClick: () => setValues({ v1: true }),
                  type: 'primary',
                }}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, .2)',
                }}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='设置动画时间'>
            <Cell>
              <Overlay
                trigger={{
                  component: Cell,
                  children: '显示遮罩层',
                }}
                duration={2500}
                afterShow={() => {
                  console.log('afterShow');
                }}
                afterClose={() => {
                  console.log('afterClose');
                }}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='嵌套内容'>
            <Cell>
              <Overlay
                trigger={{
                  component: Cell,
                  children: '显示遮罩层',
                }}
              >
                <div className='wrapper' style={WrapperStyle}>
                  <div className='content' style={ContentStyle}>这里是正文</div>
                </div>
              </Overlay>
            </Cell>
          </Cell.Group>
          <Cell.Group title='点击遮罩不关闭'>
            <Cell>
              <Overlay
                visible={v2}
                trigger={{
                  component: Cell,
                  children: '显示遮罩层',
                  onClick: () => setValues({ v2: true }),
                }}
                closeOnOverlayClick={false}
              >
                <div className='wrapper' style={WrapperStyle}>
                  <div className='content' style={ContentStyle} onClick={() => setValues({ v2: false })}>这里是正文</div>
                </div>
              </Overlay>
            </Cell>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              c1: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                properties: {
                  overlay: {
                    type: 'void',
                    'x-component': 'Overlay',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '显示遮罩层',
                      },
                    },
                  },
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '遮罩层样式',
                },
                properties: {
                  v1: {
                    type: 'boolean',
                    'x-component': 'Overlay',
                    'x-component-props': {
                      trigger: {
                        component: Button,
                        children: '显示遮罩层',
                        type: 'primary',
                        onClick: () => setValues({ v1: true }),
                      },
                      style: {
                        backgroundColor: 'rgba(0, 0, 0, .2)',
                      },
                      onClick: () => setValues({ v1: false }),
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '设置动画时间',
                },
                properties: {
                  overlay: {
                    type: 'void',
                    'x-component': 'Overlay',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '显示遮罩层',
                      },
                      duration: 2500,
                      afterShow: () => {
                        console.log('afterShow');
                      },
                      afterClose: () => {
                        console.log('afterClose');
                      },
                    },
                  },
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '嵌套内容',
                },
                properties: {
                  overlay: {
                    type: 'void',
                    'x-component': 'Overlay',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '显示遮罩层',
                      },
                      children: <div className='wrapper' style={WrapperStyle}>
                        <div className='content' style={ContentStyle}>这里是正文</div>
                      </div>,
                    },
                  },
                },
              },
              c5: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '点击遮罩不关闭',
                },
                properties: {
                  v2: {
                    type: 'boolean',
                    'x-component': 'Overlay',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '显示遮罩层',
                      },
                      closeOnOverlayClick: false,
                      children: <div className='wrapper' style={WrapperStyle}>
                        <div className='content' style={ContentStyle} onClick={() => setValues({ v2: false })}>这里是正文</div>
                      </div>,
                    },
                  },
                },
              },
            },
          }}
        />)}
    </div >
  );
}

export default observer(Index);

const WrapperStyle = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
};
const ContentStyle = {
  display: 'flex',
  width: '150px',
  height: '150px',
  background: '#fff',
  borderRadius: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red',
};
