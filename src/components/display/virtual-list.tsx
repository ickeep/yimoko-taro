import { observer } from '@formily/react';
import { VirtualList as NVirtualList, VirtualListProps as NVirtualListProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';
import React, { FC } from 'react';

type IVirtualList = FC<Partial<NVirtualListProps> & Omit<IOptionsAPIProps, 'valueType'>>;

export const VirtualList: IVirtualList = observer((props) => {
  const { list, options, api, keys, splitter, ...rest } = props;
  const [data] = useAPIOptions(list ?? options, api, keys, splitter) as any[];

  return <NVirtualList {...rest} list={data} />;
});

