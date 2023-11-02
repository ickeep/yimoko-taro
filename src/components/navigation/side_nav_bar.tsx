import { RecursionField, useFieldSchema } from '@formily/react';
import { SideNavBarProps as NSideNavBarProps, SideNavBar as NSideNavBar, SubSideNavBar as NSubSideNavBar, SideNavBarItem as NSideNavBarItem } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { ITriggerRender, Trigger, TriggerProps, useNavigate } from '@/library';

export const SubSideNavBar = NSubSideNavBar;

export const SideNavBarItem = NSideNavBarItem;

export type SideNavBarProps = NSideNavBarProps & {
  // 值
  value?: boolean,
  onChange?: (value: boolean, e?: any) => void,
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: ITriggerRender,
  trigEvent?: TriggerProps['trigEvent'],
  // 数据
  options?: IOptionsAPIProps['options'],
  childrenKey?: string,
} & Omit<IOptionsAPIProps, 'valueType'>;

export const SideNavBar = (props: SideNavBarProps) => {
  const { options, api, keys, splitter, children, value, childrenKey = 'children', visible, trigger, trigEvent = 'onClick', onChange, onClose, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey);
  const curChildren = useChildrenNullishCoalescing(children);
  const navigate = useNavigate();
  const schema = useFieldSchema();
  const { additionalProperties, name, title } = schema ?? {};
  const curValue = visible ?? value;

  const [curVisible, setCurVisible] = useState(curValue ?? false);

  useEffect(() => {
    if (curValue !== undefined) {
      setCurVisible(curValue);
    }
  }, [curValue]);

  const curTrigger = useMemo(() => {
    if ((trigger === undefined || trigger === null) && !judgeIsEmpty(additionalProperties)) {
      return <RecursionField name={name} onlyRenderProperties schema={{ type: 'void', properties: { trigger: additionalProperties } }} />;
    }
    return trigger;
  }, [additionalProperties, trigger, name]);

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

  const trig = (e: any) => {
    if (curValue === undefined) {
      setCurVisible(!curVisible);
    } else {
      onChange?.(!curValue, e);
    }
  };

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
      <Trigger render={curTrigger} trigEvent={trigEvent} onTrig={trig} >{title}</Trigger>
      <NSideNavBar {...rest} visible={curVisible} onClose={close} >
        {renderData(data)}
        {curChildren}
      </NSideNavBar>
    </>
  );
};

