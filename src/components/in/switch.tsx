import { Switch as NSwitch, SwitchProps as NSwitchProps } from '@nutui/nutui-react-taro';
import React, { useMemo } from 'react';

export type SwitchProps = NSwitchProps & {
  value?: NSwitchProps['checked'],
  onChange?: (val: any) => void,
  values?: { true: unknown, false: unknown },
};

export const Switch = (props: Partial<SwitchProps>) => {
  const { value, onChange, checked, values, ...rest } = props;

  const curValue = useMemo(() => {
    if (checked !== undefined) {
      return checked;
    }
    if (values) {
      return value === values.true;
    }
    return value ?? undefined;
  }, [checked, value, values]);

  const change = (val: boolean) => {
    if (values) {
      onChange?.(val ? values.true : values.false);
    } else {
      onChange?.(val);
    }
  };

  return <NSwitch {...rest} checked={curValue} onChange={change} />;
};
