const clamp = require('math-clamp');

function Cordillera(roughness, width = 5, height = 5) {
	const detail = Math.ceil(Math.sqrt(Math.max(width, height)));
	this.size = Math.pow(2, detail) + 1;
	this.width = width;
	this.height = height;
	this.max = this.size - 1;
	this.maxGenValue = -Infinity;
	this.minGenValue = Infinity;
	this.map = new Float32Array(this.size * this.size);
	this.generate(roughness);
}

Cordillera.prototype.get = function (x, y) {
	if (x < 0 || x > this.max || y < 0 || y > this.max) {
		return -1;
	}
	return this.map[x + (this.size * y)];
};

Cordillera.prototype.set = function (x, y, val) {
	this.map[x + (this.size * y)] = val;
	if (val > this.maxGenValue) {
		this.maxGenValue = val;
	}

	if (val < this.minGenValue) {
		this.minGenValue = val;
	}
};

Cordillera.prototype.generate = function (roughness) {
	const self = this;
	this.set(0, 0, self.max);
	this.set(this.max, 0, self.max / 2);
	this.set(this.max, this.max, 0);
	this.set(0, this.max, self.max / 2);
	divide(this.max);

	function divide(size) {
		const half = size / 2;
		const scale = roughness * size;
		if (half < 1) {
			return;
		}
		for (let y = half; y < self.max; y += size) {
			for (let x = half; x < self.max; x += size) {
				square(x, y, half, (Math.random() * scale * 2) - scale);
			}
		}
		for (let y = 0; y <= self.max; y += half) {
			for (let x = (y + half) % size; x <= self.max; x += size) {
				diamond(x, y, half, (Math.random() * scale * 2) - scale);
			}
		}
		divide(size / 2);
	}

	function average(values) {
		const valid = values.filter(val => {
			return val !== -1;
		});
		const total = valid.reduce((sum, val) => {
			return sum + val;
		}, 0);
		return total / valid.length;
	}

	function square(x, y, size, offset) {
		const ave = average([
			self.get(x - size, y - size), // Upper left
			self.get(x + size, y - size), // Upper right
			self.get(x + size, y + size), // Lower right
			self.get(x - size, y + size) // Lower left
		]);
		self.set(x, y, ave + offset);
	}

	function diamond(x, y, size, offset) {
		const ave = average([
			self.get(x, y - size), // Top
			self.get(x + size, y), // Right
			self.get(x, y + size), // Bottom
			self.get(x - size, y) // Left
		]);
		self.set(x, y, ave + offset);
	}

	this._unflatten();
};

Cordillera.prototype._unflatten = function () {
	const ret = [];
	for (let y = 0; y < this.height; ++y) {
		const row = [];
		for (let x = 0; x < this.width; ++x) {
			const tile = this.map[(y * this.size) + x];
			row.push(tile);
		}
		ret.push(row);
	}
	this.map = ret;
};

Cordillera.prototype.getLevels = function (levels = 3) {
	if (levels < 1) {
		throw new Error(`Invalid number of levels: ${levels}`);
	}
	const min = this.minGenValue;
	const max = this.maxGenValue;
	const length = max - min;
	const ret = [];

	for (let y = 0; y < this.height; ++y) {
		const row = [];
		for (let x = 0; x < this.width; ++x) {
			const tile = this.map[y][x];
			const val = (tile - min) / length;
			let out = Math.floor(val * levels);
			out = clamp(out, 0, levels - 1);
			row.push(out);
		}
		ret.push(row);
	}
	return ret;
};

module.exports = Cordillera;
