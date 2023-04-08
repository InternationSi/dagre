/*
 * @Author: sfy
 * @Date: 2023-04-07 15:51:52
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-08 21:27:06
 * @FilePath: /dagre/rollup.config.js
 * @Description: update here
 */

import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import css from "rollup-plugin-import-css";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
export default {
  plugins: [
    nodeResolve(),
    css(),
    commonjs(),
    livereload(),
    serve({
      open: true,
      port: 8082,
      contentBase: "",
    }),
  ],
  input: "./index.js",
  output: [
    {
      format: "umd",
      name: "dagreD3",
      file: "./dist/index.umd.js",
    },
    {
      format: "es",
      name: "dagreD3",
      file: "./dist/index.es.js",
    },
    {
      format: "iife",
      name: "dagreD3",
      file: "./dist/index.browser.js",
    },
  ],
};
