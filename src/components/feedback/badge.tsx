import { BadgeProps, Badge as NBadge } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing } from '@yimoko/store';

export const Badge = (props: Partial<BadgeProps>) => {
  const { children, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return <NBadge {...rest} >{curChildren}</NBadge>;
};
