import { ISchema, RecursionField, useFieldSchema } from '@formily/react';
import { Radio as NRadio, RadioProps as NRadioProps, RadioGroup as NRadioGroup, RadioGroupProps as NRadioGroupProps } from '@nutui/nutui-react-taro';
import { TriggerProps, Trigger } from '@yimoko/store';
import { isObject } from 'lodash-es';
import { ReactNode, isValidElement, useMemo } from 'react';

export type RadioProps = NRadioProps & {
  value?: NRadioProps['value'],
  onChange?: (val: boolean) => void,
};

export type RadioGroupProps = NRadioGroupProps & {
  labelTrigger?: TriggerProps;
  children?: ReactNode | ISchema;
};

export const Radio = (props: RadioProps) => {
  const { value, checked, onChange, ...rest } = props;
  return <NRadio {...rest} checked={checked} />;
}


export const RadioGroup = (props: RadioGroupProps) => {
  const { value, onChange, labelTrigger, children, options, ...rest } = props;
  const schema = useFieldSchema();
  const { name } = schema ?? {};
  const change = (val: string | number) => {
    onChange?.(val);
  };
  // eslint-disable-next-line complexity
  const curChildren = useMemo(() => {
    if (isValidElement(children)) {
      return children;
    }
    if (isObject(children)) {
      return <RecursionField schema={children as ISchema} name={name} />;
    }
    if (isObject(labelTrigger) && Array.isArray(options)) {
      return options.map((item, index) => <NRadio key={index} {...item}><Trigger text={item.label} {...labelTrigger} /></NRadio>);
    }
    return children;
  }, [children, labelTrigger, name, options]);

  return <NRadioGroup {...rest} value={value} options={isObject(labelTrigger) ? undefined : options} onChange={change}>{curChildren}</NRadioGroup>;
}
