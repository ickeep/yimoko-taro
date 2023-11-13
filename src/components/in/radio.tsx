import { ISchema, RecursionField, useFieldSchema } from '@formily/react';
import { Radio as NRadio, RadioProps as NRadioProps, RadioGroup as NRadioGroup, RadioGroupProps as NRadioGroupProps } from '@nutui/nutui-react-taro';
import { TriggerProps, Trigger, IOptionsAPIProps, useAPIOptions } from '@yimoko/store';
import { isObject } from 'lodash-es';
import { ReactNode, isValidElement, useMemo } from 'react';

export type RadioProps = NRadioProps & {
  value?: NRadioProps['value'],
  onChange?: (val: boolean) => void,
};

export type RadioGroupProps = NRadioGroupProps & IOptionsAPIProps & {
  labelTrigger?: TriggerProps;
  children?: ReactNode | ISchema;
};

export const Radio = (props: RadioProps) => {
  const { value, checked, onChange, ...rest } = props;
  return <NRadio {...rest} checked={checked} />;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const { value, onChange, labelTrigger, children, options, api, keys, splitter, valueType, ...rest } = props;
  const schema = useFieldSchema();
  const { name } = schema ?? {};
  const change = (val: string | number) => {
    onChange?.(val);
  };
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const curChildren = useMemo(() => {
    if (isValidElement(children)) {
      return children;
    }
    if (isObject(children)) {
      return <RecursionField schema={children as ISchema} name={name} />;
    }
    if (isObject(labelTrigger) && Array.isArray(data)) {
      return data.map((item, index) => <NRadio key={index} {...item}><Trigger text={item.label} {...labelTrigger} /></NRadio>);
    }
    return children;
  }, [children, labelTrigger, name, data]);

  return <NRadioGroup {...rest} value={value} options={isObject(labelTrigger) ? undefined : data} onChange={change}>{curChildren}</NRadioGroup>;
};
