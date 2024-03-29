import { ShortPassword as NShortPassword, ShortPasswordProps as NShortPasswordProps } from '@nutui/nutui-react-taro';
import React from 'react';

export type ShortPasswordProps = Partial<NShortPasswordProps> & {};

// TODO nutui的短密码组件只是一个弹窗，要自己实现键盘
export const ShortPassword = (props: ShortPasswordProps) => {
  const { ...rest } = props;
  return <NShortPassword {...rest} />;
};
