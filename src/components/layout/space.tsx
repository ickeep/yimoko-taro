import { useFieldSchema } from '@formily/react';
import { Space as NSpace, SpaceProps } from '@nutui/nutui-react-taro';
import { isFragment } from 'react-is';

export const Space = (props: Partial<SpaceProps>) => {
  const schema = useFieldSchema();
  const { children, ...rest } = props;
  let curChildren = children;
  if (schema && isFragment(children)) {
    curChildren = children?.props?.children;
    if (Array.isArray(curChildren)) {
      // 过滤undefined
      curChildren = curChildren.filter(item => item) as any[];
      // 如果长度等于1，且是Fragment，那么就是schema中的children
      if (Array.from(curChildren).length === 1 && isFragment(curChildren[0])) {
        curChildren = curChildren[0]?.props?.children;
      }
    }
  }

  return <NSpace {...rest}>{curChildren}</NSpace>;
};
