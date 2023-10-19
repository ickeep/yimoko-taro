import { ConfigStore } from '@yimoko/store';
export declare const defaultConfig: {
    static: {
        img: string;
        icon: string;
    };
    apiHost: string;
    uploadAPI: string;
    indexPage: string;
    pageCachePrefix: string;
    tabURL: string[];
    themeVars: Record<any, any>;
    tabBars: Omit<import("@tarojs/taro").setTabBarItem.Option, "success" | "fail" | "complete">[];
    tabBarStyle: Omit<import("@tarojs/taro").setTabBarStyle.Option, "success" | "fail" | "complete">;
};
export type IConfig = typeof defaultConfig;
export declare const configStore: ConfigStore<typeof defaultConfig>;
export declare const logger: (info: unknown, level?: ("info" | "warn" | "error") | undefined) => void;
export declare const getIsTabURL: (path: string) => boolean;
