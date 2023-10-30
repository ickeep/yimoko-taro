import { get } from 'lodash-es';
// 小程序不支持 new Function eval, 所以需要自己实现一个
export const compiler = (expression: string, scope = {}) => {
  // 暂时只支持最简单的取值
  // 匹配 {{}} 中间的内容, 使用 get 取值
  if (!expression) {
    return undefined;
  }
  const value = get(scope, expression);
  return value;
};
