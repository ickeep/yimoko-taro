import { observer, useFieldSchema } from '@formily/react';
import { PopoverProps as NPopoverProps, Popover as NPopover } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, Trigger, TriggerProps } from '@yimoko/store';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from '../../hooks/use-router';

export type PopoverProps = Omit<Partial<NPopoverProps>, 'value' | 'onChange' | 'options'> & React.RefAttributes<unknown> & {
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
  // 数据
} & Omit<IOptionsAPIProps<'key' | 'name' | 'icon' | 'danger' | 'disabled' | "className" | 'action'>, 'valueType'>;

export const Popover = observer((props: PopoverProps) => {
  const {
    options, api, keys, splitter,
    title, trigger,
    children, visible, onClose, onSelect, ...rest
  } = props;

  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const schema = useFieldSchema();
  const navigate = useNavigate();
  const { title: sTitle } = schema ?? {};
  const curTitle = title ?? sTitle;

  useEffect(() => {
    visible !== undefined && setCurVisible(visible);
  }, [visible]);

  const trig = useCallback(() => {
    if (visible === undefined) {
      setCurVisible(!curVisible);
    }
  }, [curVisible, visible]);

  const close: PopoverProps['onClose'] = () => {
    if (visible === undefined) {
      setCurVisible(false);
    }
    onClose?.();
  };

  const select: NPopoverProps['onSelect'] = (item: any, index) => {
    onSelect?.(item, index);
    const url = item?.url as string | number;
    url && navigate(url);
    if (visible === undefined) {
      setCurVisible(false);
    }
  };

  const triggerEl = useMemo(() => {
    return (
      <Trigger
        {...trigger}
        onTrig={(...args) => {
          trig();
          trigger?.onTrig?.(...args);
        }}
      >
        {children}
      </Trigger >
    );
  }, [curTitle, trigger, children, trig]);

  return (
    <>
      {triggerEl}
      <NPopover
        {...rest}
        title={curTitle}
        visible={curVisible}
        list={data}
        onClose={close}
        onSelect={select}
      />
    </>
  );
});

