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

var width = 3;
var height = 5;
var roughness = .7;
const heightmap = new Cordillera(roughness, width, height);
/*
Cordillera {
  size: 9,
  width: 3,
  height: 5,
  max: 8,
  maxGenValue: 9.075803001895423,
  minGenValue: -2.206409904484188,
  map:
   [ [ 8, 9.007745742797852, 8.201483726501465 ],
     [ 6.600325584411621, 7.849488258361816, 7.690467834472656 ],
     [ 7.2525739669799805, 7.150480270385742, 4.565466403961182 ],
     [ 4.739648818969727, 5.628500938415527, 6.544771194458008 ],
     [ 3.1494858264923096, 3.598397970199585, 6.680818557739258 ] ] }
*/

const levels = heightmap.getLevels(3);

/*
	[ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 1 ], [ 1, 2, 2 ], [ 1, 1, 2 ] ]
*/

```

## License

MIT © [vikepic](https://vikepic.github.io)
