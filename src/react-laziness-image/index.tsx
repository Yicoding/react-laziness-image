import type { FC } from 'react';
import React, { useEffect } from 'react';

import { observeInit } from '../_utils/lazy';

/** 图片组件类型 */
export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** 图片地址 */
  src: string;
  /** 兜底图 */
  defaultSrc?: string;
  /** 是否使用图片懒加载，默认使用 */
  useLazy?: boolean;
};

const ReactLazyImagePro: FC<ImageProps> = (props) => {
  const {
    useLazy = true,
    className,
    style,
    src,
    defaultSrc,
    ...resProps
  } = props;

  // 初始化懒加载库
  useEffect(() => {
    observeInit();
  }, []);

  // 图片属性
  const srcProps = {
    style,
    className,
    onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (defaultSrc) {
        e.currentTarget.src = defaultSrc;
      }
    },
    ...resProps,
  };

  // 懒加载功能
  Object.assign(srcProps, {
    [useLazy ? 'data-src' : 'src']: src,
  });

  return <img {...srcProps} />;
};

export default ReactLazyImagePro;
