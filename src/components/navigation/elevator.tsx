import { ElevatorProps, Elevator as NElevator } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';

// 渲染数据支持 value 和 options 两种方式 优先级 value > options
// Elevator 多为展示数据，不引入 ArrayBase 组件
// TODO useAPIOptions 未能迭代处理数据，点击操作的处理低代码化需要再进一步探索
export const Elevator = (props: ElevatorProps & Omit<IOptionsAPIProps, 'valueType'> & { value?: any[] }) => {
  const { options, api, keys, splitter, value, list, ...rest } = props;
  const [data] = useAPIOptions(options, api, { ...keys }, splitter);

  return (
    <NElevator list={list ?? value ?? data}  {...rest} />
  );
};

