import { NoticeBarProps, NoticeBar as NNoticeBar } from '@nutui/nutui-react-taro';
import { useAdditionalNode, useChildrenNullishCoalescing } from '@yimoko/store';
import React from 'react';

export const NoticeBar = (props: Partial<NoticeBarProps> & { value?: string }) => {
  const { children, content, value, leftIcon, rightIcon, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);
  const curLeftIcon = useAdditionalNode('leftIcon', leftIcon);
  const curRightIcon = useAdditionalNode('rightIcon', rightIcon);

  return <NNoticeBar {...rest} content={content ?? value} leftIcon={curLeftIcon} rightIcon={curRightIcon} >{curChildren}</NNoticeBar>;
};
