/*!
 * name: @jswork/next-delete
 * description: Multiple delete for object.
 * homepage: https://github.com/afeiship/next-delete
 * version: 1.0.2
 * date: 2021-01-09 16:07:31
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
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
