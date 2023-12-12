import { StepProps, Step as NStep, Steps as NSteps, StepsProps as NStepsProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions, useAdditionalNode } from '@yimoko/store';
import React, { useMemo } from 'react';

export type StepsProps = Partial<NStepsProps> & Omit<IOptionsAPIProps<'value' | 'title' | 'description' | 'icon'>, 'valueType'>;

export const Steps = (props: StepsProps) => {
  const { children, options, api, keys, splitter, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];

  const dataChildren = useMemo(() => data.map((item, index) => <Step key={item.value ?? index} {...item} />), [data]);

  return <NSteps {...rest} >{dataChildren}{children}</NSteps>;
};


export const Step = (props: Partial<StepProps>) => {
  const { icon, description, ...rest } = props;
  const curIcon = useAdditionalNode('icon', icon);
  const curDescription = useAdditionalNode('description', description);

  return <NStep {...rest} icon={curIcon} description={curDescription} />;
};
