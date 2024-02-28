/* eslint-disable max-len */
import Taro from '@tarojs/taro';

import { handleResponse, IHTTPCode, IHTTPResponse } from '@yimoko/store';

// 将 response 处理为统一的 { code, data, message } 格式
// eslint-disable-next-line complexity
export const httpRequest: <T = any, P = any>(config: IHTTPConfig<P>) => Promise<IHTTPResponse<T>> = async (config) => {
  try {
    const { params = {}, data = {}, ...rest } = config;
    const curData = { ...params, ...data };
    const response = await Taro.request({ url: '', ...rest, data: curData }) as any;
    response.status = response.status ?? response.statusCode;
    response.statusText = response.statusText ?? response.errMsg;
    return handleResponse(response);
  } catch (e: any) {
    const { response, ...args } = e;
    if (!response) {
      return handleResponse({
        ...args,
        status: IHTTPCode.networkError,
        statusCode: IHTTPCode.networkError,
        msg: '请求失败',
      });
    }
    response.status = response.status ?? response.statusCode;
    response.statusText = response.statusText ?? response.errMsg;
    return handleResponse(response);
  }
};

export const uploadFile = async (option: Taro.uploadFile.Option) => {
  try {
    const response = await Taro.uploadFile(option) as any;
    return handleResponse(response);
  } catch (e: any) {
    const { response, ...args } = e;
    if (!response) {
      return handleResponse({
        ...args,
        statusCode: IHTTPCode.networkError,
        errMsg: e?.errMsg ?? '网络出错',
      });
    }
    return handleResponse(response);
  }
};

export const httpGet: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>> = (url, config) => httpRequest({ ...config, url, method: 'GET' });
export const httpDelete: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>> = (url, config) => httpRequest({ ...config, url, method: 'DELETE' });
export const httpHead: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>> = (url, config) => httpRequest({ ...config, url, method: 'HEAD' });
export const httpOptions: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>> = (url, config) => httpRequest({ ...config, url, method: 'OPTIONS' });

export const httpPost: <R = any, P = Record<any, any>>(url: string, data?: P, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>> = (url, data, config) => httpRequest({ ...config, url, data, method: 'POST' });
export const httpPut: <R = any, P = Record<any, any>>(url: string, data?: P, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>> = (url, data, config) => httpRequest({ ...config, url, data, method: 'PUT' });

export type IHTTPConfig<P = any> = Omit<Taro.request.Option<P>, 'url'> & { url?: string, params?: Record<any, any> };
