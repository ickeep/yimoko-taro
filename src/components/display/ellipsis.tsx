import { Ellipsis as NEllipsis, EllipsisProps as NEllipsisProps } from '@nutui/nutui-react-taro';
import React from 'react';

export type EllipsisProps = NEllipsisProps & {};

export const Ellipsis = (props: EllipsisProps) => {
  const { ...rest } = props;
  return <NEllipsis {...rest} />;
};
