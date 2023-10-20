import Taro from '@tarojs/taro';

import { To, NavigateFunction, IUseRouter } from '@yimoko/store';

import { adapter } from '../adapter/adapter';
import { getIsTabURL } from '../store/config';

export const router = {
  to: (url: string, events?: TaroGeneral.IAnyObject) => adapter<TaroGeneral.CallbackResult, Error>(
    getIsTabURL(url) ? Taro.switchTab : Taro.navigateTo,
    { url, events },
  ),
  tab: (url: string) => adapter<TaroGeneral.CallbackResult, Error>(getIsTabURL(url) ? Taro.switchTab : Taro.navigateTo, { url }),
  reLaunch: (url: string) => adapter<TaroGeneral.CallbackResult, Error>(getIsTabURL(url) ? Taro.switchTab : Taro.reLaunch, { url }),
  redirect: (url: string) => adapter<TaroGeneral.CallbackResult, Error>(getIsTabURL(url) ? Taro.switchTab : Taro.redirectTo, { url }),
  back: (delta?: number) => adapter<TaroGeneral.CallbackResult, Error>(Taro.navigateBack, { delta }),
};

// 适配 configStore.useRouter
// TODO 待完善
export const useRouter: IUseRouter = () => {
  const taroRouter = Taro.useRouter();
  const location = {
    pathname: taroRouter.path,
    search: '',
    hash: '',
    state: {},
    key: '',
  };

  return { navigate, location, params: taroRouter.params };
};

// TODO 待完善
export const navigate: NavigateFunction = (to: To | number, option: { replace?: boolean; state?: any;[key: string]: any; } = {}) => {
  let url = '';
  if (typeof to === 'string') {
    url = to;
  } else if (typeof to === 'object') {
    url = `${to?.pathname ?? ''}${to?.search ?? ''}${to.hash}`;
  }
  if (option?.replace) {
    route.redirect(url);
  } else {
    route.to(url, option?.events);
  }
};
