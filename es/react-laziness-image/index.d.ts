import type { FC } from 'react';
import React from 'react';
/** 图片组件类型 */
export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  /** 图片地址 */
  src: string;
  /** 兜底图 */
  defaultSrc?: string;
  /** 是否使用图片懒加载，默认使用 */
  useLazy?: boolean;
};
declare const ReactLazyImagePro: FC<ImageProps>;
export default ReactLazyImagePro;
