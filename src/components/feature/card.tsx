import { CardProps, Card as NCard } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const Card = (props: Partial<CardProps>) => {
  const { description, priceTag, tag, extra, ...rest } = props;
  const curDescription = useAdditionalNode('description', description);
  const curPriceTag = useAdditionalNode('priceTag', priceTag);
  const curTag = useAdditionalNode('tag', tag);
  const curExtra = useAdditionalNode('extra', extra);

  return <NCard {...rest} description={curDescription} priceTag={curPriceTag} tag={curTag} extra={curExtra} />;
};
