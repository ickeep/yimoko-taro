import { Text } from '@tarojs/components';

import { RecursionField, useFieldSchema } from '@formily/react';
import { CascaderProps as NCascaderProps, Cascader as NCascader } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, strToArr, useAPIOptions, ITriggerRender, Trigger, TriggerProps } from '@yimoko/store';
import { useCallback, useEffect, useMemo, useState } from 'react';

export type CascaderProps = Omit<NCascaderProps, 'value' | 'onChange'> & {
  // 触发器
  trigger?: ITriggerRender,
  trigEvent?: TriggerProps['trigEvent'],
  // 数据
  childrenKey?: string,
  value?: string | any[]
  placeholder?: string,
  onChange?: (value: string | any[], selectedOptions?: any[]) => void,
} & IOptionsAPIProps;

export const Cascader = (props: CascaderProps) => {
  const {
    value, valueType, placeholder = '请选择',
    options, api, keys, splitter, childrenKey = 'children',
    title, trigger, trigEvent = 'onClick',
    visible, onClose, onChange, ...rest
  } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey);
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const { name, title: sTitle, additionalProperties } = useFieldSchema() ?? {};

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
    const childKey = rest.optionKey?.childrenKey ?? childrenKey;
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
    console.log(trigger, 'trigger')
    // TODO 默认 trigger 考虑是使用 Text 还是 Cell
    return <Trigger render={trigger ?? Text} trigEvent={trigEvent} onTrig={trig} text={text} />;
  }, [valText, placeholder, curTitle, trigger, additionalProperties, trigEvent, trig, name]);

  return (
    <>
      {curTrigger}
      <NCascader  {...rest} title={curTitle} value={curValue} visible={curVisible} options={data} onClose={close} onChange={change} />
    </>
  );
};

