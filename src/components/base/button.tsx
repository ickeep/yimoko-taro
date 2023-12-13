import { Button as NButton, ButtonProps as NButtonProps } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React, { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, Omit<Partial<NButtonProps>, 'ref'> & React.RefAttributes<HTMLButtonElement>>((props, ref) => {
  const { icon, ...rest } = props;
  const curIcon = useAdditionalNode('icon', icon);

  return <NButton {...rest} icon={curIcon} ref={ref} />;
});
