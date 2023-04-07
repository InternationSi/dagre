/*
 * @Author: sfy
 * @Date: 2023-04-07 15:13:56
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-07 15:20:31
 * @FilePath: /dagre/src/d3-dagre/dagre.js
 * @Description: update here
 */
// eslint-disable-next-line no-redeclare
/* global window */

var dagre;

if (typeof require === "function") {
  try {
    dagre = require("../dagre");
  } catch (e) {
    // continue regardless of error
  }
}

if (!dagre) {
  dagre = window.dagre;
}

module.exports = dagre;
