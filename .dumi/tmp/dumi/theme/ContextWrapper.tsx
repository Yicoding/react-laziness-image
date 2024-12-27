// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { history, useOutlet } from 'dumi';
import React, { useEffect, useRef, useState } from 'react';
import { locales } from '../locales/config';
import { components } from '../meta/atoms';
import {
  SiteContext,
  type ISiteContext,
} from '/Users/kaiyu.kong/kaiyu.kong/util/react-lazy-image/node_modules/dumi/dist/client/theme-api/context.js';
import { warning } from '/Users/kaiyu.kong/kaiyu.kong/util/react-lazy-image/node_modules/rc-util';

const entryExports = {};

// Static content
const pkg = {
  name: '@xmly/react-laziness-image',
  description: '增强型图片组件，支持 图片懒加载、webp格式 的效果',
  version: '1.0.0',
  license: 'MIT',
  repository: {
    type: 'git',
    url: 'https://gitlab.ximalaya.com/react-library/component/react-laziness-image',
  },
  authors: ['kaiyu.kong'],
};
const historyType = 'hash';
const hostname = undefined;
const themeConfig = {
  footer:
    'Copyright © 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
  prefersColor: { default: 'light', switch: true },
  nprogress: true,
  lastUpdated: true,
  name: 'ReactLazinessImage',
  logo: 'https://imagev2.xmcdn.com/storages/f8d2-audiofreehighqps/81/43/GMCoOSYIO18uAAAvaAIdYbXD.png',
};
const _2_level_nav_available = true;

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  const context: ISiteContext = React.useMemo(() => {
    const ctx = {
      pkg,
      historyType,
      entryExports,
      demos: null,
      components,
      locales,
      loading,
      setLoading,
      hostname,
      themeConfig,
      _2_level_nav_available,
    };

    // Proxy do not warning since `Object.keys` will get nothing to loop
    Object.defineProperty(ctx, 'demos', {
      get: () => {
        warning(
          false,
          '`demos` return empty in latest version, please use `useDemo` instead.',
        );
        return {};
      },
    });

    return ctx;
  }, [
    pkg,
    historyType,
    entryExports,
    components,
    locales,
    loading,
    setLoading,
    hostname,
    themeConfig,
    _2_level_nav_available,
  ]);

  return <SiteContext.Provider value={context}>{outlet}</SiteContext.Provider>;
}