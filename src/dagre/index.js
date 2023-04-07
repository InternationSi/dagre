/*
 * @Author: sfy
 * @Date: 2023-04-07 15:19:09
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-07 15:19:10
 * @FilePath: /dagre/src/dagre/index.js
 * @Description: update here
 */
module.exports = {
  graphlib: require("./graphlib"),
  layout: require("./layout"),
  debug: require("./debug"),
  util: {
    time: require("./util").time,
    notime: require("./util").notime
  },
  version: require("./version")
};
