import { RecursionField, useFieldSchema } from '@formily/react';
import { SideNavBarProps as NSideNavBarProps, SideNavBar as NSideNavBar, SubSideNavBar as NSubSideNavBar, SideNavBarItem as NSideNavBarItem } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions, useChildrenNullishCoalescing } from '@yimoko/store';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

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

  const trig = useCallback((e: any) => {
    if (curValue === undefined) {
      setCurVisible(!curVisible);
    } else {
      onChange?.(!curValue, e);
    }
  }, [curValue, curVisible, onChange]);

  const curTrigger = useMemo(() => {
    if ((trigger === undefined || trigger === null) && !judgeIsEmpty(additionalProperties)) {
      const { 'x-decorator': decorator, 'x-decorator-props': decoratorProps, ...args } = additionalProperties;
      return <RecursionField name={name} onlyRenderProperties schema={{
        type: 'void', properties: {
          trigger: {
            ...args,
            // 触发器必须挂载在 decorator 上，否则无法给 children 传递 onTrig
            'x-decorator': 'Trigger',
            'x-decorator-props': {
              ...decoratorProps,
              onTrig: trig,
              children: title,
            },
          },
        },
      }}
      />;
    }

    return <Trigger render={curTrigger} trigEvent={trigEvent} onTrig={trig} text={title} />;
  }, [trigger, additionalProperties, trigEvent, trig, title, name]);

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
      {curTrigger}
      <NSideNavBar {...rest} visible={curVisible} onClose={close} >
        {renderData(data)}
        {curChildren}
      </NSideNavBar>
    </>
  );
};

