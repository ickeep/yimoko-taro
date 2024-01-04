import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Cell, Divider, Picker, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: false,
      v2: false,
      baseDesc: '',
      baseDesc2: '',
    },
  });
  const { tab, v1, v2, baseDesc } = store.values;
  const { setValues } = store;

  const change = (value) => {
    setValues({ v1: false, v2: false, baseDesc: value });
  };
  const changePicker = (value: string | any[], _selectedOptions?: any[] | undefined) => {
    if (Array.isArray(value) && value.length > 0) {
      console.log('当前选择', value[0].text);
    }
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
          <Divider>基础用法</Divider>
          <Picker
            visible={v1}
            options={list1}
            value={baseDesc}
            onChange={change}
            onOptionChange={changePicker}
            onCancel={() => setValues({ v1: false })}
            trigger={{
              component: Cell,
              placeholder: '请选择地址',
              onClick: () => setValues({ v1: true }),
            }}
          />
          <Divider>默认选择</Divider>
          <Picker
            visible={v2}
            options={list1}
            defaultValue={[2]}
            onChange={change}
            onOptionChange={changePicker}
            onCancel={() => setValues({ v2: false })}
            trigger={{
              component: Cell,
              placeholder: '请选择地址',
              onClick: () => setValues({ v2: true }),
            }}
          />
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              d1: {
                type: 'void',
                title: '基础用法',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '基础用法',
                },
              },
              baseDesc: {
                type: 'string',
                'x-component': 'Picker',
                enum: list1,
                'x-component-props': {
                  trigger: {
                    component: Cell,
                    placeholder: '请选择地址',
                  },
                },
              },
              d2: {
                type: 'void',
                title: '默认选择',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '默认选择',
                },
              },
              baseDesc2: {
                type: 'string',
                'x-component': 'Picker',
                enum: list1,
                'x-component-props': {
                  trigger: {
                    component: Cell,
                    placeholder: '请选择地址',
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

const list1 = [
  { value: 1, text: '南京市' },
  { value: 2, text: '无锡市' },
  { value: 3, text: '海北藏族自治区' },
  { value: 4, text: '北京市' },
  { value: 5, text: '连云港市' },
  { value: 8, text: '大庆市' },
  { value: 9, text: '绥化市' },
];
