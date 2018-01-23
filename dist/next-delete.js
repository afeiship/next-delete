(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.delete = function (inObject, inArray) {
    inArray.forEach(function (key) {
      delete inObject[key];
    });
    return inObject;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.delete;
  }

}());
