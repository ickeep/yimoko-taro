/* eslint-disable complexity */
import { observer, useFieldSchema } from '@formily/react';
import { PickerProps as NPickerProps, Picker as NPicker } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, strToArr, useAPIOptions, Trigger, TriggerProps, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

// 将 onChange 改为 onOptionChange，onChange 时机为 onConfirm
export type PickerProps = Omit<Partial<NPickerProps>, 'value' | 'onChange'> & React.RefAttributes<unknown> & {
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
  // 数据
  childrenKey?: string,
  value?: string | any[]
  placeholder?: string,
  onChange?: (value: string | any[], selectedOptions?: any[]) => void,
  onOptionChange?: NPickerProps['onChange'],
} & IOptionsAPIProps;

export const Picker = observer((props: PickerProps) => {
  const {
    value, valueType, placeholder = '请选择',
    options, api, keys, splitter, childrenKey = 'children',
    title, trigger,
    children, visible, onClose, onChange, onOptionChange, onConfirm, ...rest
  } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey) as any[];
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const schema = useFieldSchema();
  const { title: sTitle } = schema ?? {};
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
    const valKey = 'value';
    const childKey = childrenKey;
    const find = (arr: any[]) => {
      for (const item of arr) {
        if (curValue.includes(item[valKey])) {
          textArr.push(item.text);
          if (item[childKey]) {
            find(item[childKey]);
          }
          break;
        }
      }
    };
    find(data);

    return textArr.join('/');
  }, [childrenKey, data, curValue]);

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

  const close: PickerProps['onClose'] = (option, val) => {
    if (visible === undefined) {
      setCurVisible(false);
    }
    onClose?.(option, val);
  };

  const change: NPickerProps['onConfirm'] = (selectedOptions, val) => {
    onConfirm?.(selectedOptions, val);
    if (valueType === 'string') {
      onChange?.(val?.join?.(splitter ?? ','), selectedOptions);
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
      />
    );
  }, [valText, placeholder, curTitle, trigger, trig]);

  return (
    <>
      {triggerEl}
      <NPicker
        {...rest}
        value={value !== undefined ? curValue : undefined}
        title={curTitle}
        visible={curVisible}
        options={data}
        onClose={close}
        onChange={onOptionChange}
        onConfirm={change}
      >
        {curChildren}
      </NPicker>
    </>
  );
});

