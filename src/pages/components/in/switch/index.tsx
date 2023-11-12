import { observer } from '@formily/react';
import { StorePage } from '@yimoko/store';

function Index() {
  return (
    <>
      <StorePage
        store={{  }}
        schema={{
          type: 'object',
          properties: {
            base: {
              type: 'void',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '非受控',
              },
              'x-component-props': {
                checked: true,
                // defaultChecked: true,
              },
            },
            controlled: {
              type: 'void',
              'x-component': 'Switch',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '受控',
              },
              'x-component-props': {
                checked: true,
              },
            },
            disabled: {
              type: 'void',
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
              type: 'void',
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
              type: 'void',
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
          },
        }}
      />
    </>
  );
}

export default observer(Index);

