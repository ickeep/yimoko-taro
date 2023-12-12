
import { observer, useFieldSchema } from '@formily/react';
import { CascaderProps as NCascaderProps, Cascader as NCascader } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, strToArr, useAPIOptions, Trigger, TriggerProps, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

export type CascaderProps = Omit<Partial<NCascaderProps>, 'value' | 'onChange'> & {
  // 触发器
  trigger?: TriggerProps,
  children?: ReactNode,
  // 数据
  childrenKey?: string,
  value?: string | any[]
  placeholder?: string,
  onChange?: (value: string | any[], selectedOptions?: any[]) => void,
} & IOptionsAPIProps;

export const Cascader: FC<CascaderProps> = observer((props) => {
  const {
    value, valueType, placeholder = '请选择',
    options, api, keys, splitter, childrenKey = 'children',
    title, trigger, children,
    visible, onClose, onChange, ...rest
  } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey);
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const { title: sTitle } = useFieldSchema() ?? {};
  const curChildren = useChildrenNullishCoalescing(children);

  const curTitle = title ?? sTitle;

  const curValue = useMemo(() => {
    if (Array.isArray(value)) {
      return value;
    }
    return strToArr(value, splitter);
  }, [value, splitter]);

  const valText = useMemo(() => {
    const textArr: string[] = [];
    const valKey = rest.optionKey?.valueKey ?? 'value';
    const textKey = rest.optionKey?.textKey ?? 'text';
    const childKey = rest.optionKey?.childrenKey ?? childrenKey;
    const find = (arr: any[]) => {
      for (const item of arr) {
        if (curValue.includes(item[valKey])) {
          textArr.push(item[textKey]);
          if (item[childKey]) {
            find(item[childKey]);
          }
          break;
        }
      }
    };
    find(data);
    return textArr.join('/');
  }, [rest.optionKey, childrenKey, data, curValue]);

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

  const close: CascaderProps['onClose'] = () => {
    if (visible === undefined) {
      setCurVisible(false);
    }
    onClose?.();
  };

  const change: NCascaderProps['onChange'] = (val, selectedOptions) => {
    if (valueType === 'string') {
      onChange?.(val?.join?.(splitter ?? ','));
    } else {
      onChange?.(val, selectedOptions);
    }
  };

  const triggerEl = useMemo(() => {
    const text = judgeIsEmpty(valText) ? (placeholder ?? curTitle) : valText;
    return (
      <Trigger
        text={text}
        {...trigger}
        onTrig={(...args) => {
          trig();
          trigger?.onTrig?.(...args);
        }}
      >
        {curChildren}
      </Trigger >
    );
  }, [valText, placeholder, curTitle, trigger, curChildren, trig]);

  return (
    <>
      {triggerEl}
      <NCascader  {...rest} title={curTitle} value={curValue} visible={curVisible} options={data} onClose={close} onChange={change} />
    </>
  );
});

