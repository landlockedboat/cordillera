# cordillera [![Build Status](https://travis-ci.org/vikepic/cordillera.svg?branch=master)](https://travis-ci.org/vikepic/cordillera)

> A heightmap generator. Shamelessly stolen from @hunterloftis.

For more info about how it works, visit this [page](http://www.playfuljs.com/realistic-terrain-in-130-lines/);

## Install

```
$ npm install cordillera
```

## Usage

```js
const Cordillera = require('cordillera');

var detail = 3;
var roughness = .7;
const heightmap = new Cordillera(detail, roughness);

/*
Cordillera {
  size: 9,
  max: 8,
  maxGenValue: 8.877248240424546,
  minGenValue: 0,
  map:
   Float32Array [
     8,
     8.87724781036377,
     7.392035484313965,
     ...
   ]
}
*/

const levels = heightmap.getLevels(3);

/*
  [
		[ 2, 2, 2, 2, 2, 2, 1, 1, 1 ],
		[ 2, 2, 2, 2, 2, 1, 1, 2, 2 ],
		[ 1, 2, 2, 2, 2, 2, 2, 2, 2 ],
		[ 1, 1, 2, 2, 2, 2, 2, 2, 2 ],
		[ 1, 1, 0, 1, 1, 2, 2, 2, 2 ],
		[ 1, 0, 0, 1, 1, 2, 2, 2, 2 ],
		[ 1, 1, 0, 0, 1, 1, 1, 2, 2 ],
		[ 1, 0, 1, 1, 1, 1, 0, 1, 0 ],
		[ 1, 1, 1, 1, 1, 1, 0, 0, 0 ] 
	]
*/

```

## License

MIT © [vikepic](https://vikepic.github.io)
