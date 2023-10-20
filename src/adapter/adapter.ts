import { logger } from '../store/config';

export function adapter<R, ER = null, T = Record<any, any>>(fn: Function, params?: T, errorHandle?: 'return'): Promise<R | ER> {
  return new Promise<R>((resolve) => {
    const err = (res: R | ER) => {
      const returnVal = (errorHandle === 'return' ? res : null) as R;
      resolve(returnVal);
    };
    try {
      fn({
        ...params,
        fail: (res: R) => {
          err(res);
          logger(res, 'error');
        },
        success: (res: R) => {
          resolve(res);
        },
      });
    } catch (error: any) {
      err(error);
      logger(error, 'error');
    }
  });
}
