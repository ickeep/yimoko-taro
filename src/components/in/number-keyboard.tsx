import { useFieldSchema } from '@formily/react';
import { NumberKeyboard as NNumberKeyboard, NumberKeyboardProps as NNumberKeyboardProps } from '@nutui/nutui-react-taro';
import { TriggerProps, Trigger } from '@yimoko/store';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type NumberKeyboardProps = NNumberKeyboardProps & {
  // 触发器
  trigger?: TriggerProps,
  placeholder?: string,
  value?: string,
  // 数字长度
  length?: number,
  // 记忆模式，是否记忆上次输入的值，用来限制输入的长度，如果输入的长度超过了length的长度，会自动截取，默认开启
  memory?: boolean,
}
export const NumberKeyboard = (props: NumberKeyboardProps) => {
  const { value, trigger, memory = true, length, visible, ...rest } = props;
  const [curVisible, setCurVisible] = useState(false);
  const schema = useFieldSchema();
  const { title } = schema ?? {};
  useEffect(() => {
    if (visible !== undefined) {
      setCurVisible(visible);
    }
  }, [visible]);
  const trig = useCallback(() => {
    if (visible === undefined) {
      setCurVisible(!curVisible);
    }
  }, [curVisible, visible]);
  const triggerEl = useMemo(() => (
    <Trigger
      text={title}
      {...trigger}
      onTrig={(...args) => {
        trig();
        trigger?.onTrig?.(...args);
      }}
    />
  ), [title, trigger, trig]);
  const change = (param: string) => {
    if (memory) {
      // 追加模式
      const curVal = value || '';
      let newVal = curVal + param;
      if (length && newVal.length > length) {
        newVal = newVal.slice(0, length);
      }
      props.onChange?.(newVal);
    } else {
      props.onChange?.(param);
    }
  };
  const close = () => {
    setCurVisible(false);
  };
  return <>
    {triggerEl}
    <NNumberKeyboard {...rest} visible={curVisible} onChange={change} onClose={close} />
  </>;
};
