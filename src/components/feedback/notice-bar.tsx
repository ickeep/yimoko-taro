import { NoticeBarProps, NoticeBar as NNoticeBar } from '@nutui/nutui-react-taro';
import { useChildrenNullishCoalescing } from '@yimoko/store';

export const NoticeBar = (props: Partial<NoticeBarProps> & { value?: string }) => {
  const { children, content, value, ...rest } = props;
  const curChildren = useChildrenNullishCoalescing(children);

  return <NNoticeBar {...rest} content={content ?? value} >{curChildren}</NNoticeBar>;
};
