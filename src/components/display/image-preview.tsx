import { ImagePreview as NImagePreview, ImagePreviewProps as NImagePreviewProps  } from '@nutui/nutui-react-taro';
import { Trigger, TriggerProps } from '@yimoko/store';
import { isObject } from 'lodash-es';
import React, { useMemo } from 'react';

export type ImagePreviewProps = NImagePreviewProps & {
  children?: React.ReactNode | TriggerProps,
};

// TODO images 是否可以从远程获取
export const ImagePreview = (props: ImagePreviewProps) => {
  const { children, ...rest } = props;
  const curChild = useMemo(() => {
    if (isObject(children)) {
      // @ts-expect-error
      return <Trigger {...children} />;
    }
    return children;
  }, [children]);
  return <NImagePreview {...rest}>{curChild}</NImagePreview>;
};
