/* eslint-disable prefer-regex-literals */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/order
const common = require("./webpack.common.js");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "./sw.bundle.js",
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://restaurant-api.dicoding.dev"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300, // Cache expired setelah 5 menit
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: "CacheFirst",
          options: {
            cacheName: "image-cache",
            expiration: {
              maxEntries: 20,
              maxAgeSeconds: 7 * 24 * 60 * 60, // Cache expired setelah 1 minggu
            },
          },
        },
        {
          urlPattern: new RegExp("/"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "html-cache",
          },
        },
      ],
    }),
  ],
});
