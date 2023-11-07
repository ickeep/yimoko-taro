import { useStore, StorePage } from '@yimoko/store'

function Index() {
  const store = useStore({
    dictConfig: [
      {
        field: 'base', data: [
          {
            value: '浙江',
            text: '浙江',
            children: [
              {
                value: '杭州',
                text: '杭州',
                disabled: true,
                children: [
                  { value: '西湖区', text: '西湖区', disabled: true },
                  { value: '余杭区', text: '余杭区' },
                ],
              },
              {
                value: '温州',
                text: '温州',
                children: [
                  { value: '鹿城区', text: '鹿城区' },
                  { value: '瓯海区', text: '瓯海区' },
                ],
              },
            ],
          },
          {
            value: '湖南',
            text: '湖南',
            disabled: true,
            children: [
              {
                value: '长沙',
                text: '长沙',
                disabled: true,
                children: [
                  { value: '西湖区', text: '西湖区' },
                  { value: '余杭区', text: '余杭区' },
                ],
              },
              {
                value: '温州',
                text: '温州',
                children: [
                  { value: '鹿城区', text: '鹿城区' },
                  { value: '瓯海区', text: '瓯海区' },
                ],
              },
            ],
          },
          {
            value: '福建',
            text: '福建',
            children: [
              {
                value: '福州',
                text: '福州',
                children: [
                  { value: '鼓楼区', text: '鼓楼区' },
                  { value: '台江区', text: '台江区' },
                ],
              },
            ],
          },
        ],
      },
      {
        field: 'exits', data: [
          {
            id: 1,
            addressDetail: '',
            cityName: '次渠镇',
            countyName: '通州区',
            provinceName: '北京市',
            selectedAddress: true,
            townName: '',
            name: '探探鱼1',
            phone: '182****1718',
          },
          {
            id: 2,
            addressDetail: '',
            cityName: '钓鱼岛全区',
            countyName: '',
            provinceName: '钓鱼岛',
            selectedAddress: false,
            townName: '',
            name: '探探鱼2',
            phone: '182****1718',
          },
          {
            id: 3,
            addressDetail: '京东大厦',
            cityName: '大兴区',
            countyName: '科创十一街18号院',
            provinceName: '北京市',
            selectedAddress: false,
            townName: '',
            name: '探探鱼3',
            phone: '182****1718',
          },
        ],
      },
      {
        field: 'optionKeys', data: [
          {
            value1: '浙江',
            text1: '浙江',
            items: [
              {
                value1: '杭州',
                text1: '杭州',
                disabled: true,
                items: [
                  { value1: '西湖区', text1: '西湖区', disabled: true },
                  { value1: '余杭区', text1: '余杭区' },
                ],
              },
              {
                value1: '温州',
                text1: '温州',
                items: [
                  { value1: '鹿城区', text1: '鹿城区' },
                  { value1: '瓯海区', text1: '瓯海区' },
                ],
              },
            ],
          },
          {
            value1: '湖南',
            text1: '湖南',
            disabled: true,
            items: [
              {
                value1: '长沙',
                text1: '长沙',
                disabled: true,
                items: [
                  { value1: '西湖区', text1: '西湖区' },
                  { value1: '余杭区', text1: '余杭区' },
                ],
              },
              {
                value1: '温州',
                text1: '温州',
                items: [
                  { value1: '鹿城区', text1: '鹿城区' },
                  { value1: '瓯海区', text1: '瓯海区' },
                ],
              },
            ],
          },
          {
            value1: '福建',
            text1: '福建',
            items: [
              {
                value1: '福州',
                text1: '福州',
                items: [
                  { value1: '鼓楼区', text1: '鼓楼区' },
                  { value1: '台江区', text1: '台江区' },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
  return <StorePage store={store} schema={{
    type: 'void',
    properties: {
      base: {
        type: 'array',
        title: '基础用法',
        'x-component': 'Address',
        'x-component-props': {
          // children: '请选择地址',
          title: '基础用法',
          options: '{{curStore.dict.base}}',
        },
      },
      optionKeys: {
        type: 'array',
        title: '自定义数据结构',
        'x-component': 'Address',
        'x-component-props': {
          title: '自定义数据结构',
          options: '{{curStore.dict.optionKeys}}',
          optionKey: {
            textKey: 'text1',
            valueKey: 'value1',
            childrenKey: 'items',
          },
        },
      },
      exits: {
        type: 'array',
        title: '选择已有地址',
        'x-component': 'Address',
        'x-component-props': {
          title: '选择已有地址',
          type: 'exits',
          // options: '{{curStore.dict.exits}}',
          existList: '{{curStore.dict.exits}}',
        },
      },
    },
  }}
  />
}

export default Index
