import { TextProps, Text } from '@tarojs/components';

import React, { ReactNode } from 'react';

import { useNavigate } from '../../hooks/use-router';

export interface LinkProps extends TextProps {
  type?: 'to' | 'redirect' | 'back';
  to?: string;
  value?: ReactNode
}

export const Link = (props: LinkProps) => {
  const { type = 'to', to, onClick, value, children, ...rest } = props;
  const navigate = useNavigate();

  return (
    <Text
      {...rest}
      onClick={(e) => {
        if (!to) {
          return;
        }
        if (type === 'to') {
          navigate(to);
        } else if (type === 'redirect') {
          navigate(to, { replace: true });
        } else if (type === 'back') {
          navigate(-1);
        }
        onClick?.(e);
      }}
    >{children ?? value}</Text>
  );
};
