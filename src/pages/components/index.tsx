import React from 'react';

import { Cell, router, Divider } from '@/library';

const data = [
  {
    title: '基础组件',
    children: [
      {
        title: '按钮 - Button',
        path: '/pages/components/base/button/index',
      },
      {
        title: '单元格 - Cell',
        path: '/pages/components/base/cell/index',
      },
      {
        title: '图片 - Image',
        path: '/pages/components/base/image/index',
      },
    ],
  },
  {
    title: '布局组件',
    children: [
      {
        title: '分割线 - Divider',
        path: '/pages/components/layout/divider/index',
      },
      {
        title: '宫格 - Grid',
        path: '/pages/components/layout/grid/index',
      },
      {
        title: '布局 - Layout',
        path: '/pages/components/layout/layout/index',
      },
      {
        title: '间距 - Space',
        path: '/pages/components/layout/space/index',
      },
      {
        title: '粘性布局 - Sticky',
        path: '/pages/components/layout/sticky/index',
      },
    ],
  },

  {
    title: '导航组件',
    children: [
      {
        title: '返回顶部 - BackTop',
        path: '/pages/components/navigation/back_top/index',
      },
      {
        title: '电梯楼层 - Elevator',
        path: '/pages/components/navigation/elevator/index',
      },
      {
        title: '悬浮导航 - FixedNav',
        path: '/pages/components/navigation/fixed_nav/index',
      },
      {
        title: '头部导航 - NavBar',
        path: '/pages/components/navigation/nav_bar/index',
      },
      {
        title: '侧边栏导航 - SideNavBar',
        path: '/pages/components/navigation/side_nav_bar/index',
      },
      {
        title: '标签栏 - TabBar',
        path: '/pages/components/navigation/tabbar/index',
      },
      {
        title: '选项卡切换 - Tabs',
        path: '/pages/components/navigation/tabs/index',
      },
    ],
  },

  {
    title: '数据录入',
    children: [
      { title: '级联选择器 - Cascader', path: '/pages/components/in/cascader/index' },
      { title: '表单 - Form', path: '/pages/components/in/form/index' },
      { title: '菜单 - Menu', path: '/pages/components/in/menu/index' },
      { title: '选择器 - Picker', path: '/pages/components/in/picker/index' },
      { title: '日历 - Calendar', path: '/pages/components/in/calendar/index' },
      { title: '数字键盘 - NumberKeyboard', path: '/pages/components/in/number-keyboard/index' },
      { title: '开关 - Switch', path: '/pages/components/in/switch/index' },
      { title: '单选框 - Radio', path: '/pages/components/in/radio/index' },
      { title: '文本域 - TextArea', path: '/pages/components/in/text-area/index' },
      { title: '区间选择 - Range', path: '/pages/components/in/range/index' },
      { title: '评分 - Rate', path: '/pages/components/in/rate/index' },
      { title: '签名 - Signature', path: '/pages/components/in/signature/index' },
      { title: '搜索栏 - SearchBar', path: '/pages/components/in/search-bar/index' },
    ],
  },
  {
    title: '操作反馈',
    children: [
      { title: '动作面板 - ActionSheet', path: '/pages/components/feedback/action-sheet/index' },
      { title: '徽标 - Badge', path: '/pages/components/feedback/badge/index' },
      { title: '对话框 - Dialog', path: '/pages/components/feedback/dialog/index' },
      { title: '拖拽 - Drag', path: '/pages/components/feedback/drag/index' },
      { title: '空状态 - Empty', path: '/pages/components/feedback/empty/index' },
      { title: '滚动加载 - InfiniteLoading', path: '/pages/components/feedback/infinite-loading/index' },
      { title: '加载 - Loading', path: '/pages/components/feedback/loading/index' },
      { title: '公告栏 - NoticeBar', path: '/pages/components/feedback/notice-bar/index' },
      { title: '消息通知 - Notify', path: '/pages/components/feedback/notify/index' },
      { title: '气泡弹出框 - Popover', path: '/pages/components/feedback/popover/index' },
      { title: '骨架屏 - Skeleton', path: '/pages/components/feedback/skeleton/index' },
      { title: '滑动手势 - Swipe', path: '/pages/components/feedback/swipe/index' },
    ],
  },
  {
    title: '展示组件',
    children: [
      { title: '动画 - Animate', path: '/pages/components/display/animate/index' },
      { title: '头像 - Avatar', path: '/pages/components/display/avatar/index' },
      { title: '倒计时 - CountDown', path: '/pages/components/display/count-down/index' },
      { title: '圆形进度条 - CircleProgress', path: '/pages/components/display/circle-progress/index' },
      { title: '省略号 - Ellipsis', path: '/pages/components/display/ellipsis/index' },
      { title: '图片预览 - ImagePreview', path: '/pages/components/display/image-preview/index' },
    ],
  },
];

function Index() {
  return (
    <div>
      <Divider>适配及增强 NutUI-React-Taro 组件</Divider>
      {data.map(item => (
        <Cell.Group key={item.title} title={item.title}>
          {item.children.map(child => (
            <Cell
              key={child.title}
              title={child.title}
              onClick={() => router.to(child.path)}
            />
          ))}
        </Cell.Group>
      ))}
    </div>
  );
}

export default Index;
