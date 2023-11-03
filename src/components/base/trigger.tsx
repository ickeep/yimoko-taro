import { observer } from '@formily/react';
import { Button, ButtonProps } from '@nutui/nutui-react-taro';
import { cloneElement, Component, FC, isValidElement, ReactElement, ReactNode } from 'react';
import { isValidElementType } from 'react-is';

interface ITriggerProps {
  onTrig?: (...args: any) => any | Promise<any>,
  [key: string]: any
}

export type ITriggerRender = Partial<Omit<ButtonProps, 'ref'>> | ReactElement<ITriggerProps> | FC<ITriggerProps> | Component<ITriggerProps>;

export interface TriggerProps extends Partial<Omit<ButtonProps, 'ref'>> {
  render?: ITriggerRender
  onTrig?: (...args: any) => any | Promise<any>,
  trigEvent?: 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onFocus' | 'onBlur' | string
  text?: ReactNode
  [key: string]: any
}

export const Trigger = observer((props: TriggerProps) => {
  const { render, onTrig, trigEvent = 'onClick', children, text, ...args } = props;

  const eventProps = {
    [trigEvent]: (...rest: any) => {
      onTrig?.(...rest);
      const event = args?.[trigEvent];
      typeof event === 'function' && event(...rest);
    },
  };

  if (isValidElement(render)) {
    return cloneElement(render, { ...eventProps });
  }

  if (isValidElementType(render)) {
    const C: any = render;
    return <C {...args} {...eventProps} />;
  }

  if (typeof children !== 'string' && children) {
    return cloneElement(children as ReactElement, { ...eventProps });
  }

  return <Button {...args}  {...render} {...eventProps} >{text}</Button>;
});
