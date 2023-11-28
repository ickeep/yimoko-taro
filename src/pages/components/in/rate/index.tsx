import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

function Index() {
  const store = useStore({});

  return (
        <>
        <StorePage
          store={store}
          components={{
            HeartFill: () => <div>HeartFill</div>,
          }}
          schema={{
            type: 'object',
            properties: {
              textArea: {
                type: 'number',
                title: '基础使用',
                'x-component': 'Rate',
                'x-component-props': {
                  placeholder: '基础使用',
                  defaultValue: 3,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '基础使用',
                },
              },
              allowHalf: {
                type: 'number',
                title: '允许半星',
                'x-component': 'Rate',
                'x-component-props': {
                  allowHalf: true,
                  defaultValue: 3.5,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '允许半星',
                },
              },
              checkedIcon: {
                type: 'number',
                title: '选中图标',
                'x-component': 'Rate',
                'x-component-props': {
                  // checkedIcon: 'favorfill',
                  checkedIcon: {
                    type: 'void',
                    'x-component': 'HeartFill',
                    'x-component-props': {

                    },
                  },
                  defaultValue: 3,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '选中图标',
                },
              },
              // 自定义数量
              count: {
                type: 'number',
                title: '自定义数量',
                'x-component': 'Rate',
                'x-component-props': {
                  count: 10,
                  defaultValue: 3,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '自定义数量',
                },
              },
              min: {
                type: 'number',
                title: '最小值',
                'x-component': 'Rate',
                'x-component-props': {
                  min: 2,
                  defaultValue: 3,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '最小值',
                },
              },
              disabled: {
                type: 'number',
                title: '禁用',
                'x-component': 'Rate',
                'x-component-props': {
                  disabled: true,
                  defaultValue: 3,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '禁用',
                },
              },
              readOnly: {
                type: 'number',
                title: '只读',
                'x-component': 'Rate',
                'x-component-props': {
                  readOnly: true,
                  defaultValue: 3,
                },
                'x-decorator': 'FormItem',
                'x-decorator-props': {
                  title: '只读',
                },
              },
            },
          }}
        />
        </>
  );
}

export default observer(Index);
