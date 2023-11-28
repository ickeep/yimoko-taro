import { createSchemaField, Schema } from '@formily/react';
import { ConfigStoreProvider, SchemaFieldProvider, compiler } from '@yimoko/store';

import { components, componentsPlus, configStore, defaultConfig } from '@/library';

import './app.css';

Schema.registerCompiler(compiler);
const useComponents = { ...components, ...componentsPlus };
const SchemaField = createSchemaField({ components: useComponents, scope: { configStore } });

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
  ...useComponents,
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
