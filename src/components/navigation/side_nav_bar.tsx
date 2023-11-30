import { useFieldSchema } from '@formily/react';
import {
  SideNavBarProps as NSideNavBarProps,
  SideNavBar as NSideNavBar,
  SubSideNavBar as NSubSideNavBar,
  SideNavBarItem as NSideNavBarItem,
} from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useChildrenNullishCoalescing, Trigger, TriggerProps } from '@yimoko/store';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from '../../hooks/use-router';

export const SubSideNavBar = NSubSideNavBar;

export const SideNavBarItem = NSideNavBarItem;

export type SideNavBarProps = Partial<NSideNavBarProps> & {
  // 值
  value?: boolean,
  onChange?: (value: boolean, e?: any) => void,
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: TriggerProps,
  // 数据
  childrenKey?: string,
} & Omit<IOptionsAPIProps, 'valueType'>;

export const SideNavBar = (props: Partial<SideNavBarProps>) => {
  const { options, api, keys, splitter, children, value, childrenKey = 'children', visible, trigger, onChange, onClose, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey);
  const curChildren = useChildrenNullishCoalescing(children);
  const navigate = useNavigate();
  const schema = useFieldSchema();
  const { title } = schema ?? {};
  const curValue = visible ?? value;

  const [curVisible, setCurVisible] = useState(curValue ?? false);

  useEffect(() => {
    if (curValue !== undefined) {
      setCurVisible(curValue);
    }
  }, [curValue]);

  const trig = useCallback((...args: any) => {
    if (curValue === undefined) {
      setCurVisible(!curVisible);
    } else {
      onChange?.(!curValue, ...args);
    }
  }, [curValue, curVisible, onChange]);

  const triggerEl = useMemo(() => (
    <Trigger
      text={title}
      {...trigger}
      onTrig={(...args) => {
        trig(...args);
        trigger?.onTrig?.(...args);
      }}
    />
  ), [title, trigger, trig]);

  const renderData = (arr: any[]) => arr.map((item, i) => {
    if (item.children?.length) {
      return (
        <SubSideNavBar key={i} value={item?.value} title={item?.title} open={item?.open} onClick={() => item?.url && navigate(item.url)} >
          {renderData(item.children)}
        </SubSideNavBar>
      );
    }
    return <NSideNavBarItem key={i} value={item?.value} title={item?.title} onClick={() => item?.url && navigate(item.url)} />;
  });

  const close = () => {
    onClose?.();
    if (curValue === undefined) {
      setCurVisible(false);
    } else {
      onChange?.(false);
    }
  };

  return (
    <>
      {triggerEl}
      <NSideNavBar {...rest} visible={curVisible} onClose={close} >
        {renderData(data)}
        {curChildren}
      </NSideNavBar>
    </>
  );
};

