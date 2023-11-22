import { useFieldSchema } from '@formily/react';
import { OverlayProps as NOverlayProps, Overlay as NOverlay } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing, Trigger, TriggerProps } from '@yimoko/store';

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

export type OverlayProps = NOverlayProps & {
  // 值
  value?: boolean,
  onChange?: (value: boolean, e?: any) => void,
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
};

export const Overlay = (props: Partial<OverlayProps & { value?: boolean }>) => {
  const { children, value, visible, trigger, onChange, onClick, ...rest } = props;
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

  const click = () => {
    onClick?.();
    if (curValue === undefined) {
      setCurVisible(false);
    } else {
      onChange?.(false);
    }
  };

  return (
    <>
      {triggerEl}
      <NOverlay visible={curVisible} onClick={click} {...rest}>
        {curChildren}
      </NOverlay>
    </>
  );
};
