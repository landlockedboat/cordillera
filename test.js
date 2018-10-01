import test from 'ava';
import Cordillera from '.';

test('new Cordillera is truthy', t => {
	t.truthy(new Cordillera(3, 0.7));
});
