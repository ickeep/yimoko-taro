import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { ActionSheet, Cell, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
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
            <ActionSheet
              trigger={{
                component: Cell,
                children: '基础用法',
              }}
              options={options1}
            >
              基础用法
            </ActionSheet>
            <ActionSheet
              trigger={{
                component: Cell,
                children: '显示取消按钮',
              }}
              options={options1}
              cancelText='取消'
            >
              取消按钮
            </ActionSheet>
            <ActionSheet
              trigger={{
                component: Cell,
                children: '显示描述信息',
              }}
              options={options2}
              title='标题'
              description='描述信息'
            >
              标题和描述信息
            </ActionSheet>
          </Cell.Group>
          <Cell.Group title='选项状态'>
            <ActionSheet
              trigger={{
                component: Cell,
                children: '选项状态',
              }}
              options={options3}
            >
              选项状态
            </ActionSheet>
          </Cell.Group>
          <Cell.Group title='自定义内容'>
            <ActionSheet
              trigger={{
                component: Cell,
                children: '自定义内容',
              }}
            >
              <div style={{ textAlign: 'left', padding: '10px 20px' }}>
                新建表格
              </div>
              <div style={{ textAlign: 'left', padding: '10px 20px' }}>
                新建文档
              </div>
            </ActionSheet>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              g1: {
                title: '基础用法',
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '基础用法',
                },
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'ActionSheet',
                    enum: options1,
                    'x-component-props': {
                      trigger: {
                        component: 'Cell',
                        children: '基础用法',
                      },
                    },
                  },
                  v2: {
                    type: 'void',
                    'x-component': 'ActionSheet',
                    'x-component-props': {
                      trigger: {
                        component: 'Cell',
                        children: '显示取消按钮',
                      },
                      options: options1,
                      cancelText: '取消',
                    },
                  },
                  v3: {
                    type: 'void',
                    'x-component': 'ActionSheet',
                    'x-component-props': {
                      trigger: {
                        component: 'Cell',
                        children: '显示描述信息',
                      },
                      title: '标题',
                      description: '描述信息',
                    },
                    enum: options2,
                  },
                },
              },
              g2: {
                title: '选项状态',
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '选项状态',
                },
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'ActionSheet',
                    enum: options3,
                    'x-component-props': {
                      trigger: {
                        component: 'Cell',
                        children: '选项状态',
                      },
                    },
                  },
                },
              },
              g3: {
                title: '自定义内容',
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '自定义内容',
                },
                properties: {
                  v1: {
                    type: 'void',
                    'x-component': 'ActionSheet',
                    'x-component-props': {
                      trigger: {
                        component: 'Cell',
                        children: '自定义内容',
                      },
                    },
                    properties: {
                      v1: {
                        type: 'void',
                        'x-component': 'div',
                        'x-component-props': {
                          style: {
                            textAlign: 'left',
                            padding: '10px 20px',
                          },
                          children: '新建表格',
                        },
                      },
                      v2: {
                        type: 'void',
                        'x-component': 'div',
                        'x-component-props': {
                          style: {
                            textAlign: 'left',
                            padding: '10px 20px',
                          },
                          children: '新建文档',
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

const options1 = [
  {
    name: '权限设置',
  },
  {
    name: '重命名',
  },
  {
    name: '删除',
  },
];
const options2 = [
  {
    name: '权限设置',
  },
  {
    name: '重命名',
  },
  {
    name: '删除',
    description: '删除后无法恢复',
  },
];
const options3 = [
  {
    name: '着色选项',
    danger: true,
  },
  {
    name: '禁用选项',
    disabled: true,
  },
];
