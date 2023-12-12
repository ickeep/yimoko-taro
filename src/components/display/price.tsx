import { PriceProps, Price as NPrice } from '@nutui/nutui-react-taro';
import React from 'react';

export const Price = (props: Partial<PriceProps> & { value?: PriceProps['price'] }) => {
  const { price, value, ...rest } = props;

  return <NPrice {...rest} price={price ?? value} />;
};
