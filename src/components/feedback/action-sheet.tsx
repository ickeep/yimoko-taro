import { observer, useFieldSchema } from '@formily/react';
import { ActionSheetProps as NActionSheetProps, ActionSheet as NActionSheet } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, Trigger, TriggerProps, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from '../../hooks/use-router';

export type ActionSheetProps = Omit<Partial<NActionSheetProps>, 'value' | 'onChange' | 'options'> & React.RefAttributes<unknown> & {
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
  // 数据
  value?: string
  onChange?: (value: any, option: any, index: number) => void,
} & Omit<IOptionsAPIProps<'value' | 'name' | 'description' | 'danger' | 'disabled'>, 'valueType'>;

export const ActionSheet: FC<ActionSheetProps> = observer((props) => {
  const {
    value,
    options, api, keys, splitter,
    title, trigger,
    children, visible, onClose, onSelect, onChange, onCancel, ...rest
  } = props;

  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const schema = useFieldSchema();
  const navigate = useNavigate();
  const { title: sTitle } = schema ?? {};
  const curChildren = useChildrenNullishCoalescing(children);

  const curTitle = title ?? sTitle;

  const valText = useMemo(() => {
    if (typeof value !== 'undefined') {
      const item = data?.find((opt: any) => opt[keys?.value ?? 'value'] === value);
      return item?.[keys?.label ?? 'name'];
    }
    return undefined;
  }, [value, data, keys]);

  useEffect(() => {
    visible !== undefined && setCurVisible(visible);
  }, [visible]);

  const trig = useCallback(() => {
    if (visible === undefined) {
      setCurVisible(!curVisible);
    }
  }, [curVisible, visible]);

  const close: ActionSheetProps['onClose'] = () => {
    if (visible === undefined) {
      setCurVisible(false);
    }
    onClose?.();
  };

  const select: NActionSheetProps['onSelect'] = (item, index) => {
    onSelect?.(item, index);
    const url = item.url as string | number;
    url && navigate(url);

    if (onChange) {
      const val = item[props.keys?.value ?? 'value'];
      onChange(val, item, index);
    }
    if (visible === undefined) {
      setCurVisible(false);
    }
  };

  const cancel: ActionSheetProps['onCancel'] = () => {
    if (visible === undefined) {
      setCurVisible(false);
    }
    onCancel?.();
  };

  const triggerEl = useMemo(() => {
    const text = judgeIsEmpty(valText) ? curTitle : valText;

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
  }, [valText, curTitle, trigger, curChildren, trig]);

  return (
    <>
      {triggerEl}
      <NActionSheet
        {...rest}
        title={curTitle}
        visible={curVisible}
        options={data}
        onClose={close}
        onSelect={select}
        onCancel={cancel}
      />
    </>
  );
});

