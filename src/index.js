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
