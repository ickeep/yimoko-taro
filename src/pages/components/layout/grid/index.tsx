import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';

import { Cell, Grid, Tabs } from '@/library';

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'JX',
    },
  });
  const { tab } = store.values;
  const { setValues } = store;

  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Cell.Group title='基础用法'>
            <Grid>
               {Array.from({ length: 8 }, (_item, index) => (
                  <Grid.Item key={index} text='文字'></Grid.Item>
               ))}
            </Grid>
          </Cell.Group>
          <Cell.Group title='自定义列数'>
            <Grid columns={3}>
               {Array.from({ length: 8 }, (_item, index) => (
                  <Grid.Item key={index} text='文字'></Grid.Item>
               ))}
            </Grid>
          </Cell.Group>
          <Cell.Group title='正方形'>
            <Grid columns={3} square>
              {Array.from({ length: 8 }, (_item, index) => (
                  <Grid.Item key={index} text='文字'></Grid.Item>
              ))}
            </Grid>
          </Cell.Group>
          <Cell.Group title='间距'>
            <Grid gap={3}>
                {Array.from({ length: 4 }, (_item, index) => (
                  <Grid.Item key={index} text='文字'>内容</Grid.Item>
                ))}
            </Grid>
          </Cell.Group>
          <Cell.Group title='翻转'>
            <Grid reverse>
              {Array.from({ length: 4 }, (_item, index) => (
                <Grid.Item key={index} text='文字'>内容</Grid.Item>
              ))}
            </Grid>
          </Cell.Group>
          <Cell.Group title='横向'>
            <Grid direction='horizontal'>
              {Array.from({ length: 4 }, (_item, index) => (
                <Grid.Item key={index} text='文字'>内容</Grid.Item>
              ))}
            </Grid>
          </Cell.Group>
        </>
      ) : (
        <StorePage
          store={store}
          schema={{
            type: 'object',
            properties: {
              c1: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '基础用法',
                },
                'x-component': 'Grid',
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g3: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g4: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g5: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g6: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g7: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g8: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                },
              },
              c2: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '自定义列数',
                },
                'x-component': 'Grid',
                'x-component-props': {
                  columns: 3,
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g3: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g4: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g5: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g6: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g7: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g8: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                },
              },
              c3: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '正方形',
                },
                'x-component': 'Grid',
                'x-component-props': {
                  columns: 3,
                  square: true,
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g3: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g4: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g5: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g6: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g7: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                  g8: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                    },
                  },
                },
              },
              c4: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '间距',
                },
                'x-component': 'Grid',
                'x-component-props': {
                  gap: 3,
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g3: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g4: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                },
              },
              c5: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '翻转',
                },
                'x-component': 'Grid',
                'x-component-props': {
                  reverse: true,
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g3: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g4: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                },
              },
              c6: {
                type: 'void',
                'x-decorator': 'Cell.Group',
                'x-decorator-props': {
                  title: '横向',
                },
                'x-component': 'Grid',
                'x-component-props': {
                  direction: 'horizontal',
                },
                properties: {
                  g1: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g2: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g3: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },
                  g4: {
                    type: 'void',
                    'x-component': 'Grid.Item',
                    'x-component-props': {
                      text: '文字',
                      children: '内容',
                    },
                  },

                },
              },
            },
          }}
        />)
      }
    </div >
  );
}

export default observer(Index);
