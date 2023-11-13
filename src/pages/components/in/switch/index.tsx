import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell } from '@/library';

const ExtraCell = ({ extra, children, title }) => (
    <Cell title={title} description={children} extra={extra} />
);
function Index() {
  const store = useStore({
    defaultValues: {
      values: '关闭是0',
    },
  });
  return (
    <>
      <StorePage
        store={store}
        components={{ ExtraCell }}
        schema={{
          type: 'object',
          properties: {
            base: {
              type: 'boolean',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '非受控',
              },
              'x-component-props': {
                defaultChecked: true,
                // defaultChecked: true,
              },
            },
            controlled: {
              type: 'boolean',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '受控',
              },
              'x-component-props': {
                value: true,
              },
            },
            disabled: {
              type: 'boolean',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '禁用',
              },
              'x-component-props': {
                disabled: true,
              },
            },
            style: {
              type: 'boolean',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '自定义颜色',
              },
              'x-component-props': {
                style: { '--nutui-switch-open-background-color': 'blue' },
              },
            },
            // 自定义文字
            text: {
              type: 'boolean',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '自定义文字',
              },
              'x-component-props': {
                activeText: '开',
                inactiveText: '关',
              },
            },
            // 自定义值
            values: {
              type: 'boolean',
              'x-component': 'Switch',
              'x-decorator': 'ExtraCell',
              'x-decorator-props': {
                title: '自定义值',
                extra: '{{curStore.values.values}}',
              },
              'x-component-props': {
                values: ['关闭是0', '打开是1'],
              },
            },
          },
        }}
      />
    </>
  );
}

export default observer(Index);

