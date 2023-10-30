import { createSchemaField, Schema } from '@formily/react';
import { ConfigStoreProvider, SchemaComponentsProvider, SchemaFieldProvider } from '@yimoko/store';

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
      <SchemaComponentsProvider value={components}>
        <SchemaFieldProvider value={SchemaField}>
          {props.children}
        </SchemaFieldProvider>
      </SchemaComponentsProvider>
    </ConfigStoreProvider>
  );
}

export default App;
