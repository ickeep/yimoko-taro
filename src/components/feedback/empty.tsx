import { EmptyProps, Empty as NEmpty } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing } from '@yimoko/store';
import { ReactNode } from 'react';

export const Empty = (props: Partial<EmptyProps> & { value?: ReactNode }) => {
  const { children, description, value, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return <NEmpty {...rest} description={description ?? value} >{curChildren}</NEmpty>;
};
