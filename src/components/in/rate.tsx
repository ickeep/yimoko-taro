import { Rate as NRate, RateProps as NRateProps } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const Rate = (props: Partial<NRateProps>) => {
  const { checkedIcon, uncheckedIcon, ...rest } = props;
  const curCheckedIcon = useAdditionalNode('checkedIcon', checkedIcon);
  const curUncheckedIcon = useAdditionalNode('uncheckedIcon', uncheckedIcon);

  return <NRate {...rest} checkedIcon={curCheckedIcon} uncheckedIcon={curUncheckedIcon} />;
};
