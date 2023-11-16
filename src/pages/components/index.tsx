import { Cell, router, Divider } from '@/library';

const data = [
  {
    title: '基础组件',
    children: [
      {
        title: '按钮 - Button',
        path: '/pages/components/base/button/index',
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
    ],
  },

  {
    title: '导航组件',
    children: [
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
    ],
  },
  {
    title: '操作反馈',
    children: [
      { title: '动作面板 - ActionSheet', path: '/pages/components/feedback/action-sheet/index' },
      { title: '徽标 - Badge', path: '/pages/components/feedback/badge/index' },
      { title: '对话框 - Dialog', path: '/pages/components/feedback/dialog/index' },

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
