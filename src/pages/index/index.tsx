import { Cell, router, Divider } from '@/library';

const data = [
  {
    title: '页面状态',
    children: [
      {
        title: '骨架屏',
        path: '/pages/index/skeleton/index',
      },
      {
        title: 'Loading',
        path: '/pages/index/loading/index',
      },
      {
        title: '出错',
        path: '/pages/index/error/index',
      },
    ],
  },
  {
    title: '基础页面',
    children: [
      {
        title: '添加',
        path: '/pages/index/add/index',
      },
      {
        title: '详情',
        path: '/pages/index/detail/index',
      },
      {
        title: '编辑',
        path: '/pages/index/edit/index',
      },
      {
        title: '列表',
        path: '/pages/index/list/index',
      },
    ],
  },
];

function Index() {
  return (
    <div>
      <Divider>页面能力及相关组件</Divider>
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
