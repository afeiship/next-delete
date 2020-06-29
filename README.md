# next-delete
> Multiple delete for object.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-delete
```

## usage
```js
import '@feizheng/next-delete';

let obj = {
  name:'afei',
  age: 100,
  items:[1,2,3]
};

let obj2 = {
  name:'afei',
  age: 100
};

// delete some items:
nx.delete(obj, ['name','age']);

// or empty the object;
nx.delete(obj2);
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-delete/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-delete
[version-url]: https://npmjs.org/package/@feizheng/next-delete

[license-image]: https://img.shields.io/npm/l/@feizheng/next-delete
[license-url]: https://github.com/afeiship/next-delete/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-delete
[size-url]: https://github.com/afeiship/next-delete/blob/master/dist/next-delete.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-delete
[download-url]: https://www.npmjs.com/package/@feizheng/next-delete
