import { TextArea as NTextArea, TextAreaProps as NTextAreaProps } from '@nutui/nutui-react-taro';
import React from 'react';

export type TextAreaProps = NTextAreaProps & {

};
export const TextArea = (props: TextAreaProps) => <NTextArea {...props} />;
