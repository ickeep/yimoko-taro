import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Cell, Divider, Picker, Popover, Tabs } from '@/library';
import icons from '@/src/icons';

const { Home, Cart, Location } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      v1: false,
      v2: false,
      v3: false,
      baseDesc: '',
      curPostion: '',
    },
  });
  const { tab, v1, v2, v3, baseDesc, curPostion } = store.values;
  const { setValues } = store;

  const handlePicker = () => {
    setValues({ v2: true });
    setTimeout(() => {
      setValues({ v3: true });
    }, 500);
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
          <Popover
            visible={v1}
            list={itemList1}
            location='top'
            style={{ marginRight: '30px' }}
            onClick={() => {
              v1 ? setValues({ v1: false }) : setValues({ v1: true });
            }}
            onOpen={() => {
              console.log('打开菜单时触发');
            }}
            onClose={() => {
              console.log('关闭菜单时触发');
            }}
          >
            <Button type='primary' shape='square'>
              基础用法
            </Button>
          </Popover>
          <Divider>展示图标</Divider>
          <Popover
            list={itemList2}
            location='bottom-start'
            style={{ marginRight: '30px' }}
          >
            <Button type='primary' shape='square'>
              展示图标
            </Button>
          </Popover>
          <Divider>禁用选项</Divider>
          <Popover
            list={itemList3}
            location='bottom-start'
            style={{ marginRight: '30px' }}
          >
            <Button type='primary' shape='square'>
              禁用选项
            </Button>
          </Popover>
          <Divider>位置自定义</Divider>
          <Cell
            title='点击查看更多方向'
            description={baseDesc}
            onClick={handlePicker}
          />
          <Picker
            visible={v2}
            options={columns}
            duration='500'
            title=''
            placeholder=''
            onConfirm={(list) => {
              let description = '';
              list.forEach((option: any) => {
                description += ` ${option.text}`;
              });
              setValues({ baseDesc: description });
            }}
            onOptionChange={(options: any[]) => {
              if (options[0]?.value) {
                setValues({ curPostion: options[0]?.value });
              }
            }}
            onClose={() => {
              setValues({ v2: false });
              setValues({ v3: false });
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '30px 0',
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, #fa2c19, #fa6419)',
                  borderRadius: '30px',
                  height: '100px',
                  width: '100px',
                }}
                id='pickerTarget'
              />
            </div>
          </Picker>
          <Popover
            className='custom-color'
            visible={v3}
            targetId='pickerTarget'
            list={positionList}
            location={curPostion}
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
                'x-component': 'Divider',
                'x-component-props': {
                  children: '基础用法',
                },
              },
              v1: {
                type: 'boolean',
                'x-component': 'Popover',
                'x-component-props': {
                  list: itemList1,
                  location: 'top',
                  style: { marginRight: '30px' },
                  onOpen: () => {
                    console.log('打开菜单时触发');
                  },
                  onClose: () => {
                    console.log('关闭菜单时触发');
                  },
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      shape: 'square',
                      children: '基础用法',
                    },
                  },
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '展示图标',
                },
              },
              v: {
                type: 'void',
                'x-component': 'Popover',
                'x-component-props': {
                  list: itemList2,
                  location: 'bottom-start',
                  style: { marginRight: '30px' },
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      shape: 'square',
                      children: '展示图标',
                    },
                  },
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '禁用选项',
                },
              },
              vv: {
                type: 'void',
                'x-component': 'Popover',
                'x-component-props': {
                  list: itemList3,
                  location: 'bottom-start',
                  style: { marginRight: '30px' },
                },
                properties: {
                  b1: {
                    type: 'void',
                    'x-component': 'Button',
                    'x-component-props': {
                      type: 'primary',
                      shape: 'square',
                      children: '禁用选项',
                    },
                  },
                },
              },
              d4: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '位置自定义',
                },
              },
              c1: {
                type: 'void',
                'x-component': 'Cell',
                'x-component-props': {
                  title: '点击查看更多方向',
                  description: '{{curStore.values.baseDesc}}',
                  onClick: handlePicker,
                },
              },
              v2x: {
                type: 'void',
                'x-component': 'Picker',
                'x-component-props': {
                  visible: '{{curStore.values.v2}}',
                  options: columns,
                  duration: '500',
                  title: '',
                  placeholder: '',
                  onConfirm: (list: any) => {
                    let description = '';
                    list.forEach((option: any) => {
                      description += ` ${option.text}`;
                    });
                    setValues({ baseDesc: description });
                  },
                  onOptionChange: (options: any[]) => {
                    if (options[0]?.value) {
                      setValues({ curPostion: options[0]?.value });
                    }
                  },
                  onClose: () => {
                    setValues({ v2: false });
                    setValues({ v3: false });
                  },
                },
                properties: {
                  c1: {
                    type: 'void',
                    'x-component': 'div',
                    'x-component-props': {
                      style: {
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '30px 0',
                      },
                    },
                    properties: {
                      c1: {
                        type: 'void',
                        'x-component': 'div',
                        'x-component-props': {
                          style: {
                            background:
                              'linear-gradient(135deg, #fa2c19, #fa6419)',
                            borderRadius: '30px',
                            height: '100px',
                            width: '100px',
                          },
                          id: 'pickerTarget',
                        },
                      },
                    },
                  },
                },
              },
              v3x: {
                type: 'void',
                'x-component': 'Popover',
                'x-component-props': {
                  visible: '{{curStore.values.v3}}',
                  targetId: 'pickerTarget',
                  list: positionList,
                  location: '{{curStore.values.curPostion}}',
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

const itemList1 = [
  {
    key: 'key1',
    name: 'option1',
  },
  {
    key: 'key2',
    name: 'option2',
  },
  {
    key: 'key3',
    name: 'option3',
  },
];
const itemList2 = [
  {
    key: 'key1',
    name: 'option1',
    icon: <Home color='rgba(250, 44, 25, 1)' style={{ marginRight: '8px' }} />,
  },
  {
    key: 'key2',
    name: 'option2',
    icon: <Cart style={{ marginRight: '8px' }} />,
  },
  {
    key: 'key3',
    name: 'option3',
    icon: <Location style={{ marginRight: '8px' }} />,
  },
];
const itemList3 = [
  {
    key: 'key1',
    name: 'option1',
    disabled: true,
  },
  {
    key: 'key2',
    name: 'option2',
    disabled: true,
  },
  {
    key: 'key3',
    name: 'option3',
  },
];
const columns = [
  { text: 'top', value: 'top' },
  { text: 'top-start', value: 'top-start' },
  { text: 'top-end', value: 'top-end' },
  { text: 'right', value: 'right' },
  { text: 'right-start', value: 'right-start' },
  { text: 'right-end', value: 'right-end' },
  { text: 'bottom', value: 'bottom' },
  { text: 'bottom-start', value: 'bottom-start' },
  { text: 'bottom-end', value: 'bottom-end' },
  { text: 'left', value: 'left' },
  { text: 'left-start', value: 'left-start' },
  { text: 'left-end', value: 'left-end' },
];
const positionList = [
  {
    key: 'key1',
    name: 'option1',
  },
  {
    key: 'key2',
    name: 'option2',
  },
];
