import Taro from '@tarojs/taro';

import { To, IUseRouter } from '@yimoko/store';

import { adapter } from '../adapter/adapter';
import { getIsTabURL, useConfig } from '../store/config';

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
  const navigate = useNavigate();
  const location = {
    pathname: taroRouter.path,
    search: '',
    hash: '',
    state: {},
    key: '',
  };

  return { navigate, location, params: taroRouter.params };
};


export const useNavigate = () => {
  const config = useConfig();
  const { webViewPage = '/pages/web-view/index' } = config;
  return (to: To | number, option: { replace?: boolean; state?: any;[key: string]: any; } = {}) => {
    if (typeof to === 'number') {
      return router.back(to);
    }
    let url = '';
    if (typeof to === 'string') {
      url = to;
    } else if (typeof to === 'object') {
      url = `${to?.pathname}${to?.search}${to.hash}`;
    }
    // 如果跳转的 URL 是 http:// https:// 页面，则使用使用 web-view 页面渲染
    if (url.startsWith('http')) {
      url = `${webViewPage}?src=${encodeURIComponent(url)}`;
    }
    if (option?.replace) {
      return router.redirect(url);
    }
    return router.to(url, option?.events);
  };
};
