import { Button, Empty, Space } from '@nutui/nutui-react-taro';
import { ErrorProps, judgeIsNetworkError } from '@yimoko/store';
import React, { useMemo } from 'react';

import { router } from '../../hooks/use-router';
import { useConfig } from '../../store/config';

import { PageLoading } from './loading';

export const ErrorContent = (props: ErrorProps) => {
  const { isReturnIndex, loading, onAgain, icon, children, response } = props;
  const config = useConfig();
  const { indexPage } = config;

  const status = useMemo(() => {
    if (judgeIsNetworkError(response)) {
      return 'network';
    }
    if (response?.code === 404) {
      return 'empty';
    }
    return 'error';
  }, [response]);

  const returnIndex = () => {
    router.redirect(indexPage ? indexPage : '/pages/index/index');
  };

  return (
    <PageLoading loading={loading} >
      <Empty status={status} description={response?.msg} image={icon}>
        <Space style={{ marginTop: '10px' }}>
          {isReturnIndex && <Button onClick={returnIndex}>返回首页</Button>}
          {onAgain && <Button type='primary' onClick={onAgain}>再试一次</Button>}
        </Space>
        {children}
      </Empty>
    </PageLoading >
  );
};
