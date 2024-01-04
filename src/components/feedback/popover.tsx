import { observer, useFieldSchema } from '@formily/react';
import { PopoverProps as NPopoverProps, Popover as NPopover } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import React, { FC, useEffect, useState } from 'react';

import { useNavigate } from '../../hooks/use-router';

// eslint-disable-next-line max-len
export type PopoverProps = Omit<Partial<NPopoverProps>, 'value' | 'onChange' | 'options'> & React.RefAttributes<unknown> & Omit<IOptionsAPIProps<'key' | 'name' | 'icon' | 'danger' | 'disabled' | 'className' | 'action'>, 'valueType'>;

export const Popover: FC<PopoverProps> = observer((props) => {
  const {
    options, api, keys, splitter, children,
    title, list, visible, onClose, onSelect, onClick, ...rest
  } = props;

  const [data] = useAPIOptions(list ?? options, api, keys, splitter) as any[];
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const schema = useFieldSchema();
  const navigate = useNavigate();
  const { title: sTitle } = schema ?? {};
  const curTitle = title ?? sTitle;
  const curChildren = useChildrenNullishCoalescing(children);

  useEffect(() => {
    visible !== undefined && setCurVisible(visible);
  }, [visible]);


  const close: PopoverProps['onClose'] = () => {
    if (visible === undefined) {
      setCurVisible(false);
    }
    onClose?.();
  };

  const click: PopoverProps['onClick'] = () => {
    onClick?.();
    if (visible === undefined) {
      setCurVisible(true);
    }
  };

  const select: NPopoverProps['onSelect'] = (item: any, index) => {
    onSelect?.(item, index);
    const url = item?.url as string | number;
    url && navigate(url);
    if (visible === undefined) {
      setCurVisible(false);
    }
  };

  return (
    <NPopover
      {...rest}
      title={curTitle}
      visible={curVisible}
      onClick={click}
      list={data}
      onClose={close}
      onSelect={select}
    >{curChildren}</NPopover>
  );
});

