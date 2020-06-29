/*!
 * name: @feizheng/next-delete
 * description: Multiple delete for object.
 * homepage: https://github.com/afeiship/next-delete
 * version: 1.0.3
 * date: 2020-06-29T01:12:12.552Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

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

//# sourceMappingURL=next-delete.js.map
