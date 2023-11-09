import { NumberKeyboard as NNumberKeyboard, NumberKeyboardProps as NNumberKeyboardProps } from '@nutui/nutui-react-taro'
import { ReactNode, useState } from 'react'

import { useTrigger, UseTriggerProps } from '../../hooks/use-trigger'

export type NumberKeyboardProps = NNumberKeyboardProps & {
  // TODO 子组件 如有作为触发器
  children?: ReactNode,
  // 触发器
  trigger?: UseTriggerProps['trigger'],
  trigEvent?: UseTriggerProps['trigEvent'],
  triggerTitle?: UseTriggerProps['triggerTitle'],
  placeholder?: string,
  value?: string,
}
export const NumberKeyboard = (props: NumberKeyboardProps) => {
  const { value, placeholder = '请输入', title, trigger, trigEvent = 'onClick', triggerTitle, children, ...rest } = props
  const [curVisible, setCurVisible] = useState(false)
  const trig = () => {
    if (rest.visible === undefined) {
      setCurVisible(!curVisible)
    }
  }
  const valText = value
  const curTrigger = useTrigger({
    trigger, children, placeholder, valText, triggerTitle, trigEvent, onTrig: trig,
  })
  return <>
    {curTrigger}
    <NNumberKeyboard {...props} />
  </>
}
