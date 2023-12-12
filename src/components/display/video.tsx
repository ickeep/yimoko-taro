import { Video as NVideo, VideoProps } from '@nutui/nutui-react-taro';
import { judgeIsEmpty } from '@yimoko/store';
import React, { useMemo } from 'react';

const getVideoType = (strPath: string) => {
  const strArr: string[] = strPath.split('.');
  return strArr[strArr.length - 1];
};

export const Video = (props: Partial<VideoProps> & { value?: string }) => {
  const { value, source, ...rest } = props;

  const curSource = useMemo(() => {
    if (judgeIsEmpty(source) && value) {
      return { src: value, type: `video/${getVideoType(value)}` };
    }
    return source;
  }, [value, source]);

  return <NVideo {...rest} source={curSource} />;
};
