import { createSchemaField, Schema } from '@formily/react';
import { ConfigStoreProvider, SchemaFieldProvider } from '@yimoko/store';

import { compiler, components, configStore, defaultConfig } from '@/library';

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
