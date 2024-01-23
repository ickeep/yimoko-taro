import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Avatar, Cell, Divider, Skeleton, Switch, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      visible: false,
    },
  });
  const { tab, visible } = store.values;
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
          <Cell>
            <Skeleton animated />
          </Cell>
          <Divider>传入多行</Divider>
          <Cell>
            <Skeleton rows={3} title animated />
          </Cell>
          <Divider>显示头像</Divider>
          <Cell>
            <Skeleton rows={3} title animated avatar avatarSize='100px' />
          </Cell>
          <Divider>显示子组件</Divider>
          <Switch onChange={(value) => {
            setValues({ visible: value });
          }}
          />
          <Cell>
            <Skeleton rows={3} title animated visible={visible}>
              <Content />
            </Skeleton>
          </Cell>
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
              c1: {
                type: 'void',
                'x-component': 'Skeleton',
                'x-component-props': {
                  animated: true,
                },
                'x-decorator': 'Cell',
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '传入多行',
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Skeleton',
                'x-component-props': {
                  rows: 3,
                  title: true,
                  animated: true,
                },
                'x-decorator': 'Cell',
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '显示头像',
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Skeleton',
                'x-component-props': {
                  rows: 3,
                  title: true,
                  animated: true,
                  avatar: true,
                  avatarSize: '100px',
                },
                'x-decorator': 'Cell',
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '显示子组件',
                },
              },
              s1: {
                type: 'boolean',
                'x-component': 'Switch',
                'x-component-props': {
                  onChange: (value) => {
                    setValues({ visible: value });
                  },
                },
              },
              s2: {
                type: 'void',
                'x-component': 'Skeleton',
                'x-component-props': {
                  rows: 3,
                  title: true,
                  animated: true,
                  visible: '{{curStore.values.visible}}',
                },
                'x-decorator': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      children: <Content />,
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

const Content = function () {
  return (
    <div className='container'>
      <Avatar
        size='50'
        icon='https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png'
      />
      <div className='right-content'>
        <span className='title'>NutUI-React</span>
        <div className='description'>
          一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
        </div>
      </div>
    </div>
  );
};
