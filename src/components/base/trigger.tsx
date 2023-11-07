import { Schema, observer } from '@formily/react';
import { Button, ButtonProps } from '@nutui/nutui-react-taro';
import { judgeIsEmpty } from '@yimoko/store';
import { cloneElement, Component, FC, isValidElement, ReactElement, ReactNode } from 'react';
import { isFragment, isValidElementType } from 'react-is';

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

// eslint-disable-next-line complexity
export const Trigger = observer((props: TriggerProps) => {
  const { render, onTrig, trigEvent = 'onClick', children, text, ...args } = props;

  const eventProps: Record<string, any> = {
    [trigEvent]: (...rest: any) => {
      onTrig?.(...rest);
      const event = args?.[trigEvent];
      typeof event === 'function' && event(...rest);
    },
  };

  if (isValidElement(render)) {
    if (render.props?.children === undefined) {
      eventProps.children = text;
    }
    return cloneElement(render, { ...eventProps });
  }

  if (isValidElementType(render)) {
    const C: any = render;
    return <C {...args}  {...eventProps} >{children ?? text}</C>;
  }

  if (typeof children !== 'string' && isValidElement(children)) {
    if (isFragment(children)) {
      const handleFragment = (el: any) => {
        const newEl = el;
        if (Array.isArray(newEl?.props?.children)) {
          newEl.props.children = newEl.props.children.map((item: any) => {
            if (isFragment(item)) {
              return handleFragment(item);
            }
            if (!judgeIsEmpty(item?.props)) {
              const { schema } = item.props;
              if (schema instanceof Schema) {
                // 如果是 schema 则注入
                schema['x-decorator'] = 'Trigger';
                schema['x-decorator-props'] = props;
              }
            }
            return item;
          });
        }
        return newEl;
      };
      if (Array.isArray(children?.props?.children)) {
        return handleFragment(children);
      };
      return children;
    }
    // @ts-ignore
    if (children?.props?.children === undefined) {
      eventProps.children = text;
    }
    return cloneElement(children as any, { ...eventProps });
  }

  return <Button {...args}  {...render} {...eventProps} >{text}</Button>;
});
