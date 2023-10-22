import { StorePageContent } from '@yimoko/store';

import { Button } from './base/button';
import { Cell } from './base/cell';
import { Image } from './base/image';

import { ErrorContent } from './feedback/error-content';
import { Loading, PageLoading } from './feedback/loading';
import { Skeleton } from './feedback/skeleton';

import { Divider } from './layout/divider';
import { Grid } from './layout/grid';
import { Space } from './layout/space';

export const components = {
  // store 相关组件
  StorePageContent,

  // 基础
  Button,
  Cell,
  Image,

  // 操作反馈
  ErrorContent,
  Loading,
  PageLoading,
  Skeleton,
  // 布局
  Divider,
  Space,
  Grid,
};
