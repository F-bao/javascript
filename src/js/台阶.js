function sum(n) {
	if (n <= 2) return n;
	let last1 = 1,
		last2 = 2;
	for (let i = 3; i <= n; i++) {
		let temp = last2;
		last2 = last1 + last2;
		last1 = temp;
	}
	return last2;
}

console.log(sum(6));
