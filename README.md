# next-delete
> Multiple delete for object.


## install:
```bash
npm install -S afeiship/next-delete --registry=https://registry.npm.taobao.org
```

## tree
```conf
.
├── LICENSE.txt
├── README.md
├── bower.json
├── build
│   ├── build.js
│   ├── clean.js
│   ├── config.js
│   ├── scripts.js
│   └── styles.js
├── dist
│   ├── next-delete.js
│   └── next-delete.min.js
├── gulpfile.js
├── package.json
└── src
    └── next-delete.js
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
