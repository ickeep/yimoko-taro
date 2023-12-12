import { useFieldSchema } from '@formily/react';
import { ToastProps as NToastProps, Toast as NToast } from '@nutui/nutui-react-taro';
import { Trigger, TriggerProps } from '@yimoko/store';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

export type ToastProps = NToastProps & {
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
};

export const Toast = (props: Partial<ToastProps>) => {
  const { children, visible, trigger, onClose, ...rest } = props;
  const schema = useFieldSchema();
  const { title } = schema ?? {};

  const [curVisible, setCurVisible] = useState(visible ?? false);

  useEffect(() => {
    if (visible !== undefined) {
      setCurVisible(visible);
    }
  }, [visible]);

  const trig = useCallback(() => {
    if (visible === undefined) {
      setCurVisible(!curVisible);
    }
  }, [visible, curVisible]);

  const triggerEl = useMemo(() => (
    <Trigger
      text={title}
      {...trigger}
      onTrig={(...args) => {
        trig();
        trigger?.onTrig?.(...args);
      }}
    >{children}</Trigger>
  ), [title, trigger, children, trig]);


  const close = () => {
    onClose?.();
    if (visible === undefined) {
      setCurVisible(false);
    }
  };

  return (
    <>
      {triggerEl}
      <NToast {...rest} visible={curVisible} onClose={close} />
    </>
  );
};

