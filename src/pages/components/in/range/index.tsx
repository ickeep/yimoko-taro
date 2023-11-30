import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

function Index() {
  const store = useStore({
    defaultValues: {
      base: 50,
      double: [20, 80],
    },
  });
  return (<>
    <StorePage
      store={store}
      schema={{
        type: 'object',
        properties: {
          base: {
            type: 'number',
            title: '基础使用',
            'x-component': 'Range',
            'x-component-props': {
              placeholder: '基础使用',
            },
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              style: {
                padding: '40px 18px',
              },
            },
          },
          // 双滑块
          double: {
            type: 'array',
            title: '双滑块',
            'x-component': 'Range',
            'x-component-props': {
              range: true,
              placeholder: '双滑块',
            },
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              style: {
                padding: '40px 18px',
              },
            },
          },
          // 指定范围
          range: {
            type: 'number',
            title: '指定范围',
            'x-component': 'Range',
            'x-component-props': {
              min: 10,
              max: 90,
              placeholder: '指定范围',
            },
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              style: {
                padding: '40px 18px',
              },
            },
          },
          step: {
            type: 'number',
            title: '步长',
            'x-component': 'Range',
            'x-component-props': {
              step: 10,
              placeholder: '步长',
            },
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              style: {
                padding: '40px 18px',
              },
            },
          },
          diabled: {
            type: 'number',
            title: '禁用',
            'x-component': 'Range',
            'x-component-props': {
              disabled: true,
              placeholder: '禁用',
            },
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              style: {
                padding: '40px 18px',
              },
            },
          },
          vertical: {
            type: 'number',
            title: '垂直',
            'x-component': 'Range',
            'x-component-props': {
              vertical: true,
              placeholder: '垂直',
            },
            'x-decorator': 'Cell',
            'x-decorator-props': {
              style: {
                height: '180px',
                padding: '10px',
              },
            },
          },
        },
      }}
    />
    </>);
}

export default observer(Index);
