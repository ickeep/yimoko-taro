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
    'pages/adapter/index',
    'pages/about/index',
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
