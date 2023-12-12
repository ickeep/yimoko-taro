import { observer } from '@formily/react';
import { Swiper as NSwiper, SwiperProps as NSwiperProps } from '@nutui/nutui-react-taro';
import { IOptionsAPIProps, useAPIOptions } from '@yimoko/store';
import React, { FC, useMemo } from 'react';

import { useNavigate } from '../../hooks/use-router';
import { Image } from '../base/image';

import { Video } from './video';


type ISwiperFC = FC<Partial<NSwiperProps> & Omit<IOptionsAPIProps<'value' | 'type' | 'src' | 'url' | 'itemId' | 'skipHiddenItemLayout'>, 'valueType'>>;

type ISwiper = ISwiperFC & { Item: typeof NSwiper.Item };

const SwiperFC: ISwiperFC = observer((props) => {
  const { children, options, api, keys, splitter, ...rest } = props;
  const [data] = useAPIOptions(options, api, keys, splitter) as any[];
  const navigate = useNavigate();

  const dataChildren = useMemo(() => data.map((item, index) => {
    const { value, src, type, ...args } = item;
    const curSrc = src ?? value;
    return (
      <NSwiper.Item key={value ?? index} {...args} onClick={() => item.url && navigate(item.url)} >
        {type === 'video'
          ? <Video value={curSrc} />
          : <Image src={curSrc} width='100%' height='100%' />
        }
      </NSwiper.Item>
    );
  }), [data, navigate]);

  // @ts-ignore
  return <NSwiper {...rest} >{dataChildren}{children}</NSwiper>;
});

export const Swiper = SwiperFC as ISwiper;
Swiper.Item = NSwiper.Item;
