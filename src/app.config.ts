export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index/skeleton/index',
    'pages/index/error/index',
    'pages/index/loading/index',
    'pages/index/add/index',
    'pages/index/list/index',
    'pages/index/detail/index',
    'pages/index/edit/index',

    'pages/components/index',
    'pages/components/base/button/index',
    // 'pages/components/base/cell/index',
    // 'pages/components/base/image/index',

    // 'pages/components/feedback/error-content/index',
    // 'pages/components/feedback/loading/index',
    // 'pages/components/feedback/skeleton/index',

    'pages/components/layout/divider/index',
    // 'pages/components/layout/space/index',
    'pages/components/layout/grid/index',

    'pages/components/navigation/nav_bar/index',
    'pages/components/navigation/side_nav_bar/index',
    'pages/components/navigation/tabbar/index',
    'pages/components/navigation/tabs/index',

    'pages/components/in/cascader/index',
    'pages/components/in/form/index',
    'pages/components/in/menu/index',
    'pages/components/in/picker/index',
    'pages/components/in/calendar/index',
    'pages/components/in/number-keyboard/index',
    'pages/components/in/switch/index',
    'pages/components/in/radio/index',

    'pages/adapter/index',
    'pages/about/index',

    'pages/web-view/index',
  ],
  tabBar: {
    selectedColor: '#fa3527',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tab-bar/index.png',
        selectedIconPath: 'assets/images/tab-bar/index-selected.png',
      },
      {
        pagePath: 'pages/components/index',
        text: '组件',
        iconPath: 'assets/images/tab-bar/components.png',
        selectedIconPath: 'assets/images/tab-bar/components-selected.png',
      },
      {
        pagePath: 'pages/adapter/index',
        text: '适配器',
        iconPath: 'assets/images/tab-bar/adapter.png',
        selectedIconPath: 'assets/images/tab-bar/adapter-selected.png',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: 'assets/images/tab-bar/about.png',
        selectedIconPath: 'assets/images/tab-bar/about-selected.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
});
