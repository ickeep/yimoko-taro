// import { observer } from '@formily/react';
// import { StorePage, useStore } from '@yimoko/store';
// import React from 'react';

// import { Divider, Tabs } from '@/library';

// function Index() {
//   const store = useStore({
//     defaultValues: {
//       tab: 'JSX',
//     },
//   });
//   const { tab } = store.values;
//   const { setValues } = store;

//   return (
//     <div>
//       <Tabs
//         value={tab}
//         options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
//         onChange={value => setValues({ tab: `${value}` })}
//       />
//       {tab === 'JSX' ? (
//         <>
//           <Divider>基础用法</Divider>

//         </>
//       ) : (
//         <StorePage
//           store={store}
//           schema={{
//             type: 'object',
//             properties: {
//               d1: {
//                 type: 'void',
//                 'x-component': 'Divider',
//                 'x-component-props': {
//                   children: '基础用法',
//                 },
//               },
//             },
//           }
//           }
//         />)
//       }
//     </div >
//   );
// }

// export default observer(Index);
