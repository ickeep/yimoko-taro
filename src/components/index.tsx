import { StorePageContent } from '@yimoko/store';

import { Button } from './base/button';
import { Cell } from './base/cell';
import { Image } from './base/image';

import { Overlay } from './base/overlay';
import { Trigger } from './base/trigger';
import { ErrorContent } from './feedback/error-content';
import { Loading, PageLoading } from './feedback/loading';
import { Skeleton } from './feedback/skeleton';

import { Divider } from './layout/divider';
import { Grid } from './layout/grid';
import { Col, Layout, Row } from './layout/layout';
import { Space } from './layout/space';
import { Sticky } from './layout/sticky';
import { BackTop } from './navigation/back_top';
import { Elevator } from './navigation/elevator';
import { FixedNav } from './navigation/fixed_nav';
import { Link } from './navigation/link';
import { NavBar } from './navigation/nav_bar';
import { SideNavBar, SideNavBarItem, SubSideNavBar } from './navigation/side_nav_bar';
import { Tabbar } from './navigation/tabbar';

export const components = {
  // store 相关组件
  StorePageContent,

  // 基础
  Button,
  Cell,
  Image,
  Overlay,
  Trigger,

  // 操作反馈
  ErrorContent,
  Loading,
  PageLoading,
  Skeleton,
  // 布局
  Divider,
  Space,
  Grid,
  Layout,
  Row,
  Col,
  Sticky,

  // 导航
  BackTop,
  Elevator,
  FixedNav,
  Link,
  NavBar,
  SideNavBar,
  SubSideNavBar,
  SideNavBarItem,
  Tabbar,
};
