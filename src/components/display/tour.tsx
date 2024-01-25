import { observer } from '@formily/react';
import { Tour as NTour, TourProps as NTourProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, Trigger, TriggerProps, useAPIOptions, useAdditionalNode } from '@yimoko/store';
import React, { FC, useCallback, useMemo, useState } from 'react';


type ITour = FC<Partial<NTourProps> & { trigger?: TriggerProps, } & Omit<IOptionsAPIProps<'content' | 'target' | 'location' | 'popoverOffset' | 'arrowOffset'>, 'valueType'>>;

export const Tour: ITour = observer((props) => {
  const { children, trigger, visible, list, options, api, keys, splitter, next, prev, complete, title, ...rest } = props;
  const [data] = useAPIOptions(list ?? options, api, keys, splitter) as any[];

  const [curVisible, setCurVisible] = useState(visible ?? false);
  const curNext = useAdditionalNode('next', next);
  const curPrev = useAdditionalNode('prev', prev);
  const curComplete = useAdditionalNode('complete', complete);
  const curTitle = useAdditionalNode('title', title);

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
    <NTour {...rest} list={data}
      next={curNext}
      prev={curPrev}
      complete={curComplete}
      title={curTitle}
      visible={curVisible}
    />
  </>;
});

