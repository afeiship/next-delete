/*!
 * name: @jswork/next-delete
 * description: Multiple delete for object.
 * homepage: https://github.com/afeiship/next-delete
 * version: 1.0.1
 * date: 2021-01-06 21:58:39
 * license: MIT
 */

(function () {
  var global = global || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.delete = function (inObject, inArray) {
    var list = !inArray || inArray.length === 0 ? Object.keys(inObject) : inArray;
    list.forEach(function (key) {
      delete inObject[key];
    });
    return inObject;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delete;
  }
})();
