import { RecursionField, observer, useFieldSchema } from '@formily/react';
import { Radio as NRadio, RadioProps as NRadioProps, RadioGroup as NRadioGroup, RadioGroupProps as NRadioGroupProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';
import React, { ReactNode, useMemo } from 'react';
import { isFragment } from 'react-is';

import { ItemSchemaToProps } from '../../tools/schema';

export type RadioProps = NRadioProps & {
  value?: any,
  values?: { true: unknown, false: unknown },
  onChange?: (val: unknown) => void,
};

export type RadioGroupProps = NRadioGroupProps & Omit<IOptionsAPIProps, 'valueType'> & { children?: ReactNode };

export const Radio = (props: Partial<RadioProps>) => {
  const { value, checked, onChange, values, ...rest } = props;
  const curVal = useMemo(() => {
    if (checked !== undefined) {
      return checked;
    }
    if (values) {
      return value === values.true;
    }
    return value ?? undefined;
  }, [checked, value, values]);

  return <NRadio {...rest} checked={curVal} onChange={(val) => {
    if (values) {
      onChange?.(val ? values.true : values.false);
    } else {
      onChange?.(val);
    }
  }}
  />;
};

export const RadioGroup = observer((props: Partial<RadioGroupProps>) => {
  const { options, api, keys, splitter, children, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const schema = useFieldSchema();

  // 当 schema 使用时 会对 children 进行处理 导致 Radio 不在顶层 必须将其取出来
  // eslint-disable-next-line complexity
  const useChildren = useMemo(() => {
    let tmpChildren = children;
    if (schema && isFragment(tmpChildren)) {
      tmpChildren = tmpChildren?.props?.children;
    }
    if (Array.isArray(tmpChildren)) {
      // 过滤undefined
      tmpChildren = tmpChildren.filter(item => item) as any[];
      // 如果长度等于1，且是Fragment，那么就是schema中的children
      if (Array.from(tmpChildren).length === 1 && isFragment(tmpChildren[0])) {
        tmpChildren = tmpChildren[0]?.props?.children;
      }
    }
    if (Array.isArray(tmpChildren)) {
      return tmpChildren.map((item, index) => {
        // 判断是不是用 RecursionField 渲染 如果是则处理 Radio 的方式
        if (item.type === RecursionField) {
          const { schema: itemSchema, ...args } = item.props;
          const itemProps = ItemSchemaToProps(itemSchema, 'Radio', args);
          return (
            <Radio key={index}  {...itemProps} />
          );
        }
        return item;
      });
    }
    return tmpChildren;
  }, [children, schema]);

  return <NRadioGroup {...rest} options={data} >{useChildren}</NRadioGroup>;
});
