import { Text } from '@tarojs/components';

import { RecursionField, useFieldSchema } from '@formily/react';
import { PickerProps as NPickerProps, Picker as NPicker } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, strToArr, useAPIOptions } from '@yimoko/store';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { ITriggerRender, Trigger, TriggerProps } from '../base/trigger';

// 将 onChange 改为 onOptionChange，onChange 时机为 onConfirm
export type PickerProps = Omit<Partial<NPickerProps>, 'value' | 'onChange'> & React.RefAttributes<unknown> & {
  // TODO 子组件 如有作为触发器
  children?: ReactNode,
  // 触发器
  trigger?: ITriggerRender,
  trigEvent?: TriggerProps['trigEvent'],
  // 数据
  childrenKey?: string,
  value?: string | any[]
  placeholder?: string,
  onChange?: (value: string | any[], selectedOptions?: any[]) => void,
  onOptionChange?: NPickerProps['onChange'],
} & IOptionsAPIProps;

export const Picker = (props: PickerProps) => {
  const {
    value, valueType, placeholder = '请选择',
    options, api, keys, splitter, childrenKey = 'children',
    title, trigger, trigEvent = 'onClick',
    children, visible, onClose, onChange, onOptionChange, onConfirm, ...rest
  } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey) as any[];
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const { name, title: sTitle, additionalProperties } = useFieldSchema();

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

  // eslint-disable-next-line complexity
  const curTrigger = useMemo(() => {
    const text = judgeIsEmpty(valText) ? (placeholder ?? curTitle) : valText;
    if ((trigger === undefined || trigger === null) && !judgeIsEmpty(additionalProperties)) {
      const { 'x-decorator': decorator, 'x-decorator-props': decoratorProps, ...args } = additionalProperties;
      return (
        <RecursionField name={name} onlyRenderProperties schema={{
          type: 'void', properties: {
            trigger: {
              ...args,
              // 触发器必须挂载在 decorator 上，否则无法给 children 传递 onTrig
              'x-decorator': 'Trigger',
              'x-decorator-props': {
                ...decoratorProps,
                onTrig: trig,
                children: text,
              },
            },
          },
        }}
        />
      );
    }

    return <Trigger render={trigger ?? Text} trigEvent={trigEvent} onTrig={trig} text={text} />;
  }, [valText, placeholder, curTitle, trigger, additionalProperties, trigEvent, trig, name]);

  return (
    <>
      {curTrigger}
      <NPicker
        {...rest}
        title={curTitle}
        value={curValue}
        visible={curVisible}
        options={data}
        onClose={close}
        onChange={onOptionChange}
        onConfirm={change}
      />
    </>
  );
};

