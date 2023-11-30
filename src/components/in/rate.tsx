import { ISchema, RecursionField, useFieldSchema } from '@formily/react';
import { Rate as NRate, RateProps as NRateProps } from '@nutui/nutui-react-taro';
import { isObject } from 'lodash-es';
import React, { ReactNode, useMemo } from 'react';

export type RateProps = NRateProps & {
  checkedIcon?: ISchema | ReactNode,
};

export const Rate = (props: RateProps) => {
  const { checkedIcon, uncheckedIcon, ...rest } = props;
  const { name } = useFieldSchema() ?? {};
  const curCheckedIcon = useMemo(() => {
    if (isObject(checkedIcon)) {
      // @ts-expect-error
      return <RecursionField schema={checkedIcon as Schema} name={name} />;
    }
    return checkedIcon;
  }, [checkedIcon, name]);
  return <NRate {...rest} checkedIcon={curCheckedIcon} />;
};
