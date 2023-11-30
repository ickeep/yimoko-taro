import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

const CellWidthH2 = ({ title, children }) => (
    <div>
      <h2 style={{
        color: '#909ca4',
        padding: '0 10px',
        fontSize: '14px',
        fontWeight: 'normal',
        marginTop: '20px',
      }}
      >{title}</h2>
      {children}
    </div>
);
function Index() {
  const store = useStore({
    defaultValues: {
      base: '搜索',
      shape: 'round',
      left: '搜索',
      clearable: 'clearable',
      readOnly: 'readOnly',
      disabled: 'disabled',
    },
  });

  return (
        <>
        <StorePage
          store={store}
          components={{
            CellWidthH2,
          }}
          schema={{
            type: 'object',
            properties: {
              base: {
                type: 'string',
                title: '基础使用',
                'x-component': 'SearchBar',
                'x-component-props': {
                },
                'x-decorator': 'CellWidthH2',
                'x-decorator-props': {
                  title: '基础使用',
                },
              },
              shape: {
                type: 'string',
                title: '搜索栏形状和最大长度',
                'x-component': 'SearchBar',
                'x-component-props': {
                  shape: 'round',
                  maxLength: 10,
                },
                'x-decorator': 'CellWidthH2',
                'x-decorator-props': {
                  title: '形状',
                },
              },
              left: {
                type: 'string',
                title: '左侧内容',
                'x-component': 'SearchBar',
                'x-component-props': {
                  left: {
                    // select
                    type: 'void',
                    'x-component': 'Rate',
                    'x-component-props': {
                      count: 1,
                    },

                  },
                },
                'x-decorator': 'CellWidthH2',
                'x-decorator-props': {
                  title: '左侧内容',
                },
              },
              clearable: {
                type: 'string',
                title: '清除按钮',
                'x-component': 'SearchBar',
                'x-component-props': {
                  clearable: true,
                },
                'x-decorator': 'CellWidthH2',
                'x-decorator-props': {
                  title: '清除按钮',
                },
              },
              readOnly: {
                type: 'string',
                title: '只读',
                'x-component': 'SearchBar',
                'x-component-props': {
                  readOnly: true,
                },
                'x-decorator': 'CellWidthH2',
                'x-decorator-props': {
                  title: '只读',
                },
              },
              disabled: {
                type: 'string',
                title: '禁用',
                'x-component': 'SearchBar',
                'x-component-props': {
                  disabled: true,
                },
                'x-decorator': 'CellWidthH2',
                'x-decorator-props': {
                  title: '禁用',
                },
              },
            },
          }}
        />
        </>
  );
}

export default observer(Index);
