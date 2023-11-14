import { useFieldSchema } from '@formily/react';
import { NumberKeyboard as NNumberKeyboard, NumberKeyboardProps as NNumberKeyboardProps } from '@nutui/nutui-react-taro';
import { TriggerProps, Trigger, judgeIsEmpty } from '@yimoko/store';
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
};

// TODO 日历,短密码，签名，上传组件先不处理
export const NumberKeyboard = (props: NumberKeyboardProps) => {
  const { value, trigger, memory = true, length, visible, placeholder, ...rest } = props;
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
  const triggerEl = useMemo(() => {
    const text = judgeIsEmpty(value) ? (placeholder ?? title) : value;
    return <Trigger
      text={text}
      {...trigger}
      onTrig={(...args) => {
        trig();
        trigger?.onTrig?.(...args);
      }}
    />;
  }, [value, placeholder, title, trigger, trig]);
  const change = (param: string) => {
    if (memory) {
      // 追加模式
      const curVal = value || '';
      let newVal = curVal + param;
      if (length && newVal.length > length) {
        newVal = newVal.slice(0, length);
      }
      console.log(newVal);
      props.onChange?.(newVal);
    } else {
      props.onChange?.(param);
    }
  };
  const close = () => {
    setCurVisible(false);
  };
  const del = () => {
    if (memory) {
      const curVal = value || '';
      const newVal = curVal.slice(0, curVal.length - 1);
      props.onChange?.(newVal);
    } else {
      props.onChange?.('');
    }
  };
  const confirm = () => {
    trig();
  };
  return <>
    {triggerEl}
    <NNumberKeyboard {...rest} visible={curVisible} onChange={change} onClose={close} onDelete={del} onConfirm={confirm} />
  </>;
};
