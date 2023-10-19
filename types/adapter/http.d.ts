import Taro from '@tarojs/taro';
import { IHTTPResponse } from '@yimoko/store';
export declare const httpRequest: <T = any, P = any>(config: IHTTPConfig<P>) => Promise<IHTTPResponse<T>>;
export declare const uploadFile: (option: Taro.uploadFile.Option) => Promise<IHTTPResponse<Record<import("react").Key, any>, any>>;
export declare const httpGet: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>>;
export declare const httpDelete: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>>;
export declare const httpHead: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>>;
export declare const httpOptions: <R = any, P = any>(url: string, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>>;
export declare const httpPost: <R = any, P = Record<any, any>>(url: string, data?: P, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>>;
export declare const httpPut: <R = any, P = Record<any, any>>(url: string, data?: P, config?: IHTTPConfig<P>) => Promise<IHTTPResponse<R>>;
export type IHTTPConfig<P = any> = Omit<Taro.request.Option<P>, 'url'> & {
    url?: string;
};
