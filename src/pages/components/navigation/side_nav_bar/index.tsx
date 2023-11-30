import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, SideNavBar, SideNavBarItem, SubSideNavBar, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      navBarState: {
        visible: false,
        position: 'left',
      },
    },
  });
  const { tab, navBarState } = store.values;
  const { setValues } = store;
  const changeNarBar = (visible, position = navBarState.position) => {
    setValues({
      navBarState: {
        visible,
        position,
      },
    });
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
            <Cell
              title='左侧弹出'
              onClick={() => {
                changeNarBar(true, 'left');
              }}
            />
            <Cell
              title='右侧弹出'
              onClick={() => {
                changeNarBar(true, 'right');
              }}
            />
            <SideNavBar
              title='首页'
              visible={navBarState.visible}
              position={navBarState.position}
              onClose={() => {
                changeNarBar(false);
              }}
            >
              <MyContent />
            </SideNavBar>
          </Cell.Group>
          <Cell.Group title='宽度/缩进'>
            <Cell
              title='左侧弹出'
              onClick={() => {
                changeNarBar(true, 'left');
              }}
            />
            <Cell
              title='右侧弹出'
              onClick={() => {
                changeNarBar(true, 'right');
              }}
            />
            <SideNavBar
              title='首页'
              visible={navBarState.visible}
              position={navBarState.position}
              width='50%'
              indent={10}
              onClose={() => {
                changeNarBar(false);
              }}
            >
              <MyContent />
            </SideNavBar>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          components={{ MyContent }}
          store={store}
          schema={{
            type: 'object',
            properties: {
              g1: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '左侧弹出',
                      onClick: (_e) => {
                        changeNarBar(true, 'left');
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '右侧弹出',
                      onClick: (_e) => {
                        changeNarBar(true, 'right');
                      },
                    },
                  },
                  navBarState: {
                    type: 'Object',
                    'x-component': 'SideNavBar',
                    'x-component-props': {
                      title: '首页',
                      onClose: (_e) => {
                        changeNarBar(false);
                      },
                    },
                    properties: {
                      c4: {
                        type: 'void',
                        'x-component': 'MyContent',
                      },
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '宽度/缩进',
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '左侧弹出',
                      onClick: (_e) => {
                        changeNarBar(true, 'left');
                      },
                    },
                  },
                  c2: {
                    type: 'void',
                    'x-component': 'Cell',
                    'x-component-props': {
                      title: '右侧弹出',
                      onClick: (_e) => {
                        changeNarBar(true, 'right');
                      },
                    },
                  },
                  navBarState: {
                    type: 'Object',
                    'x-component': 'SideNavBar',
                    'x-component-props': {
                      title: '首页',
                      onClose: (_e) => {
                        changeNarBar(false);
                      },
                      width: '50%',
                      indent: 10,
                    },
                    properties: {
                      c4: {
                        type: 'void',
                        'x-component': 'MyContent',
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

const MyContent = () => (
  <>
    <SubSideNavBar title='一级标题' key='1-0' >
      <SideNavBarItem title='一级内容1' key='1-01' />
      <SideNavBarItem title='一级内容2' key='1-02' />
      <SubSideNavBar title='二级标题' key='2-0'>
        <SideNavBarItem title='二级内容1' key='2-01' />
        <SideNavBarItem title='二级内容2' key='2-02' />
      </SubSideNavBar>
    </SubSideNavBar>
  </>
);
