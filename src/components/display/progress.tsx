import { ProgressProps, Progress as NProgress } from '@nutui/nutui-react-taro';
import React from 'react';

export const Progress = (props: Partial<ProgressProps> & { value?: ProgressProps['percent'] }) => {
  const { percent, value, ...rest } = props;

  return <NProgress {...rest} percent={percent ?? value} />;
};
