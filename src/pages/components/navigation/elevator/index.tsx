import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, Elevator, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
    },
  });
  const { tab } = store.values;
  const { setValues } = store;

  const onItemClick = (key: string, item: any) => {
    console.log(key, JSON.stringify(item));
  };

  const onIndexClick = (key: string) => {
    console.log(key);
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
              <Elevator
                list={dataList1}
                height='260'
                onItemClick={onItemClick}
                onIndexClick={onIndexClick}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='不展示右侧导航'>
            <Cell>
              <Elevator
                list={dataList1}
                showKeys={false}
                height='260'
                onItemClick={onItemClick}
                onIndexClick={onIndexClick}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义索引'>
            <Cell>
              <Elevator
                list={dataList2}
                height='220'
                floorKey='num'
                onItemClick={onItemClick}
                onIndexClick={onIndexClick}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='吸顶索引'>
            <Cell>
              <Elevator
                list={dataList3}
                height='220'
                sticky
                onItemClick={onItemClick}
                onIndexClick={onIndexClick}
              />
            </Cell>
          </Cell.Group>
          <Cell.Group title='自定义内容'>
            <Cell>
              <Elevator
                list={dataList3}
                height='260'
                onItemClick={(key: string, item: any) => onItemClick(key, item)}
                onIndexClick={(key: string) => onIndexClick(key)}
              >
                <Elevator.Context.Consumer>
                  {value => (<span style={{ marginLeft: '15px' }}>{value?.name}</span>)}
                </Elevator.Context.Consumer>
              </Elevator>
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
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Elevator',
                    'x-component-props': {
                      list: dataList1,
                      height: 260,
                      onItemClick,
                      onIndexClick,
                    },
                  },
                },
              },
              g2: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '不展示右侧导航',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Elevator',
                    'x-component-props': {
                      list: dataList1,
                      showKeys: false,
                      height: 260,
                      onItemClick,
                      onIndexClick,
                    },
                  },
                },
              },
              g3: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义索引',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Elevator',
                    'x-component-props': {
                      list: dataList2,
                      height: 220,
                      floorKey: 'num',
                      onItemClick,
                      onIndexClick,
                    },
                  },
                },
              },
              g4: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '吸顶索引',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Elevator',
                    'x-component-props': {
                      list: dataList3,
                      height: 220,
                      sticky: true,
                      onItemClick,
                      onIndexClick,
                    },
                  },
                },
              },
              g5: {
                type: 'object',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义内容',
                },
                'x-component': 'Cell',
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'Elevator',
                    'x-component-props': {
                      list: dataList3,
                      height: 260,
                      onItemClick,
                      onIndexClick,
                      children: <Elevator.Context.Consumer>
                        {value => (<span style={{ marginLeft: '15px' }}>{value?.name}</span>)}
                      </Elevator.Context.Consumer>,
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
const dataList1 = [
  {
    title: 'A',
    list: [
      {
        name: '安徽',
        id: 1,
      },
    ],
  },
  {
    title: 'B',
    list: [
      {
        name: '北京',
        id: 2,
      },
    ],
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 3,
      },
      {
        name: '广东',
        id: 4,
      },
    ],
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 5,
      },
      {
        name: '湖北',
        id: 6,
      },
      {
        name: '河南',
        id: 7,
      },
    ],
  },
];
const dataList2 = [
  {
    num: '一',
    list: [
      {
        name: '北京',
        id: 1,
      },
      {
        name: '上海',
        id: 2,
      },
      {
        name: '深圳',
        id: 3,
      },
      {
        name: '广州',
        id: 4,
      },
      {
        name: '杭州',
        id: 5,
      },
    ],
  },
  {
    num: '二',
    list: [
      {
        name: '成都',
        id: 6,
      },
      {
        name: '西安',
        id: 7,
      },
      {
        name: '天津',
        id: 8,
      },
      {
        name: '武汉',
        id: 9,
      },
      {
        name: '长沙',
        id: 10,
      },
      {
        name: '重庆',
        id: 11,
      },
      {
        name: '苏州',
        id: 12,
      },
      {
        name: '南京',
        id: 13,
      },
    ],
  },
  {
    num: '三',
    list: [
      {
        name: '西宁',
        id: 14,
      },
      {
        name: '兰州',
        id: 15,
      },
      {
        name: '石家庄',
        id: 16,
      },
      {
        name: '秦皇岛',
        id: 17,
      },
      {
        name: '大连',
        id: 18,
      },
      {
        name: '哈尔滨',
        id: 19,
      },
      {
        name: '长春',
        id: 20,
      },
      {
        name: '太原',
        id: 21,
      },
    ],
  },
];
const dataList3 = [
  {
    title: 'A',
    list: [
      {
        name: '安徽',
        id: 1,
      },
    ],
  },
  {
    title: 'B',
    list: [
      {
        name: '北京',
        id: 2,
      },
    ],
  },
  {
    title: 'C',
    list: [
      {
        name: '重庆',
        id: 3,
      },
    ],
  },
  {
    title: 'F',
    list: [
      {
        name: '福建',
        id: 4,
      },
    ],
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 5,
      },
      {
        name: '广东',
        id: 6,
      },
      {
        name: '甘肃',
        id: 7,
      },
      {
        name: '贵州',
        id: 8,
      },
    ],
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 9,
      },
      {
        name: '湖北',
        id: 10,
      },
      {
        name: '海南',
        id: 11,
      },
      {
        name: '河北',
        id: 12,
      },
      {
        name: '河南',
        id: 13,
      },
      {
        name: '黑龙江',
        id: 14,
      },
    ],
  },
  {
    title: 'J',
    list: [
      {
        name: '吉林',
        id: 15,
      },
      {
        name: '江苏',
        id: 16,
      },
      {
        name: '江西',
        id: 17,
      },
    ],
  },
  {
    title: 'L',
    list: [
      {
        name: '辽宁',
        id: 18,
      },
    ],
  },
];
