import { SearchBar as NSearchBar, SearchBarProps } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const SearchBar = (props: Partial<SearchBarProps>) => {
  const { left, right, leftIn, rightIn, ...rest } = props;
  const curLeft = useAdditionalNode('left', left);
  const curRight = useAdditionalNode('right', right);
  const curLeftIn = useAdditionalNode('leftIn', leftIn);
  const curRightIn = useAdditionalNode('rightIn', rightIn);
  return <NSearchBar {...rest} left={curLeft} right={curRight} leftIn={curLeftIn} rightIn={curRightIn} />;
};
