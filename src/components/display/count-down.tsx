import { CountDown as NCountDown, CountDownProps as NCountDownProps } from '@nutui/nutui-react-taro';
import React from 'react';

export type CountDownProps = NCountDownProps & {};

// TODO 是否自定义一个组件，可以支持多个DateType
// type DateType = number | string | Date | dayjs.Dayjs;
export const CountDown = (props: Partial<CountDownProps>) => {
  const { ...rest } = props;
  return <NCountDown {...rest} />;
};
