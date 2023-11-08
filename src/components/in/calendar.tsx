import { Text } from '@tarojs/components'

import { RecursionField, useFieldSchema, IRecursionFieldProps } from '@formily/react'
import { Calendar as NCalendar, CalendarProps as NCalendarProps } from '@nutui/nutui-react-taro'
import { judgeIsEmpty } from '@yimoko/store'
import { ReactNode, useCallback, useMemo, useState } from 'react'

import { ITriggerRender, Trigger, TriggerProps } from '@/library'


export type CalendarProps = NCalendarProps & {
  // TODO 子组件 如有作为触发器
  children?: ReactNode,
  // 触发器
  trigger?: ITriggerRender,
  trigEvent?: TriggerProps['trigEvent'],
  placeholder?: string,
  value?: string | string[],
  onChange?: (value: string | string[]) => void,
  renderDayBottom?: NCalendarProps['renderDayBottom'] | IRecursionFieldProps['schema']
}
export const Calendar = (props: CalendarProps) => {
  const {
    value, placeholder = '请选择', title, trigger, trigEvent = 'onClick',
    children, visible, onClose, onConfirm, onChange, ...rest
  } = props
  const schema = useFieldSchema()
  const { name, title: sTitle, properties } = schema ?? {}
  const curTitle = title ?? sTitle
  const [curVisible, setCurVisible] = useState(visible ?? false)
  const trig = useCallback(() => {
    if (visible === undefined) {
      setCurVisible(!curVisible)
    }
  }, [curVisible, visible])
  // eslint-disable-next-line complexity
  const valText = useMemo(() => {
    if (rest.type === 'range') {
      return Array.isArray(value) ? value.join('-') : value
    }
    if (rest.type === 'single' || !rest.type) {
      return value as string
    }
    if (rest.type === 'multiple') {
      return Array.isArray(value) ? value.join('-') : value
    }
    if (rest.type === 'week') {
      return Array.isArray(value) ? value.join('-') : value
    }
    return ''
  }, [rest.type, value])
  // eslint-disable-next-line complexity
  const curTrigger = useMemo(() => {
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
                onTrig: trig,
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
    return <Trigger render={tempTrigger ?? Text} trigEvent={trigEvent} onTrig={trig} text={text} />
  }, [children, curTitle, name, placeholder, properties, schema, trig, trigEvent, trigger, valText])
  // eslint-disable-next-line complexity
  const change = ((param: unknown) => {
    onConfirm?.(param as unknown as string)
    if (!Array.isArray(param)) {
      return
    }
    if (!rest.type || rest.type === 'single') {
      onChange?.(param[3])
      return
    }
    if (rest.type === 'range') {
      onChange?.([...[param[0][3], param[1][3]]])
      return
    }
    if (rest.type === 'multiple') {
      onChange?.(param.map(item => item[3]))
      return
    }
    if (rest.type === 'week') {
      onChange?.([...[param[0][3], param[1][3]]])
      return
    }
    onChange?.(param)
  })
  const close = () => {
    if (visible === undefined) {
      setCurVisible(false)
    }
    onClose?.()
  }
  const renderDayBottom = useMemo(() => {
    if (!rest?.renderDayBottom) {
      return
    }
    if (typeof rest.renderDayBottom === 'function') {
      return rest.renderDayBottom
    }
    if (typeof rest.renderDayBottom === 'object') {
      return () => <RecursionField name={name} schema={rest?.renderDayBottom as IRecursionFieldProps['schema']} />
    }
  }, [name, rest.renderDayBottom])
  return (
    <>
      <>{curTrigger}</>
      <NCalendar
        {...rest}
        renderDayBottom={renderDayBottom}
        defaultValue={value ?? rest.defaultValue}
        visible={curVisible}
        onConfirm={change}
        onClose={close}
      />
    </>
  )
}

export type SingleCalendarProps = Omit<CalendarProps, 'type'>
export const SingleCalendar = (props: SingleCalendarProps) => (
  <Calendar {...props} type='single' />
)

export type RangeCalendarProps = Omit<CalendarProps, 'type' | 'value'> & {
  value?: string[],
}
export const RangeCalendar = (props: RangeCalendarProps) => {
  const { value = [], ...rest } = props
  const curValue = Array.isArray(value) ? value : []
  return (
    <Calendar
      {...rest}
      type='range'
      value={curValue}
    />
  )
}

// 选择多个日期
export type MultipleCalendarProps = Omit<CalendarProps, 'type' | 'value'> & {
  value?: string[],
}

export const MultipleCalendar = (props: MultipleCalendarProps) => {
  const { value = [], ...rest } = props
  const curValue = Array.isArray(value) ? value : []
  return (
    <Calendar
      {...rest}
      type='multiple'
      value={curValue}
    />
  )
}


// 周选择
export type WeekCalendarProps = Omit<CalendarProps, 'type' | 'value'> & {
  value?: string[],
}

export const WeekCalendar = (props: WeekCalendarProps) => {
  const { value = [], ...rest } = props
  const curValue = Array.isArray(value) ? value : []
  return (
    <Calendar
      {...rest}
      type='week'
      value={curValue}
    />
  )
}
