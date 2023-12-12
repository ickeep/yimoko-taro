import { SwipeProps, Swipe as NSwipe } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const Swipe = (props: Partial<SwipeProps>) => {
  const { leftAction, rightAction, ...rest } = props;
  const curLeftAction = useAdditionalNode('leftAction', leftAction);
  const curRightAction = useAdditionalNode('rightAction', rightAction);

  return <NSwipe {...rest} leftAction={curLeftAction} rightAction={curRightAction} />;
};
