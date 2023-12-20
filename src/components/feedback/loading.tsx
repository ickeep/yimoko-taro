import { LoadingProps, Overlay, Loading as NLoading } from '@nutui/nutui-react-taro';
import { useAdditionalNode } from '@yimoko/store';
import React from 'react';

export const Loading = (props: Partial<LoadingProps>) => {
  const { icon, ...rest } = props;
  const curIcon = useAdditionalNode('icon', icon);

  return <NLoading {...rest} icon={curIcon} />;
};

export const PageLoading = (props: Partial<LoadingProps> & { loading?: boolean, loadText?: string }) => {
  const { loading = false, children, direction = 'vertical', loadText = '加载中…', ...rest } = props;
  return (
    <>
      {children}
      <Overlay visible={loading}>
        <div
          className='wrapper'
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading {...rest} direction={direction}>{loadText}</Loading>
        </div>
      </Overlay >
    </>
  );
};
