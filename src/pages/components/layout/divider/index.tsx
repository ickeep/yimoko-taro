import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, Divider, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX'
    },
  });
  const { tab } = store.values;
  const { setValues } = store;

  return (
    <div>
      {/* Dialog 在 TabPane 里时 高度有问题 待官方修复  */}
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Cell.Group title='基础用法'>
            <Cell>
              <Divider />
            </Cell>
          </Cell.Group>
          <Cell.Group title='文本内容'>
            <Cell>
              <Divider>文本内容</Divider>
            </Cell>
            <Cell>
              <Divider contentPosition="left">文本位置</Divider>
            </Cell>
            <Cell>
              <Divider contentPosition="right">文本位置</Divider>
            </Cell>
          </Cell.Group>
          <Cell.Group title='样式'>
            <Cell>
              <Divider style={{ borderStyle: 'dashed' }}>虚线</Divider>
            </Cell>
            <Cell>
              <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>文本</Divider>
            </Cell>
          </Cell.Group>
          <Cell.Group title='垂直分割线'>
            <Cell>
              文本
              <Divider direction="vertical" />
              <a href="#" style={{ color: '#1989fa' }}>链接</a>
              <Divider direction="vertical" />
              <a href="#" style={{ color: '#1989fa' }}>链接</a>
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
                  title: '基础用法'
                },
                properties: {
                  d: {
                    type: 'void',
                    'x-component': 'Divider',
                  },
                },
              },
              c2: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '文本内容'
                },
                properties: {
                  d1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Divider',
                    'x-component-props': {
                      children: '文本内容'
                    },
                  },
                  d2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Divider',
                    'x-component-props': {
                      contentPosition: 'left',
                      children: '文本位置'
                    },
                  },
                  d3: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Divider',
                    'x-component-props': {
                      contentPosition: 'right',
                      children: '文本位置'
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '样式'
                },
                properties: {
                  d1: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Divider',
                    'x-component-props': {
                      style: {
                        borderStyle: 'dashed'
                      },
                      children: '虚线'
                    },
                  },
                  d2: {
                    type: 'void',
                    'x-decorator': 'Cell',
                    'x-component': 'Divider',
                    'x-component-props': {
                      style: {
                        color: '#1989fa',
                        borderColor: '#1989fa',
                        padding: '0 16px',
                        borderStyle: 'dashed'
                      },
                      children: '文本'
                    },
                  },
                },
              },
              c4: {
                type: 'void',
                'x-component': 'Cell',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '垂直分割线'
                },
                properties: {
                  d1: {
                    type: 'void',
                    'x-component': 'text',
                    'x-component-props': {
                      children: '文本'
                    },
                  },
                  d2: {
                    type: 'void',
                    'x-component': 'Divider',
                    'x-component-props': {
                      direction: 'vertical'
                    },
                  },
                  d3: {
                    type: 'void',
                    'x-component': 'a',
                    'x-component-props': {
                      href: '#',
                      style: {
                        color: '#1989fa'
                      },
                      children: '链接'
                    },
                  },
                  d4: {
                    type: 'void',
                    'x-component': 'Divider',
                    'x-component-props': {
                      direction: 'vertical'
                    },
                  },
                  d5: {
                    type: 'void',
                    'x-component': 'a',
                    'x-component-props': {
                      href: '#',
                      style: {
                        color: '#1989fa'
                      },
                      children: '链接'
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
