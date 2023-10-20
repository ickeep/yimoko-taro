import Taro from '@tarojs/taro';

import { adapter } from './adapter';

export function showToast(options: Omit<Taro.showToast.Option, 'complete' | 'fail' | 'success'>) {
  return adapter<TaroGeneral.CallbackResult>(Taro.showToast, options);
}

export function hideToast() {
  return adapter<TaroGeneral.CallbackResult>(Taro.hideToast);
}
