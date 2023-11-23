import { ShortPassword as NShortPassword, ShortPasswordProps as NShortPasswordProps } from '@nutui/nutui-react-taro';

export type ShortPasswordProps = NShortPasswordProps & {};

// TODO nutui的短密码组件只是一个弹窗，要自己实现键盘
export const ShortPassword = (props: ShortPasswordProps) => {
  const { ...rest } = props;
  return <NShortPassword {...rest} />;
};
