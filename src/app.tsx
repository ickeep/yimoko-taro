import { createSchemaField } from '@formily/react';
import { ConfigStoreProvider, SchemaComponentsProvider, SchemaFieldProvider } from '@yimoko/store';

import { components, configStore } from '@/library';

const SchemaField = createSchemaField({ components });

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
