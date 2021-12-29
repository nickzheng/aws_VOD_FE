// ref: https://umijs.org/config/
import devConfig from './config/config.dev';
import prodConfig from './config/config.prod';

export default {
  define: process.env.UMI_ENV !== 'prod' ? devConfig : prodConfig,
  chainWebpack(config) {
    config.module
      .rule('ttf')
      .test(/.ttf$/)
      .use('file-loader')
      .loader('file-loader');
  },
  hash: true,
  treeShaking: true,
  routes: require('./router'),
  history: 'hash',
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'ABC',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
