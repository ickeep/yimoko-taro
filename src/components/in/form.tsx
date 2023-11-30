
import { Form as CForm, FormProps } from '@tarojs/components';

import { Field } from '@formily/core';
import { observer, useExpressionScope, useField } from '@formily/react';
import { Cell, CellProps } from '@nutui/nutui-react-taro';
import { IStore, useCurForm } from '@yimoko/store';
import React from 'react';

import './form.scss';


// 使用 nutui 表单后增加了 30+KB 左右
// 且 Form.Item 会对子节点进行拦截，会修改 value 并 onChange 触发不到
// 终上所述，不使用 nutui 表单
export const Form = observer((props: FormProps) => {
  const { children, onSubmit, ...rest } = props;
  const form = useCurForm();
  const scope = useExpressionScope();
  const curStore = scope?.curStore as IStore | undefined;
  return (
    <CForm {...rest} onSubmit={(e) => {
      e?.preventDefault();
      e?.stopPropagation();
      onSubmit?.(e);
      form?.submit(() => curStore?.runAPI());
    }}
    >
      <Cell.Group>{children}</Cell.Group>
    </CForm>
  );
});

// eslint-disable-next-line complexity
export const FormItem = observer((props: Partial<Omit<CellProps, 'extra'>> & { required?: boolean, label?: string }) => {
  const { className = '', label, required, children, description, title, ...rest } = props;
  const field = (useField() ?? {}) as Field;
  const errMsg = field.errors?.[0]?.messages?.[0];
  const curRequired = required ?? field?.required;
  const curLabel = label ?? title ?? field.title;

  return (
    <Cell className={`nut-form-item ${className}`} {...rest} >
      {curLabel && (
        <div className='nut-cell__title nut-form-item__label'>
          {curRequired && (<i className='required' />)}
          {curLabel}
        </div>
      )}
      <div className='nut-cell__value nut-form-item__body'>
        <div className='nut-form-item__body__slots'>{children}</div>
        <div className='nut-form-item__body__tips' >{errMsg}</div>
      </div>
    </Cell>
  );
});

