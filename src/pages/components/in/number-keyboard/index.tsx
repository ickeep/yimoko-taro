import { observer } from '@formily/react'
import { StorePage, useStore } from '@yimoko/store'


function Index() {
  const store = useStore({})

  return (
    <>
      <StorePage
        store={store}
        schema={{
          type: 'object',
          properties: {
            single: {
              type: 'string',
              title: '选择单个日期',
              'x-component': 'NumberKeyboard',
              'x-decorator': 'Cell',
              'x-component-props': {
                placeholder: '选择单个日期',
              },
              // properties: {
              //   cell: {
              //     type: 'void',
              //     'x-component': 'Cell',
              //   },
              // },
            },
          },
        }}
      />
    </>
  )
}

export default observer(Index)
