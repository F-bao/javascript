// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   },1000)
// }
//统计字符串重复出现次数
let array = [..."agkgjihkjkgsdosadcn"].reduce((a, b) => {
  a[b] ? a[b]++ : (a[b] = 1);
  return a;
}, {});
console.log(array);

let arr = [..."agkgjihkjkgsdosadcn"];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = obj[arr[i]] + 1 || 1;
  if (obj[arr[i]] === 2) {
    console.log(arr[i]);
    break;
  }
}
console.log(obj);

Promise.reject(console.log(11)).then(() => {
  console.log(222);
});
