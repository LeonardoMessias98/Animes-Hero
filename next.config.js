/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

module.exports = {
  images: {
    domains: ["media.kitsu.io"],
  },
  ...withLess({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "@primary-color": "#FF0066",
          "@layout-header-background": 'transparent',
          "@layout-header-height": "max-content",
        },
        javascriptEnabled: true,
      },
    },
  }),
};
