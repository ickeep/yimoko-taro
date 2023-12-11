import { EmptyProps, Empty as NEmpty } from '@nutui/nutui-react-taro';
import { useAdditionalNode, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { ReactNode } from 'react';

export const Empty = (props: Partial<EmptyProps> & { value?: ReactNode }) => {
  const { children, description, value, image, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);
  const curImage = useAdditionalNode('image', image);
  const curDescription = useAdditionalNode('description', description);

  return <NEmpty {...rest} description={curDescription ?? value} image={curImage} >{curChildren}</NEmpty>;
};
