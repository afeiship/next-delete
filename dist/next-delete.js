/*!
 * name: @feizheng/next-delete
 * url: https://github.com/afeiship/next-delete
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.delete = function(inObject, inArray) {
    var list =
      !inArray || inArray.length === 0 ? Object.keys(inObject) : inArray;
    list.forEach(function(key) {
      delete inObject[key];
    });
    return inObject;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delete;
  }
})();
