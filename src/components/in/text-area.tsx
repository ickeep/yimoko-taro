import { TextArea as NTextArea, TextAreaProps as NTextAreaProps } from '@nutui/nutui-react-taro';

export type TextAreaProps = NTextAreaProps & {

};
export const TextArea = (props: TextAreaProps) => <NTextArea {...props} />;
