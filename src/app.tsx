import { createSchemaField, Schema } from '@formily/react';
import { ConfigStoreProvider, SchemaFieldProvider } from '@yimoko/store';

import { compiler, components, configStore, defaultConfig } from '@/library';

import './app.css';

Schema.registerCompiler(compiler);
const SchemaField = createSchemaField({ components, scope: { configStore } });

configStore.setConfig({
  ...defaultConfig,
  indexPage: '/pages/index/index',
  tabURL: [
    '/pages/index/index',
    '/pages/components/index',
    '/pages/adapter/index',
    '/pages/about/index',
  ],
});

// 设置默认组件
configStore.components = {
  ...components,
  ...configStore.components,
};

function App(props) {
  return (
    <ConfigStoreProvider value={configStore}>
      <SchemaFieldProvider value={SchemaField}>
        {props.children}
      </SchemaFieldProvider>
    </ConfigStoreProvider>
  );
}

export default App;
