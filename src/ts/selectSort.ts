function selectSort(arr: Array<any>): Array<any> {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
}

let arr = [2, 4, 5, 2, 5, 6, 7, 8, 10, 20, 0];
let res = selectSort(arr);
console.log(res);
