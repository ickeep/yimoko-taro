import { ISchema, RecursionField, useFieldSchema } from '@formily/react';
import { Skeleton as NSkeleton, SkeletonProps as NSkeletonProps } from '@nutui/nutui-react-taro';
import { useMemo } from 'react';

export type SkeletonProps = Omit<NSkeletonProps, 'children'> & {
  children?: React.ReactNode | ISchema;
}

export const Skeleton = (props: SkeletonProps) => {
  const { children, ...rest } = props;
  const schema = useFieldSchema();
  const { name } = schema ?? {};
  const curChldren  = useMemo(() => {
    if (typeof children === 'object') {
      return <RecursionField name={name} schema={children as ISchema} />;
    }
    return children;
  }, [children, name]);
  return <NSkeleton {...rest}>{curChldren}</NSkeleton>;
};
