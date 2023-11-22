import { ISchema, RecursionField, SchemaKey } from '@formily/react';
import { judgeIsEmpty } from '@yimoko/store';
// TODO 待迁移至 @yimoko/store
// 在很多场景组件对子组件有侵入性 必须放在顶层,需要将 schema 的配置转为子组件的 props
// eslint-disable-next-line complexity
export const ItemSchemaToProps = (schema: ISchema, name: string, RecursionProps?: Record<any, any>, schemaKey?: SchemaKey) => {
  const { 'x-component': component, 'x-component-props': componentProps, 'x-decorator': decorator, 'x-decorator-props': decoratorProps, properties } = schema ?? {};
  let itemProps: Record<any, any> = {};
  let curSchemaItem = schema;
  let onlyRenderProperties = false;
  if (component === name) {
    // TODO 待验证 是否将 void 去掉 使用 useChildrenNullishCoalescing 优化  RecursionField 组件
    curSchemaItem = { ...schema, type: 'void' };
    onlyRenderProperties = true;
    itemProps = { ...componentProps };
    if (judgeIsEmpty(properties)) {
      return itemProps;
    }
  } else if (decorator === name) {
    curSchemaItem = { ...schema, 'x-decorator': '' };
    itemProps = { ...decoratorProps };
  }

  return {
    ...itemProps,
    children: (
      <RecursionField
        {...RecursionProps}
        schema={curSchemaItem}
        onlyRenderProperties={onlyRenderProperties}
        name={schemaKey ?? RecursionProps?.name ?? schema?.name}
      />),
  };
};
