import { ISchema, RecursionField, SchemaKey, useFieldSchema } from '@formily/react';
import { SearchBar as NSearchBar, SearchBarProps as NSearchBarProps } from '@nutui/nutui-react-taro';
import { isObject } from 'lodash-es';
import { ReactNode, useMemo } from 'react';

export type SearchBarProps = NSearchBarProps & {
  left?: ReactNode| ISchema,
  right?: ReactNode| ISchema,
  leftIn?: ReactNode| ISchema,
  rightIn?: ReactNode| ISchema,
};
// 判断是否是 schema ｜ ReactNode，如果是 schema 则渲染成组件， 否则直接返回
const renderSchema = (schema: ReactNode | ISchema, name?: SchemaKey) => {
  console.log('schema', schema, name);
  if (isObject(schema)) {
    // @ts-expect-error
    return <RecursionField schema={schema as Schema} name={name} />;
  }
  return schema;
};

const useRenderSchema = (schema: ReactNode | ISchema) => {
  const { name } = useFieldSchema() ?? {};
  return useMemo(() => renderSchema(schema, name), [schema, name]);
};

export const SearchBar = (props: SearchBarProps) => {
  const { left, right, leftIn, rightIn, ...rest } = props;
  const curLeft = useRenderSchema(left);
  const curRight = useRenderSchema(right);
  const curLeftIn = useRenderSchema(leftIn);
  const curRightIn = useRenderSchema(rightIn);
  console.log('curLeft', curLeft, curRight, curLeftIn, curRightIn);
  return <NSearchBar {...rest} left={curLeft} right={curRight} leftIn={curLeftIn} rightIn={curRightIn} />;
};
