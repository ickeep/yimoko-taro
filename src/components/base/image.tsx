import { ImageProps, Image as NImage } from '@nutui/nutui-react-taro';
import React from 'react';

export const Image = (props: Partial<ImageProps & { value?: string }>) => {
  const { value, src, ...rest } = props;

  return <NImage src={src || value} {...rest} />;
};
