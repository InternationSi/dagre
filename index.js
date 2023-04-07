/*
 * @Author: sfy
 * @Date: 2023-04-07 15:08:14
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-07 15:22:01
 * @FilePath: /dagre/index.js
 * @Description: update here
 */
/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

module.exports =  {
  graphlib: require("./src/d3-dagre/graphlib"),
  dagre: require("./src/d3-dagre/dagre"),
  intersect: require("./src/d3-dagre/intersect"),
  render: require("./src/d3-dagre/render"),
  util: require("./src/d3-dagre/util"),
  version: require("./src/d3-dagre/version")
};
