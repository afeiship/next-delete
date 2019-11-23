var nx = require('@feizheng/next-js-core2');
require('../src/next-delete');

describe('Basic test', () => {
  var obj;
  var obj2;

  beforeAll(() => {
    obj = {
      name: 'fei',
      age: 100
    };

    obj2 = {
      name: 'afei',
      age: 100,
      items: [1, 2, 3]
    };
  });

  test('delete items', function() {
    expect(nx.delete(obj, ['age'])).toEqual({ name: 'fei' });
    expect(nx.delete(obj2, ['name', 'age'])).toEqual({ items: [1, 2, 3] });
  });

  test('delet all without inArray', function() {
    expect(nx.delete(obj)).toEqual({});
  });

  test('delet all with empty array', function() {
    expect(nx.delete(obj, [])).toEqual({});
  });
});
