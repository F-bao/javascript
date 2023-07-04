const cat = {
	name: "miao",
	age: "2",
	love: "fish"
};

function handle<T extends object, K extends keyof T>(obj: T, prop: K) {}

handle(cat, "love");
