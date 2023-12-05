import { observer } from '@formily/react';
import { Drag } from '@nutui/nutui-react-taro';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, FixedNav, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: false,
      v2: false,
      v3: false,
      v4: false,
      v5: false,
    },
  });
  const { tab, v1, v2, v3, v4, v5 } = store.values;
  const { setValues } = store;
  const selected = (item, event) => {
    console.log(item, event);
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
              <FixedNav
                list={list}
                activeText='基础用法'
                overlay
                position={{ top: '60px' }}
                onChange={change => setValues({ v1: change })}
                visible={v1}
                onSelect={selected}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='左侧效果'>
            <Cell>
              <FixedNav
                list={list}
                type='left'
                overlay
                visible={v2}
                activeText='左侧收起'
                inactiveText='左侧展开'
                position={{ top: '190px' }}
                onChange={change => setValues({ v2: change })}
                onSelect={selected}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='取消背景遮罩'>
            <Cell>
              <FixedNav
                list={list}
                visible={v3}
                activeText='取消背景遮罩'
                inactiveText='取消背景遮罩'
                position={{ top: '270px' }}
                onChange={change => setValues({ v3: change })}
                onSelect={selected}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义内容'>
            <Cell>
              <FixedNav
                position={{ top: '360px' }}
                type='left'
                visible={v4}
                onChange={change => setValues({ v4: change })}
                onSelect={selected}
                content={
                  <span className='text'>{v4 ? '自定义关' : '自定义开'}</span>
                }
              >
                <ul className='nut-fixednav__list'>
                  <li className='nut-fixednav__list-item'>1</li>
                  <li className='nut-fixednav__list-item'>2</li>
                  <li className='nut-fixednav__list-item'>3</li>
                  <li className='nut-fixednav__list-item'>4</li>
                  <li className='nut-fixednav__list-item'>5</li>
                </ul>
              </FixedNav>
            </Cell>
          </Cell.Group>
          <Cell.Group title='支持拖拽'>
            <Cell>
              <Drag direction='y' style={{ right: '0px', bottom: '240px' }}>
                <FixedNav
                  list={list}
                  inactiveText='支持拖拽'
                  visible={v5}
                  onChange={change => setValues({ v5: change })}
                  onSelect={selected}
                />
              </Drag>
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
                  v1: {
                    type: 'boolean',
                    'x-component': 'FixedNav',
                    'x-component-props': {
                      list,
                      activeText: '基础用法',
                      overlay: true,
                      position: { top: '60px' },
                      onSelect: selected,
                    },
                  },
                },
              },
              g2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '左侧效果',
                },
                'x-component': 'Cell',
                properties: {
                  v2: {
                    type: 'boolean',
                    'x-component': 'FixedNav',
                    'x-component-props': {
                      list,
                      type: 'left',
                      overlay: true,
                      activeText: '左侧收起',
                      inactiveText: '左侧展开',
                      position: { top: '190px' },
                      onSelect: selected,
                    },
                  },
                },
              },
              g3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '取消背景遮罩',
                },
                'x-component': 'Cell',
                properties: {
                  v3: {
                    type: 'boolean',
                    'x-component': 'FixedNav',
                    'x-component-props': {
                      list,
                      activeText: '取消背景遮罩',
                      inactiveText: '取消背景遮罩',
                      position: { top: '270px' },
                      onSelect: selected,
                    },
                  },
                },
              },
              g4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义内容',
                },
                'x-component': 'Cell',
                properties: {
                  v4: {
                    type: 'boolean',
                    'x-component': 'FixedNav',
                    'x-component-props': {
                      position: { top: '360px' },
                      type: 'left',
                      content: <span className='text'>{v4 ? '自定义关' : '自定义开'}</span>,
                      onSelect: selected,
                    },
                    properties: {
                      ul: {
                        type: 'void',
                        'x-component': 'ul',
                        'x-component-props': {
                          className: 'nut-fixednav__list',
                        },
                        properties: {
                          li1: {
                            type: 'void',
                            'x-decorator': 'li',
                            'x-decorator-props': {
                              className: 'nut-fixednav__list-item',
                            },
                            'x-component': 'text',
                            'x-component-props': {
                              children: '1',
                            },
                          },
                          li2: {
                            type: 'void',
                            'x-decorator': 'li',
                            'x-decorator-props': {
                              className: 'nut-fixednav__list-item',
                            },
                            'x-component': 'text',
                            'x-component-props': {
                              children: '2',
                            },
                          },
                          li3: {
                            type: 'void',
                            'x-decorator': 'li',
                            'x-decorator-props': {
                              className: 'nut-fixednav__list-item',
                            },
                            'x-component': 'text',
                            'x-component-props': {
                              children: '3',
                            },
                          },
                          li4: {
                            type: 'void',
                            'x-decorator': 'li',
                            'x-decorator-props': {
                              className: 'nut-fixednav__list-item',
                            },
                            'x-component': 'text',
                            'x-component-props': {
                              children: '4',
                            },
                          },
                          li5: {
                            type: 'void',
                            'x-decorator': 'li',
                            'x-decorator-props': {
                              className: 'nut-fixednav__list-item',
                            },
                            'x-component': 'text',
                            'x-component-props': {
                              children: '5',
                            },
                          },
                        },
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

const list = [
  {
    id: 1,
    text: '首页',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
  },
  {
    id: 2,
    text: '分类',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
  },
  {
    id: 3,
    text: '购物车',
    num: 2,
    icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png',
  },
  {
    id: 4,
    text: '我的',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png',
  },
];
