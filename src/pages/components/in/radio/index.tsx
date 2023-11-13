import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

const options = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
];
function Index() {
  const store = useStore({});

  return (
    <>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            base: {
              type: 'void',
              'x-component': 'Radio',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: 'Radio',
              },
              'x-component-props': {
                checked: true,
              },
            },
            group: {
              type: 'void',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: 'RadioGroup',
              },
              'x-component-props': {
                value: '1',
                options,
              },
            },
            labelTrigger: {
              type: 'void',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '自定义文本',
              },
              'x-component-props': {
                value: '1',
                options,
                labelTrigger: {
                  component: 'Switch',
                  value: true,
                },
              },
            },
            horizontal: {
              type: 'void',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '水平排列',
              },
              'x-component-props': {
                value: '1',
                options,
                direction: 'horizontal',
              },
            },
          },
        }}
      />
    </>
  );
}

export default observer(Index);
