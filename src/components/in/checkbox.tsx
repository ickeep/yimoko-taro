import { observer } from '@formily/react';
import { CheckboxProps as NCheckboxProps, Checkbox as NCheckbox, CheckboxGroupProps as NCheckboxGroupProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, strToArr, useAPIOptions } from '@yimoko/store';
import React, { useMemo } from 'react';

export interface CheckboxProps extends Omit<NCheckboxProps, 'onChange' | 'value'> {
  onChange?: (value: any,) => void
  values?: { true: any, false: any }
  value?: any
}

export const Checkbox = (props: CheckboxProps) => {
  const { value, values, onChange, checked, ...rest } = props;

  const curValue = useMemo(() => {
    if (checked !== undefined) {
      return checked;
    }
    if (value !== undefined) {
      if (values) {
        return value === values.true;
      }
      return value;
    }
    return undefined;
  }, [checked, value, values]);

  return (
    <NCheckbox
      {...rest}
      checked={curValue}
      onChange={(val) => {
        if (values) {
          onChange?.(val ? values.true : values.false);
        } else {
          onChange?.(val);
        }
      }}
    />
  );
};

export type CheckboxGroupProps = Omit<NCheckboxGroupProps, 'onChange' | 'value'> & IOptionsAPIProps & {
  onChange?: (value?: string | string[]) => void
  value?: string | string[]
};

const CheckboxGroup = observer((props: CheckboxGroupProps) => {
  const { options, api, keys, splitter = ',', valueType, value, onChange, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];

  const curValue = useMemo(() => {
    if (Array.isArray(value)) {
      return value;
    }
    return strToArr(value, splitter);
  }, [value, splitter]);

  return (
    <NCheckbox.Group
      {...rest}
      value={curValue}
      options={data}
      onChange={(val) => {
        if (valueType === 'string') {
          onChange?.(val.join(splitter));
        } else {
          onChange?.(val);
        }
      }}
    />);
});

Checkbox.Group = CheckboxGroup;
