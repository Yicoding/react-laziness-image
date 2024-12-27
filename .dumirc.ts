import { defineConfig } from 'dumi';

const publicPath =
  process.env.NODE_ENV === 'production'
    ? `/react-laziness-image/refs/heads/master/`
    : '/';

const logo =
  'https://imagev2.xmcdn.com/storages/f8d2-audiofreehighqps/81/43/GMCoOSYIO18uAAAvaAIdYbXD.png';

export default defineConfig({
  outputPath: 'site',
  themeConfig: {
    name: 'react-laziness-image',
    logo,
  },
  publicPath,
  history: {
    type: 'hash',
  },
  hash: true,
  favicons: [logo],
});
