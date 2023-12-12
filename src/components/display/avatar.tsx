import { AvatarProps, Avatar as NAvatar } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const Avatar = (props: Partial<AvatarProps> & { value?: string }) => {
  const { src, value, icon, ...rest } = props;
  const curIcon = useAdditionalNode('icon', icon);

  return <NAvatar {...rest} src={src ?? value} icon={curIcon} />;
};

Avatar.Group = NAvatar.Group;
