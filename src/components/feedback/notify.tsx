import { NotifyProps, Notify as NNotify } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing } from '@yimoko/store';
import React from 'react';

export const Notify = (props: Partial<NotifyProps> & { value?: boolean }) => {
  const { children, visible, value, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return <NNotify {...rest} visible={visible ?? value} >{curChildren}</NNotify>;
};
