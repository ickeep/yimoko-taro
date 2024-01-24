import { observer } from '@formily/react';
import { ImagePreview as NImagePreview, ImagePreviewProps as NImagePreviewProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, Trigger, TriggerProps, useAPIOptions } from '@yimoko/store';
import React, { useCallback, useMemo, useState } from 'react';

export type ImagePreviewProps = Partial<NImagePreviewProps> &
{ trigger?: TriggerProps, } & Omit<IOptionsAPIProps<'value' | 'name' | 'description' | 'danger' | 'disabled'>, 'valueType'>;

export const ImagePreview = observer((props: ImagePreviewProps) => {
  const { children, trigger, visible, options, api, keys, splitter, images, ...rest } = props;
  const [curVisible, setCurVisible] = useState(visible ?? false);
  const [data] = useAPIOptions(images ?? options, api, keys, splitter) as any[];

  const trig = useCallback(() => {
    if (visible === undefined) {
      setCurVisible(!curVisible);
    }
  }, [curVisible, visible]);

  const triggerEl = useMemo(() => (
    <Trigger
      {...trigger}
      onTrig={(...args) => {
        trig();
        trigger?.onTrig?.(...args);
      }}
    >
      {children}
    </Trigger >
  ), [trigger, children, trig]);

  return <>
    {triggerEl}
    <NImagePreview {...rest} images={data} visible={curVisible} />
  </>;
});
