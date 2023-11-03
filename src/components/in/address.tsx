import { RecursionField, useFieldSchema } from '@formily/react';
import { AddressProps as NAddressProps, Address as NAddress } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, judgeIsEmpty, useAPIOptions } from '@yimoko/store';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { ITriggerRender, Trigger, TriggerProps } from '../base/trigger';

export type AddressProps = NAddressProps & {
  // 子组件
  children?: ReactNode,
  // 触发器
  trigger?: ITriggerRender,
  trigEvent?: TriggerProps['trigEvent'],
  // 数据
  childrenKey?: string,
} & Omit<IOptionsAPIProps, 'valueType'>;

// TODO: 未完成
export const Address = (props: AddressProps) => {
  const { options, api, keys, splitter, childrenKey = 'children', trigger, trigEvent = 'onClick', children, visible, onClose, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter, childrenKey);
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const { name, title, additionalProperties } = useFieldSchema();
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

  const close: AddressProps['onClose'] = () => {
    if (visible !== undefined) {
      setCurVisible(false);
    }
    onClose?.();
  };

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

    return <Trigger render={trigger} trigEvent={trigEvent} onTrig={trig} text={title} />;
  }, [trigger, additionalProperties, trigEvent, trig, title, name]);

  return (
    <>
      {curTrigger}
      <NAddress  {...rest} visible={curVisible} options={data} onClose={close} />
    </>
  );
};

