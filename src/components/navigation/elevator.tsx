import { observer } from '@formily/react';
import { ElevatorProps, Elevator as NElevator } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';

import React, { FC } from 'react';

import { useNavigate } from '../../hooks/use-router';

// 渲染数据支持 value 和 options 两种方式 优先级 value > options
// Elevator 多为展示数据，不引入 ArrayBase 组件
type IElevatorFC = FC<Partial<ElevatorProps> & Omit<IOptionsAPIProps, 'valueType'> & { value?: any[] }>;
type IElevator = IElevatorFC & { Context: typeof NElevator.Context };

export const ElevatorFC: IElevatorFC = observer((props) => {
  const { options, api, keys, splitter, value, list, onItemClick, ...rest } = props;
  const [data] = useAPIOptions(list ?? options, api, keys, splitter);
  const navigate = useNavigate();

  return (
    <NElevator
      {...rest}
      list={value ?? data}
      // 当 item 存在 url 时，点击 item 会跳转到对应的 url
      onItemClick={(key, item) => {
        onItemClick?.(key, item);
        if (item?.url) {
          navigate(item.url);
        }
      }}
    />
  );
});
export const Elevator = ElevatorFC as IElevator;
Elevator.Context = NElevator.Context;
