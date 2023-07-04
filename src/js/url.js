// const getParamByUrl = (key) => {
//   const url = new URL(location.href)
//   return url.searchParams.get(key)
// }

// const url = getParamByUrl(
//   'https://www.bilibili.com/video/BV1Xa411z7Hc/?p=10&spm_id_from=pageDriver&vd_source=8e7775e8f80311672d92dcbdaba484d9'
// )
/**
 * 防抖
 * @author fisk
 * @param {Number} delay 防抖函数执行前等待时间
 * @param {Function} func 防抖目标函数
 * @return {Function} 返回防抖函数
 */
function debounce(delay = 500, func) {
	let timer;
	return function (...arg) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, arg);
		}, delay);
	};
}

const t = debounce(2000, function () {
	console.log("hello");
});
t();
