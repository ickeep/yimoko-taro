import { TagProps, Tag as NTag } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React, { ReactNode } from 'react';

export const Tag = (props: Partial<TagProps> & { value?: ReactNode }) => {
  const { closeIcon, ...rest } = props;
  const curCloseIcon = useAdditionalNode('closeIcon', closeIcon);

  return <NTag {...rest} closeIcon={curCloseIcon} />;
};
