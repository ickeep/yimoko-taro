import { AddressProps, Address as NAddress, Cell } from '@nutui/nutui-react-taro'
import { cloneElement, ReactNode, useMemo, useRef } from 'react'

export const Address = (props: AddressProps & { children: ReactNode }) => {
  const { value, children, options, ...rest } = props
  const addressRef = useRef<any>(null)
  const newChildren = useMemo(() => {
    if (!children) {
      return <Cell title={rest.title} description={value} onClick={() => addressRef.current?.open()} />
    }
    return <div onClick={() => addressRef.current?.open()}>
      {cloneElement(children as any, { onClick: () => addressRef.current?.open() })}
    </div>
  }, [children, rest.title, value])

  const onExistSelect = (data: AddressProps['existList']['0']) => {
    const { provinceName, cityName, countyName, townName, addressDetail } = data
    if (provinceName) {
      rest?.onChange([provinceName, cityName, countyName, townName, addressDetail])
    }
  }

  return <>
    {newChildren}
    <NAddress {...rest} onClose={() => addressRef.current?.close()} defaultVisible={false} ref={addressRef} defaultValue={value}
      onExistSelect={onExistSelect}
    />
  </>
}

