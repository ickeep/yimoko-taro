import { Switch as NSwitch, SwitchProps as NSwitchProps } from '@nutui/nutui-react-taro';
import { judgeIsEmpty } from '@yimoko/store';


export type SwitchProps = NSwitchProps & {
  value?: NSwitchProps['checked'],
  onChange?: (val: boolean) => void,
}

export const Switch = (props: SwitchProps) => {
  const { value, onChange, checked, ...rest } = props;
  const curValue = value ?? checked;
  const isControll = judgeIsEmpty(curValue);
  const change = (val: boolean) => {
    if (isControll) {
      onChange?.(val)
    }
  };
  return <NSwitch {...rest} checked={curValue} onChange={change} />;
};
