import test from 'ava';
import Cordillera from '.';

test('new Cordillera is truthy', t => {
	const c = new Cordillera(0.7, 3, 3);
	// Console.log(c.map);
	t.truthy(c);
});

test('Cordillera.getLevels is truthy', t => {
	const c = new Cordillera(0.7, 3, 3);
	const l = c.getLevels(3);
	// Console.log(l);
	t.truthy(l);
});

test('Readme output', t => {
	const width = 3;
	const height = 5;
	const roughness = 0.7;
	const heightmap = new Cordillera(roughness, width, height);
	// Console.log(heightmap);
	const levels = heightmap.getLevels(3);
	// Console.log(levels);
	t.truthy(heightmap);
	t.truthy(levels);
});
