# next-delete
> Multiple delete for object.


## install:
```bash
npm install -S afeiship/next-delete --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-delete';

let obj = {
  name:'afei',
  age: 100,
  items:[1,2,3]
};

nx.delete(obj, ['name','age']);
```
