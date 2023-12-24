import { RecordScope, useFieldSchema } from '@formily/react';
import { InfiniteLoadingProps as NInfiniteLoadingProps, InfiniteLoading as NInfiniteLoading } from '@nutui/nutui-react-taro';
import { judgeIsEmpty, useAdditionalNode } from '@yimoko/store';
import React, { useMemo } from 'react';

import { ItemSchemaToProps } from '../../tools/schema';

export const InfiniteLoading = (props: Partial<NInfiniteLoadingProps>) => {
  const { pullingText, loadingText, children, ...rest } = props;

  const curPullingText = useAdditionalNode('pullingText', pullingText);
  const curLoadingText = useAdditionalNode('loadingText', loadingText);

  const schema = useFieldSchema() ?? {};
  const items = schema?.items;
  const enums = schema?.enum;

  const itemsChildren = useMemo(() => {
    if (judgeIsEmpty(enums) || judgeIsEmpty(items)) {
      return null;
    }

    // eslint-disable-next-line complexity
    return enums.map((record, dataIndex) => {
      const schemaItem = Array.isArray(items) ? (items[dataIndex] ?? items[0]) : items;
      const { ...itemProps } = ItemSchemaToProps(schemaItem, 'li', {}, dataIndex);
      return (
        <li key={dataIndex} {...itemProps} >
          <RecordScope getRecord={() => record} getIndex={() => dataIndex} >
            {record as string}
          </RecordScope>
        </li >
      );
    });
  }, [items, enums]);

  return (
    <NInfiniteLoading pullingText={curPullingText} loadingText={curLoadingText} {...rest}>
      {itemsChildren}
      {children}
    </NInfiniteLoading>
  );
};
