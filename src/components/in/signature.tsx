import { Button, Signature as NSignature, SignatureProps as NSignatureProps, Space } from '@nutui/nutui-react-taro';
import { Trigger, TriggerProps } from '@yimoko/store';
import { useMemo, useRef } from 'react';

export type SignatureProps = Partial<NSignatureProps> & {
  confrimTrigger?: TriggerProps,
  clearTrigger?: TriggerProps,
  sameLine?: boolean,
  onChange?: (value: string) => void,
  disabled?: boolean,
};

export type Signature = {
  confirm: () => void;
  clear: () => void;
};

// TODO 是否回填value
// 原组件性能一般，需要优化
const Signature = (props: SignatureProps) => {
  const { onConfirm, onClear, confrimTrigger, clearTrigger, sameLine = true, onChange, disabled, ...rest } = props;
  const signatureRef = useRef<Signature>(null);
  const confirm = (dataurl: string) => {
    onConfirm?.(dataurl);
    onChange?.(dataurl);
  };
  const clear = () => {
    onClear?.();
  };
  const confirmBtn = useMemo(() => <Button type='primary'>确认</Button>, []);
  const trigConfirm = useMemo(() => <Trigger text={confirmBtn} {...confrimTrigger} onTrig={() => {
    signatureRef.current?.confirm();
  }}
  />, [confirmBtn, confrimTrigger]);
  const clearBtn = useMemo(() => <Button type='default'>重置</Button>, []);
  const trigClear = useMemo(() => <Trigger text={clearBtn} {...clearTrigger} onTrig={() => {
    signatureRef.current?.clear();
  }}
  />, [clearBtn, clearTrigger]);
  return <>
    <div style={{
      marginBottom: 8,
    }}
    >
        <NSignature canvasId={`canvasId${Date.now()}`}{...rest} onConfirm={confirm} onClear={clear} ref={signatureRef} />
    </div>
    <Space direction={sameLine ? 'horizontal' : 'vertical'}>
        {trigClear}
        {trigConfirm}
    </Space>
  </>;
};

export { Signature };
