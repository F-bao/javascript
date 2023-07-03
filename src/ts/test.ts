const a: number = 100;

let fun = (): [] => {
	return [];
};
function func(): [] {
	return [];
}

let fun2 = (a: number, b: number): number => a + b;

export function reverseNumber(num: number): number {
	let res = Number(num.toString().split("").reverse().join(""));
	return res;
}

export function reverseString(str: string): string {
	return str.split("").reverse().join("");
}

export interface IPerson {
	readonly name: string;
	age: number;
	career?: string;
	isNickLooking: boolean;
}

export interface IFun {
	(x: number, y: number): number;
}

export function debounce(func: Function, wait: number, immediate: boolean = false) {
	let timer: any;

	return function (this: any, ...args: any[]) {
		const context = this;

		clearTimeout(timer);

		timer = setTimeout(() => {
			timer = null;
			if (!immediate) {
				func.apply(context, args);
			}
		}, wait);

		if (immediate && !timer) {
			func.apply(context, args);
		}
	};
}

let f = debounce(
	function () {
		console.log(222);
	},
	3000,
	true
);
f();