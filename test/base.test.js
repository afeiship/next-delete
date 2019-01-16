var nxDel = require('../src/next-delete');

test('basic test', () => {
  var obj = {
    name: 'fei',
    age: 100
  };

  var obj2 = {
    name: 'afei',
    age: 100,
    items: [1, 2, 3]
  };

  expect(nxDel(obj, ['age'])).toEqual({ name: 'fei' });
  expect(nxDel(obj2, ['name', 'age'])).toEqual({ items: [1, 2, 3] });
});
