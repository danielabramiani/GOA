function smaller(arr) {
	const n = arr.length;
	if (n == 0) return [];
	const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
	const u = sorted.length;
	const ords = sorted.reduce((h, x, i) => ((h[x] = i), h), {});
	const tree = new Uint16Array(u + 1);
	const xs = arr.slice();
	for (let i = n - 1; i >= 0; --i) {
		const k = ords[arr[i]];
		xs[i] = _count(tree, k);
		_incr(tree, k + 1, u);
	}
	return xs;
}

function _count(tree, index) {
	let i = index + 1;
	let sum = 0;
	while (i > 0) (sum += tree[i]), (i -= i & -i);
	return sum;
}

function _incr(tree, index, n) {
	let i = index + 1;
	while (i <= n) ++tree[i], (i += i & -i);
}