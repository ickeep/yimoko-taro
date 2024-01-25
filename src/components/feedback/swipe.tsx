import { SwipeProps, Swipe as NSwipe } from '@nutui/nutui-react-taro';
import { SwipeInstance } from '@nutui/nutui-react-taro/dist/types/packages/swipe/swipe.taro';
import { useAdditionalNode } from '@yimoko/store';
import React, { Ref } from 'react';

export const Swipe = React.forwardRef((props: Partial<SwipeProps>, ref: Ref<SwipeInstance>) => {
  const { leftAction, rightAction, ...rest } = props;
  const curLeftAction = useAdditionalNode('leftAction', leftAction);
  const curRightAction = useAdditionalNode('rightAction', rightAction);

  return <NSwipe {...rest} leftAction={curLeftAction} rightAction={curRightAction} ref={ref} />;
});
