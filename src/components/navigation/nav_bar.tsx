import { NavBarProps, NavBar as NNavBar } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React, { ReactNode } from 'react';

import { useNavigate } from '../../hooks/use-router';

export const NavBar = (props: Partial<NavBarProps> & { value?: ReactNode }) => {
  const { value, children, right, left, back, onBackClick, ...rest } = props;
  const navigate = useNavigate();

  const curLeft = useAdditionalNode('left', left);

  const curRight = useAdditionalNode('right', right);

  const curBack = useAdditionalNode('back', back);

  return (
    <NNavBar
      {...rest}
      left={curLeft}
      right={curRight}
      back={curBack}
      onBackClick={(e) => {
        if (onBackClick) {
          onBackClick(e);
        } else {
          navigate(-1);
        }
      }}
    >{children ?? value}</NNavBar>
  );
};

