// import { observer } from '@formily/react';
// import { StorePage, useStore } from '@yimoko/store';
// import React from 'react';

// function Index() {
//   const store = useStore({ defaultValues: { arr: [] } });
//   console.log('index', store.values.arr);

//   return (
//     <StorePage
//       store={store}
//       schema={{
//         type: 'object',
//         properties: {
//           arr: {
//             type: 'array',
//             title: '受控',
//             'x-decorator': 'Cell',
//             'x-component': 'Cascader',
//             'x-component-props': {
//               title: '选择地址',
//               placeholder: '请选择地址',
//               closeable: true,
//             },
//             enum: [
//               {
//                 text: '浙江',
//                 value: 'zj',
//                 children: [
//                   {
//                     text: '杭州',
//                     value: 'hz',
//                     disabled: true,
//                     children: [
//                       { text: 'xh', value: '西湖区', disabled: true },
//                       { text: 'yh', value: '余杭区' },
//                     ],
//                   },
//                   {
//                     value: 'wz',
//                     text: '温州',
//                     children: [
//                       { value: 'lc', text: '鹿城区' },
//                       { value: 'oh', text: '瓯海区' },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         },
//       }}
//     />
//   );
// }

// export default observer(Index);
import Taro from '@tarojs/taro';

import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cascader, Cell, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: [],
      v2: [],
      v3: [],
      v4: [],
    },
  });
  const { tab, v1, v2, v3, v4 } = store.values;
  const { setValues } = store;
  const change1 = (value: any, path: any) => {
    console.log('onChange', value, path);
    setValues({ v1: value });
  };
  const change2 = (value: any, path: any) => {
    console.log('onChange', value, path);
    setValues({ v2: value });
  };
  const change3 = (value: any, path: any) => {
    console.log('onChange', value, path);
    setValues({ v3: value });
  };
  const change4 = (value: any, path: any) => {
    console.log('onChange', value, path);
    setValues({ v4: value });
  };
  const onPathChange = (value: any, path: any) => {
    console.log('onPathChange', value, path);
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
            <Cascader
              popupProps={{
                className: 'cascader-popup',
              }}
              value={v1}
              placeholder='请选择地址'
              options={Demo1}
              closeable
              onChange={change1}
              onPathChange={onPathChange}
            />
          </Cell.Group>
          <Cell.Group title='触发器'>
            <Cascader
              popupProps={{
                className: 'cascader-popup',
              }}
              value={v2}
              options={Demo1}
              closeable
              onChange={change2}
              onPathChange={onPathChange}
              trigger={{ component: Button, type: 'primary' }}
            />
          </Cell.Group>
          <Cell.Group title='自定义key'>
            <Cascader
              popupProps={{
                className: 'cascader-popup',
              }}
              value={v3}
              options={Demo2}
              optionKey={{
                textKey: 'text1',
                valueKey: 'value1',
                childrenKey: 'items',
              }}
              closeable
              onChange={change3}
              onPathChange={onPathChange}
            />
          </Cell.Group>
          <Cell.Group title='部分数据动态加载'>
            <Cascader
              popupProps={{
                className: 'cascader-popup',
              }}
              value={v4}
              placeholder='请选择地址'
              lazy
              closeable
              onChange={change4}
              onPathChange={onPathChange}
              onLoad={lazyDemo3}
            />
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
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  v1: {
                    type: 'array',
                    'x-component': 'Cascader',
                    'x-component-props': {
                      popupProps: {
                        className: 'cascader-popup',
                      },
                      placeholder: '请选择地址',
                      closeable: true,
                      onChange: change1,
                      onPathChange,
                    },
                    enum: Demo1,
                  },
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '触发器',
                },
                properties: {
                  v2: {
                    type: 'array',
                    'x-component': 'Cascader',
                    'x-component-props': {
                      popupProps: {
                        className: 'cascader-popup',
                      },
                      closeable: true,
                      onChange: change2,
                      onPathChange,
                      trigger: { component: Button, type: 'primary' },
                    },
                    enum: Demo1,
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义key',
                },
                properties: {
                  v3: {
                    type: 'array',
                    'x-component': 'Cascader',
                    'x-component-props': {
                      popupProps: {
                        className: 'cascader-popup',
                      },
                      closeable: true,
                      onChange: change3,
                      onPathChange,
                      optionKey: {
                        textKey: 'text1',
                        valueKey: 'value1',
                        childrenKey: 'items',
                      },
                    },
                    enum: Demo2,
                  },
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '部分数据动态加载',
                },
                properties: {
                  v4: {
                    type: 'array',
                    'x-component': 'Cascader',
                    'x-component-props': {
                      popupProps: {
                        className: 'cascader-popup',
                      },
                      placeholder: '请选择地址',
                      lazy: true,
                      closeable: true,
                      onChange: change4,
                      onPathChange,
                      onLoad: lazyDemo3,
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

const Demo1 = [
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区', disabled: true },
          { value: '余杭区', text: '余杭区' },
        ],
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' },
        ],
      },
    ],
  },
  {
    value: '湖南',
    text: '湖南',
    disabled: true,
    children: [
      {
        value: '长沙',
        text: '长沙',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区' },
          { value: '余杭区', text: '余杭区' },
        ],
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' },
        ],
      },
    ],
  },
  {
    value: '福建',
    text: '福建',
    children: [
      {
        value: '福州',
        text: '福州',
        children: [
          { value: '鼓楼区', text: '鼓楼区' },
          { value: '台江区', text: '台江区' },
        ],
      },
    ],
  },
];

const Demo2 = [
  {
    value1: '浙江',
    text1: '浙江',
    items: [
      {
        value1: '杭州',
        text1: '杭州',
        disabled: true,
        items: [
          { value1: '西湖区', text1: '西湖区', disabled: true },
          { value1: '余杭区', text1: '余杭区' },
        ],
      },
      {
        value1: '温州',
        text1: '温州',
        items: [
          { value1: '鹿城区', text1: '鹿城区' },
          { value1: '瓯海区', text1: '瓯海区' },
        ],
      },
    ],
  },
  {
    value1: '湖南',
    text1: '湖南',
    disabled: true,
    items: [
      {
        value1: '长沙',
        text1: '长沙',
        disabled: true,
        items: [
          { value1: '西湖区', text1: '西湖区' },
          { value1: '余杭区', text1: '余杭区' },
        ],
      },
      {
        value1: '温州',
        text1: '温州',
        items: [
          { value1: '鹿城区', text1: '鹿城区' },
          { value1: '瓯海区', text1: '瓯海区' },
        ],
      },
    ],
  },
  {
    value1: '福建',
    text1: '福建',
    items: [
      {
        value1: '福州',
        text1: '福州',
        items: [
          { value1: '鼓楼区', text1: '鼓楼区' },
          { value1: '台江区', text1: '台江区' },
        ],
      },
    ],
  },
];

const lazyDemo3 = (node: any, resolve: (children: any) => void) => {
  if (node.root) {
    resolve([
      { value: 'A0', text: 'A0' },
      {
        value: 'B0',
        text: 'B0',
        children: [
          { value: 'B11', text: 'B11', leaf: true },
          { value: 'B12', text: 'B12' },
        ],
      },
      { value: 'C0', text: 'C0' },
    ]);
  } else {
    setTimeout(() => {
      const { value, level } = node;
      const text = value.substring(0, 1);
      const value1 = `${text}${level + 1}1`;
      const value2 = `${text}${level + 1}2`;
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 },
      ]);
    }, 500);
  }
};
