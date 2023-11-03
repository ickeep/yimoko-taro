import { ImageProps, Image as NImage } from '@nutui/nutui-react-taro';

export const Image = (props: ImageProps & { value?: string }) => {
  const { value, src, ...rest } = props;

  return <NImage src={src || value} {...rest} />;
};