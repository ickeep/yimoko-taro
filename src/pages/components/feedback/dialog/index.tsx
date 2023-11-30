
import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import React from 'react';

import { Cell, Dialog, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JSX',
      v1: false,
    },
  });
  const { tab, v1 } = store.values;
  const { setValues, setValuesByField } = store;

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

          <Cell.Group title='弹出对话框'>
            <Dialog
              trigger={{
                component: Cell,
                children: '触发器调用',
              }}
              closeOnOverlayClick
            >展示内容</Dialog>
            <Dialog
              trigger={{
                component: Cell,
                children: '锁背景滚动',
              }}
              lockScroll
            >展示内容</Dialog>
            <Dialog
              value={v1}
              trigger={{
                component: Cell,
                children: '提示弹框',
                onClick: () => setValues({ v1: true }),
              }}
              onConfirm={() => setValues({ v1: false })}
              onClose={() => setValues({ v1: false })}
              confirmText='请确认'
              hideCancelButton
            >展示内容</Dialog>
            <Dialog
              trigger={{
                component: Cell,
                children: '底部按钮垂直',
              }}
              footerDirection='vertical'
            >展示内容</Dialog>
            <Dialog
              trigger={{
                component: Cell,
                children: '底部 Footer 为 Button 时，点击遮罩不关闭',
              }}
              closeOnOverlayClick={false}
            >展示内容</Dialog>
            <Dialog
              trigger={{
                component: Cell,
                children: '无底部 Footer 区域',
              }}
              footer={null}
            >展示内容</Dialog>
            <Dialog
              trigger={{
                component: Cell,
                children: '点击取消时，拦截',
              }}
              beforeCancel={() => {
                console.log('stop close');
                return false;
              }}
            >展示内容</Dialog>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              cell: {
                type: 'void',
                'x-component': 'Cell.Group',
                'x-component-props': {
                  title: '弹出对话框',
                },
                properties: {

                  d1: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '触发器调用',
                      },
                      children: '展示内容',
                    },
                  },
                  d2: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '锁背景滚动',
                      },
                      lockScroll: true,
                      children: '展示内容',
                    },
                  },
                  d3: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      value: v1,
                      trigger: {
                        component: Cell,
                        children: '提示弹框',
                        onClick: () => setValuesByField('v1', true),
                      },
                      onConfirm: () => setValuesByField('v1', false),
                      onClose: () => setValuesByField('v1', false),
                      confirmText: '请确认',
                      hideCancelButton: true,
                      children: '展示内容',
                    },
                  },
                  d4: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '底部按钮垂直',
                      },
                      footerDirection: 'vertical',
                      children: '展示内容',
                    },
                  },
                  d5: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '底部 Footer 为 Button 时，点击遮罩不关闭',
                      },
                      closeOnOverlayClick: false,
                      children: '展示内容',
                    },
                  },
                  d6: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '无底部 Footer 区域',
                      },
                      footer: null,
                      children: '展示内容',
                    },
                  },
                  d7: {
                    type: 'void',
                    'x-component': 'Dialog',
                    'x-component-props': {
                      trigger: {
                        component: Cell,
                        children: '点击取消时，拦截',
                      },
                      beforeCancel: () => {
                        console.log('stop close');
                        return false;
                      },
                      children: '展示内容',
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
