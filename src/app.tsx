import { createSchemaField, Schema } from '@formily/react';
import { ConfigStoreProvider, SchemaFieldProvider, compiler } from '@yimoko/store';

import React from 'react';

import { components, componentsPlus, configStore, defaultConfig } from '@/library';

import './app.css';
import icons from './icons';


Schema.registerCompiler(compiler);
const useComponents = { ...components, ...componentsPlus };
const SchemaField = createSchemaField({ components: useComponents, scope: { icons, configStore } });

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
  ...configStore.components,
  ...useComponents,
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
