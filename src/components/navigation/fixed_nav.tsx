import { FixedNavProps, FixedNav as NFixedNav } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';

import { useNavigate } from '../../hooks/use-router';

export const FixedNav = (props: FixedNavProps & Omit<IOptionsAPIProps, 'valueType'> & { value?: boolean }) => {
  const { options, visible, api, keys, splitter, value, list, onSelect, ...rest } = props;
  const [data] = useAPIOptions(list ?? options, api, { ...keys }, splitter);
  const navigate = useNavigate();

  return (
    <NFixedNav
      {...rest}
      list={data}
      // 当 item 存在 url 时，点击 item 会跳转到对应的 url
      onSelect={(item, e) => {
        onSelect?.(item, e);
        if (item?.url) {
          navigate(item.url);
        }
      }}
    />
  );
};

