const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withImages = require('next-images');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// hijacked from css-loader/dist/utils and slightly modified...
const _path = require('path');
const _loaderUtils = require('loader-utils');
const _normalizePath = require('normalize-path');
const _cssesc = require('cssesc');
const filenameReservedRegex = /[<>:"/\\|?*\x00-\x1F]/g; // eslint-disable-next-line no-control-regex
const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;
const reRelativePath = /^\.+/;
const defaultGetLocalIdent = (
  loaderContext,
  localIdentName,
  localName,
  options
) => {
  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = loaderContext.rootContext;
  }

  const request = (0, _normalizePath)(
    _path.relative(options.context || '', loaderContext.resourcePath)
  ); // eslint-disable-next-line no-param-reassign

  options.content = `${options.hashPrefix + request}+${unescape(localName)}`; // Using `[path]` placeholder outputs `/` we need escape their
  // Also directories can contains invalid characters for css we need escape their too

  return (0, _cssesc)(
    _loaderUtils
      .interpolateName(loaderContext, localIdentName, options) // For `[hash]` placeholder
      .replace(/^((-?[0-9])|--)/, '_$1')
      .replace(filenameReservedRegex, '-')
      .replace(reControlChars, '-')
      .replace(reRelativePath, '-')
      .replace(/\./g, '-'),
    {
      isIdentifier: true,
    }
  ).replace(/\\\[local\\\]/gi, localName);
};

const isTestEnv = process.env.NODE_ENV === 'test';
const isProdEnv = process.env.NODE_ENV === 'production';
const isDevEnv = !isTestEnv && !isProdEnv;

let BASE_API_ADDRESS = '';

let BASE_OAUTH2_URL = '';

if (isTestEnv) {
  BASE_API_ADDRESS = 'http://localhost:9999';
  BASE_OAUTH2_URL = encodeURIComponent('https://m.shinhwe.com:445/login');
}

if (isProdEnv) {
  BASE_API_ADDRESS = 'http://localhost:9999';
  BASE_OAUTH2_URL = encodeURIComponent('https://m.otoloka.id/login');
}

if (isDevEnv) {
  // BASE_API_ADDRESS = 'http://192.168.11.152:9999';
  BASE_API_ADDRESS = 'http://192.168.1.172:9999';
  BASE_OAUTH2_URL = encodeURIComponent('https://localhost/login');
}

module.exports = withImages(
  withFonts(
    withCSS(
      withSass({
        webpack: (config) => {
          config.optimization.minimizer = [];
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
          config.plugins.push(
            new FilterWarningsPlugin({
              exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
            })
          );
          return config;
        },
        cssModules: true,
        cssLoaderOptions: {
          getLocalIdent: (
            loaderContext,
            localIdentName,
            localName,
            options
          ) => {
            const filePath = loaderContext.resourcePath;
            const isModule =
              filePath.includes('.module.scss') ||
              filePath.includes('.module.css');
            if (isModule) {
              return defaultGetLocalIdent(
                loaderContext,
                localIdentName,
                localName,
                options
              );
            } else {
              return localName;
            }
          },
        },
        distDir: 'dist',
        env: {
          BASE_API_ADDRESS,
          BASE_OAUTH2_URL,
        },
      })
    )
  )
);
