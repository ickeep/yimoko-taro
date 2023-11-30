import { ConfigStore, INotifier, useConfig as useConfigOld } from '@yimoko/store';

import React from 'react';

import { httpRequest } from '../adapter/http';
import { showToast } from '../adapter/toast';
import { ErrorContent } from '../components/feedback/error-content';
import { PageLoading } from '../components/feedback/loading';
import { Skeleton } from '../components/feedback/skeleton';
import { useRouter } from '../hooks/use-router';

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
  webViewPage: '',
  pageCachePrefix: '',
  tabURL,
  themeVars,
  tabBars,
  tabBarStyle,
};

export type IConfig = typeof defaultConfig;

const notifier: INotifier = (message, type, options) => {
  const curOptions: any = { ...options, title: message };
  if (type) {
    curOptions.icon = type;
  }
  showToast(curOptions);
};

export const configStore: ConfigStore<typeof defaultConfig> = new ConfigStore(defaultConfig, {
  notifier,
  apiExecutor: httpRequest,
  useRouter,
  components: {
    Loading: PageLoading,
    Skeleton: (props: any) => <Skeleton rows={6} {...props} />,
    ErrorContent,
  },
});

export const { logger } = configStore;

export const getIsTabURL = (path: string) => configStore.config.tabURL.includes(path);

export const useConfig = () => useConfigOld<IConfig>();

