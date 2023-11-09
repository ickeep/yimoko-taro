import { Text } from '@tarojs/components';

import { RecursionField, useFieldSchema } from '@formily/react';
import { PickerProps as NPickerProps, Picker as NPicker } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, strToArr, useAPIOptions, ITriggerRender, Trigger, TriggerProps } from '@yimoko/store';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

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
  const schema = useFieldSchema();
  const { name, title: sTitle, properties } = schema ?? {};

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
    const tempTrigger = trigger ?? children;
    if ((tempTrigger === undefined || tempTrigger === null) && !judgeIsEmpty(properties)) {
      return schema?.reduceProperties?.((arr: any[], cur) => {
        arr.push(<RecursionField name={name} onlyRenderProperties schema={{
          type: 'void',
          properties: {
            [`${cur.name}`]: {
              ...cur,
              'x-decorator': 'Trigger',
              'x-decorator-props': {
                ...cur['x-decorator-props'],
                onTrig: trig,
                trigEvent,
                // TODO text 无法更新
                text,
              },
            },
          },
        }}
        />);
        return arr;
      }, []);
    }

    return <Trigger render={tempTrigger ?? Text} trigEvent={trigEvent} onTrig={trig} text={text} />;
  }, [valText, placeholder, curTitle, trigger, children, properties, trigEvent, trig, schema, name]);

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

