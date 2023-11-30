import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

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
  const store = useStore({
    defaultValues: {
      base: true,
      group: '1',
      labelTrigger: '1',
      horizontal: '1',
    },
  });

  return (
    <>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            base: {
              type: 'boolean',
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
              type: 'string',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: 'RadioGroup',
              },
              'x-component-props': {
                options,
              },
            },
            labelTrigger: {
              type: 'string',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '自定义文本',
              },
              'x-component-props': {
                options,
                labelTrigger: {
                  component: 'Switch',
                  value: true,
                },
              },
            },
            horizontal: {
              type: 'string',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '水平排列',
              },
              'x-component-props': {
                options,
                direction: 'horizontal',
              },
            },
            disabled: {
              type: 'string',
              'x-component': 'RadioGroup',
              'x-decorator': 'FormItem',
              'x-decorator-props': {
                label: '禁用',
              },
              'x-component-props': {
                options,
                disabled: true,
              },
            },
          },
        }}
      />
    </>
  );
}

export default observer(Index);
