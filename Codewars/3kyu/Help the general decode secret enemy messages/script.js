const chrs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.0123456789? ";

function build_alphabets_table() {
	return chrs.split("").map(function (c) {
		return device.encode(new Array(67).join(c));
	});
}

device.decode = function (w) {
	const tbl = build_alphabets_table();
	return w.replace(/./g, function (c, i) {
		return (
			chrs[
				tbl
					.map(function (a) {
						return a[i % 66];
					})
					.indexOf(c)
			] || c
		);
	});
};