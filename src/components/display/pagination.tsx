import { PaginationProps, Pagination as NPagination } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const Pagination = (props: Partial<PaginationProps>) => {
  const { prev, next, ...rest } = props;
  const curPrev = useAdditionalNode('prev', prev);
  const curNext = useAdditionalNode('next', next);

  return <NPagination {...rest} prev={curPrev} next={curNext} />;
};
