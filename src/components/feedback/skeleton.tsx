import { Skeleton as NSkeleton, SkeletonProps } from '@nutui/nutui-react-taro';
import React from 'react';

export const Skeleton = (props: SkeletonProps & { loading: boolean }) => {
  const { visible, loading, children, animated = true, ...rest } = props;

  return (<NSkeleton animated={animated} {...rest} visible={visible ?? loading} />);
};
