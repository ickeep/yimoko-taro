import { ConfigStore } from '@yimoko/store';

import { httpRequest } from '../adapter/http';

const tabURL: string[] = [];
const themeVars: Record<any, any> = {};
const tabBars: Array<Omit<Taro.setTabBarItem.Option, 'complete' | 'fail' | 'success'>> = [];
const tabBarStyle: Omit<Taro.setTabBarStyle.Option, 'complete' | 'fail' | 'success'> = {};
// 因小程序包大小限制，将所有静态资源放至 CDN 上
export const defaultConfig = {
  static: { img: '', icon: '' },
  apiHost: '',
  uploadAPI: '',
  indexPage: '',
  pageCachePrefix: '',
  tabURL,
  themeVars,
  tabBars,
  tabBarStyle,
};

export type IConfig = typeof defaultConfig;


export const configStore: ConfigStore<typeof defaultConfig> = new ConfigStore(defaultConfig, {
  notifier: () => '',
  apiExecutor: httpRequest,
  useRouter: () => { }
  components: {},
});
export const { logger } = configStore;

export const getIsTabURL = (path: string) => configStore.config.tabURL.includes(path);
