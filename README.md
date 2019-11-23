# next-delete
> Multiple delete for object.

## installation
```bash
npm install -S @feizheng/next-delete
```

## usage:
```js
import 'next-delete';

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
