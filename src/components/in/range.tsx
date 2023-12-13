import { Range as NRange, RangeProps as NRangeProps } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export type RangeProps = NRangeProps & {};
// 原组件性能一般，需要优化
export const Range = (props: Partial<RangeProps>) => {
  const { maxDescription, minDescription, button, ...rest } = props;
  const curMaxDescription = useAdditionalNode('maxDescription', maxDescription);
  const curMinDescription = useAdditionalNode('minDescription', minDescription);
  const curButton = useAdditionalNode('button', button);

  return (
    <NRange
      maxDescription={curMaxDescription}
      minDescription={curMinDescription}
      button={curButton}
      {...rest}
    />);
};
