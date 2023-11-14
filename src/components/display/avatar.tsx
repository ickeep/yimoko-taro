import { AvatarProps, Avatar as NAvatar } from '@nutui/nutui-react-taro';

export const Avatar = (props: Partial<AvatarProps> & { value?: string }) => {
  const { src, value, ...rest } = props;

  return <NAvatar {...rest} src={src ?? value} />;
};
