import { Text } from '@tarojs/components'

import { RecursionField, useFieldSchema } from '@formily/react'
import { judgeIsEmpty } from '@yimoko/store/src/library'
import { ReactNode, useMemo } from 'react'

import { ITriggerRender, Trigger, TriggerProps } from '@/library'


export type UseTriggerProps = {
  trigger?: ITriggerRender,
  trigEvent?: TriggerProps['trigEvent'],
  children?: ReactNode,
  placeholder?: string,
  valText?: string,
  triggerTitle?: string,
  onTrig?: () => void,
}
export const useTrigger = (props: UseTriggerProps) => {
  const { trigger, children, placeholder, valText, triggerTitle, trigEvent = 'onClick', onTrig } = props
  const schema = useFieldSchema()
  const { name, title: sTitle, properties } = schema ?? {}
  const curTitle = triggerTitle ?? sTitle
  // eslint-disable-next-line complexity
  return useMemo(() => {
    const text = judgeIsEmpty(valText) ? (placeholder ?? curTitle) : valText
    const tempTrigger = trigger ?? children
    if ((tempTrigger === undefined || tempTrigger === null) && !judgeIsEmpty(properties)) {
      return schema?.reduceProperties?.((arr: any[], cur) => {
        arr.push(<RecursionField name={name} onlyRenderProperties schema={{
          type: 'void',
          properties: {
            [`${cur.name}`]: {
              ...cur,
              'x-decorator': 'Trigger',
              'x-decorator-props': {
                ...cur['x-decorator-props'],
                onTrig,
                trigEvent,
                // TODO text 无法更新
                text,
              },
            },
          },
        }}
        />)
        return arr
      }, [])
    }
    return <Trigger render={tempTrigger ?? Text} trigEvent={trigEvent} onTrig={onTrig} text={text} />
  }, [children, curTitle, name, onTrig, placeholder, properties, schema, trigEvent, trigger, valText])
}
