import { CircleProgress as NCircleProgress, CircleProgressProps as NCircleProgressProps } from '@nutui/nutui-react-taro';
import React from 'react';


export type CircleProgressProps = NCircleProgressProps & {
  value?: NCircleProgressProps['percent'],
};

export const CircleProgress = (props: CircleProgressProps) => {
  const { value, percent, ...rest } = props;
  return <NCircleProgress {...rest} percent={value ?? percent} />;
};
