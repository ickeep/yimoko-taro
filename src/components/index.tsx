import { StorePageContent, Trigger } from '@yimoko/store';

import { Button } from './base/button';
import { Cell } from './base/cell';
import { Image } from './base/image';
import { Overlay } from './base/overlay';

import { Animate } from './display/animate';
import { AnimatingNumbers } from './display/animating-numbers';
import { Avatar } from './display/avatar';
import { CircleProgress } from './display/circle-progress';
import { Collapse } from './display/collapse';
import { CountDown } from './display/count-down';
import { Ellipsis } from './display/ellipsis';
import { ImagePreview } from './display/image-preview';
import { Indicator } from './display/indicator';
import { Pagination } from './display/pagination';
import { Price } from './display/price';
import { Progress } from './display/progress';
import { Step, Steps } from './display/steps';
import { Swiper } from './display/swiper';
import { Tag } from './display/tag';
import { Tour } from './display/tour';
import { Video } from './display/video';
import { VirtualList } from './display/virtual-list';

import { Card } from './feature/card';

import { TimeSelect } from './feature/time-select';
import { TrendArrow } from './feature/trend-arrow';
import { WaterMark } from './feature/water-mark';
import { ActionSheet } from './feedback/action-sheet';
import { Badge } from './feedback/badge';
import { Dialog } from './feedback/dialog';
import { Drag } from './feedback/drag';
import { Empty } from './feedback/empty';
import { ErrorContent } from './feedback/error-content';
import { InfiniteLoading } from './feedback/infinite-loading';
import { Loading, PageLoading } from './feedback/loading';
import { NoticeBar } from './feedback/notice-bar';
import { Notify } from './feedback/notify';
import { Popover } from './feedback/popover';
import { Popup } from './feedback/popup';
import { Skeleton } from './feedback/skeleton';
import { Swipe } from './feedback/swipe';
import { Toast } from './feedback/toast';

import { Calendar, SingleCalendar, RangeCalendar, MultipleCalendar, WeekCalendar } from './in/calendar';
import { Cascader } from './in/cascader';
import { Checkbox } from './in/checkbox';
import { Form, FormItem } from './in/form';
import { Input } from './in/input';
import { InputNumber } from './in/input-number';
import { Menu } from './in/menu';
import { NumberKeyboard } from './in/number-keyboard';
import { Picker } from './in/picker';
import { Radio, RadioGroup } from './in/radio';
import { Range } from './in/range';
import { Rate } from './in/rate';
// import { SearchBar } from './in/search-bar';
import { Signature } from './in/signature';
import { Switch } from './in/switch';
import { TextArea } from './in/text-area';

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
import { TabPane, Tabs } from './navigation/tabs';

export const components = {
  // store 相关组件
  StorePageContent,
  Trigger,

  // 基础
  Button,
  Cell,
  Image,
  Overlay,

  // 特色组件
  Card,
  TrendArrow,
  WaterMark,

  // 操作反馈
  ActionSheet,
  Badge,
  Dialog,
  Empty,
  ErrorContent,
  InfiniteLoading,
  Loading,
  NoticeBar,
  Notify,
  PageLoading,
  Popover,
  Popup,
  Skeleton,
  Swipe,
  Toast,
  Drag,

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
  Tabs,
  TabPane,

  // 数据录入
  Cascader,
  Checkbox,
  Form,
  FormItem,
  Input,
  InputNumber,
  Menu,
  Picker,
  Switch,
  Radio,
  RadioGroup,
  TextArea,
  Range,
  Rate,

  // 数据展示
  Animate,
  AnimatingNumbers,
  Avatar,
  CircleProgress,
  CountDown,
  Ellipsis,
  ImagePreview,
  Indicator,
  Pagination,
  Price,
  Progress,
  Steps,
  Step,
  Swiper,
  Tag,
  Tour,
  Video,
  VirtualList,
  Collapse,
};

export const componentsPlus = {
  // 数据录入
  // Address,
  Calendar,
  SingleCalendar,
  RangeCalendar,
  MultipleCalendar,
  WeekCalendar,
  NumberKeyboard,

  Signature,
  // SearchBar,

  TimeSelect,
};
