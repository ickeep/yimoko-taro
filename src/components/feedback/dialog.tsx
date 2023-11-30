import { useFieldSchema } from '@formily/react';
import { DialogProps as NDialogProps, Dialog as NDialog } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing, Trigger, TriggerProps } from '@yimoko/store';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

export type DialogProps = NDialogProps & {
  // 值
  value?: boolean,
  onChange?: (value: boolean, e?: any) => void,
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
};

export const Dialog = (props: Partial<DialogProps>) => {
  const { children, value, visible, trigger, onChange, onClose, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);
  const schema = useFieldSchema();
  const { title } = schema ?? {};
  const curValue = visible ?? value;

  const [curVisible, setCurVisible] = useState(curValue ?? false);

  useEffect(() => {
    if (curValue !== undefined) {
      setCurVisible(curValue);
    }
  }, [curValue]);

  const trig = useCallback((...args: any) => {
    if (curValue === undefined) {
      setCurVisible(!curVisible);
    } else {
      onChange?.(!curValue, ...args);
    }
  }, [curValue, curVisible, onChange]);

  const triggerEl = useMemo(() => (
    <Trigger
      text={title}
      {...trigger}
      onTrig={(...args) => {
        trig(...args);
        trigger?.onTrig?.(...args);
      }}
    />
  ), [title, trigger, trig]);


  const close = () => {
    onClose?.();
    if (curValue === undefined) {
      setCurVisible(false);
    } else {
      onChange?.(false);
    }
  };

  return (
    <>
      {triggerEl}
      <NDialog {...rest} visible={curVisible} onClose={close} >
        {curChildren}
      </NDialog>
    </>
  );
};

