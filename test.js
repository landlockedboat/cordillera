import test from 'ava';
import Cordillera from '.';

test('new Cordillera is truthy', t => {
	t.truthy(new Cordillera(3, 0.7));
});

test('Cordillera.getLevels is truthy', t => {
	t.truthy(new Cordillera(3, 0.7).getLevels(3));
});
