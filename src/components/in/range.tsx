import { Range as NRange, RangeProps as NRangeProps } from '@nutui/nutui-react-taro';

export type RangeProps = NRangeProps & {};
// 原组件性能一般，需要优化
export const Range = (props: RangeProps) => <NRange {...props} />;
