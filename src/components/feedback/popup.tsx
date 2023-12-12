import { useFieldSchema } from '@formily/react';
import { PopupProps as NPopupProps, Popup as NPopup } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing, Trigger, TriggerProps, useAdditionalNode } from '@yimoko/store';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

export type PopupProps = NPopupProps & {
  // 值
  value?: boolean,
  onChange?: (value: boolean, e?: any) => void,
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
};

export const Popup = (props: Partial<PopupProps>) => {
  const { children, value, visible, trigger, onChange, onClose, closeIcon, left, title, description, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);
  const schema = useFieldSchema();
  const curValue = visible ?? value;

  const [curVisible, setCurVisible] = useState(curValue ?? false);
  const curCloseIcon = useAdditionalNode('closeIcon', closeIcon);
  const curLeft = useAdditionalNode('left', left);
  const curTitle = useAdditionalNode('title', title ?? schema?.title);
  const curDescription = useAdditionalNode('description', description);

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
      <NPopup
        {...rest}
        visible={curVisible}
        onClose={close}
        closeIcon={curCloseIcon}
        left={curLeft}
        title={curTitle}
        description={curDescription}
      >
        {curChildren}
      </NPopup>
    </>
  );
};

