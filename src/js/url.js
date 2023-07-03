// const getParamByUrl = (key) => {
//   const url = new URL(location.href)
//   return url.searchParams.get(key)
// }

const { log } = require("console");

// const url = getParamByUrl(
//   'https://www.bilibili.com/video/BV1Xa411z7Hc/?p=10&spm_id_from=pageDriver&vd_source=8e7775e8f80311672d92dcbdaba484d9'
// )
/*
var obj = {
	a: 1
};
(function (obj) {
	console.log(obj.a);

	obj.a = 3;

	var obj = {
		a: 2
	};
	console.log(obj.a);
})(obj);
console.log(obj.a);
*/
// let ret = [1, 2, 3, 4, 5].reduce((pre, cur) => {
// 	return pre + cur;
// });

// console.log(ret);

// const a = {
// 	value: 1,
// 	/**
// 	 * A description of the entire function.
// 	 *
// 	 * @return {type} description of return value
// 	 */
// 	valueOf: () => {
// 		return a.value++;
// 	}
// };

// if (a == 1 && a == 2 && a == 3) {
// 	console.log("success");
// }

//编写一个防抖函数
debounce = (delay, value) => {
	let timer;
	return value => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			console.log(value);
		}, delay);
	};
};

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let res = Array.from(array);
console.log(res);
