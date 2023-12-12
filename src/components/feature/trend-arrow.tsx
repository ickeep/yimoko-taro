import { TrendArrowProps, TrendArrow as NTrendArrow } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const TrendArrow = (props: Partial<TrendArrowProps>) => {
  const { riseIcon, dropIcon, ...rest } = props;
  const curRiseIcon = useAdditionalNode('riseIcon', riseIcon);
  const curDropIcon = useAdditionalNode('dropIcon', dropIcon);

  return <NTrendArrow {...rest} riseIcon={curRiseIcon} dropIcon={curDropIcon} />;
};
