# cordillera [![Build Status](https://travis-ci.org/vikepic/cordillera.svg?branch=master)](https://travis-ci.org/vikepic/cordillera)

> A heightmap generator. Shamelessly stolen from @hunterloftis.

## Install

```
$ npm install cordillera
```

## Usage

```js
const Cordillera = require('cordillera');

var detail = 3;
var roughness = .7;
var heightmap = new Cordillera(detail, roughness);
//=> Cordillera {
//  size: 9,
//  max: 8,
//  maxGenValue: 11.227859870062613,
//  minGenValue: 0,
//  map:
//   Float32Array [
//     8,
//     10.01533031463623,
//     9.313409805297852,
//     ...
//    ]
//  }

```

## License

MIT © [vikepic](https://vikepic.github.io)
