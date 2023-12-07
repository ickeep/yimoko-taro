import { ISchema, RecursionField, useFieldSchema } from '@formily/react';
import { Rate as NRate, RateProps as NRateProps } from '@nutui/nutui-react-taro';
import { isObject } from 'lodash-es';
import React, { ReactNode, useMemo } from 'react';

export type RateProps = NRateProps & {
  checkedIcon?: ISchema | ReactNode,
};

export const Rate = (props: Partial<RateProps>) => {
  const { checkedIcon, uncheckedIcon, ...rest } = props;
  const { name } = useFieldSchema() ?? {};
  // const schema = useFieldSchema();
  // Schema 模式下 checkedIcon 不生效
  // const curCheckedIcon = checkedIcon ?? schema?.['x-component-props']?.checkedIcon;
  // console.log('curCheckedIcon', curCheckedIcon);
  // 不知道怎么把 curCheckedIcon 转成ReactNode
  const curCheckedIcon = useMemo(() => {
    // 这里原本的判断会导致非 Schema 模式下 checkedIcon 不生效，改了之后能生效，但不知道会不会有其他问题
    // if (schema && isObject(checkedIcon)) {
    if (isObject(checkedIcon)) {
      // @ts-expect-error
      return <RecursionField schema={checkedIcon as Schema} name={name} />;
    }
    return checkedIcon;
  }, [checkedIcon, name]);
  return <NRate {...rest} checkedIcon={curCheckedIcon} />;
};
