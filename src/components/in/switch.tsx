import { Switch as NSwitch, SwitchProps as NSwitchProps } from '@nutui/nutui-react-taro';
import { useMemo } from 'react';

import { isRecord } from '@/library';

export type SwitchProps = NSwitchProps & {
  value?: NSwitchProps['checked'],
  onChange?: (val: any) => void,
  values?: [unknown, unknown] | { true: unknown, false: unknown },
};

export const Switch = (props: SwitchProps) => {
  const { value, onChange, checked, values = [false, true], ...rest } = props;
  const curValue = useMemo(() => {
    if (checked !== undefined) {
      return checked;
    }
    if (Array.isArray(values)) {
      return value === values[1];
    }
    if (isRecord(values)) {
      return value === values.true;
    }
    return value ?? undefined;
  }, [checked, value, values]);
  const change = (val: boolean) => {
    if (Array.isArray(values)) {
      onChange?.(val ? values[1] : values[0]);
    } else if (isRecord(values)) {
      onChange?.(val ? values.true : values.false);
    } else {
      onChange?.(val);
    }
  };
  return <NSwitch {...rest} checked={curValue} onChange={change} />;
};
