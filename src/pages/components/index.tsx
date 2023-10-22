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
