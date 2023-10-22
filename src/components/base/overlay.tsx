import { OverlayProps, Overlay as NOverlay } from '@nutui/nutui-react-taro';

export const Overlay = (props: OverlayProps & { value?: boolean }) => {
  const { value, visible, ...rest } = props;

  return <NOverlay visible={visible || value} {...rest} />;
};
