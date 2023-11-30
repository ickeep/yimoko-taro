import { Animate as NAnimate, AnimateProps as NAnimateProps } from '@nutui/nutui-react-taro';
import { Trigger, TriggerProps } from '@yimoko/store';
import { isObject } from 'lodash-es';
import React, { useMemo } from 'react';

export type AnimateProps = NAnimateProps & {
  children?: TriggerProps,
};

export const Animate = (props: AnimateProps) => {
  const { children, ...rest } = props;
  const curChild = useMemo(() => {
    if (!isObject(children)) {
      return children;
    }
    // @ts-expect-error
    return <Trigger {...children} />;
  }, [children]);
  return <NAnimate {...rest}>
    {curChild}
  </NAnimate>;
};
