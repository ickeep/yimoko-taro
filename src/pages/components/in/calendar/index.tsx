import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';


function Index() {
  const store = useStore({});

  return (
    <>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            single: {
              type: 'string',
              title: '选择单个日期',
              'x-component': 'SingleCalendar',
              'x-component-props': {
                trigger: {
                  component: 'Cell',
                  title: '选择单个日期',
                },
              },
            },
            range: {
              type: 'array',
              title: '选择日期范围',
              'x-component': 'RangeCalendar',
              'x-component-props': {
                trigger: {
                  component: 'Cell',
                  title: '选择日期范围',
                },
              },
            },
            multiple: {
              type: 'string',
              title: '选择多个日期',
              'x-component': 'MultipleCalendar',
              'x-component-props': {
                trigger: {
                  component: 'Cell',
                  title: '选择多个日期',
                },
              },
            },
            week: {
              type: 'string',
              title: '选择周',
              'x-component': 'WeekCalendar',
              'x-component-props': {
                trigger: {
                  component: 'Cell',
                  title: '选择周',
                },
              },
            },
            renderDayBottom: {
              type: 'string',
              title: '自定义日期底部内容',
              'x-component': 'SingleCalendar',
              'x-component-props': {
                placeholder: '自定义日期底部内容',
                renderDayBottom: {
                  type: 'void',
                  'x-component': 'span',
                  'x-component-props': {
                    trigger: {
                      component: 'Cell',
                      title: '自定义日期底部内容',
                    },
                    style: {
                      fontSize: '12px',
                      lineHeight: '14px',
                    },
                    className: 'info',
                  },
                },
              },
            },
            noPopup: {
              type: 'string',
              title: '平铺模式',
              'x-component': 'SingleCalendar',
              'x-decorator': 'div',
              'x-component-props': {
                popup: false,
              },
            },
          },
        }}
      />
    </>
  );
}

export default observer(Index);
