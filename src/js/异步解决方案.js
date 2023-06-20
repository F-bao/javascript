// function fun() {
//   let res
//   setTimeout(() => {
//     res = 'nihao'
//   }, 100)
//   console.log('res==>', res)
// }
//
// fun()

//callback 回调函数
// function getData(callback) {
//   let res
//   setTimeout(() => {
//     callback('hello')
//   }, 100)
//   console.log('res==>', res)
// }
//
// getData((res) => {
//   console.log('res===>', res)
// })

//promise

function promiseFun() {
  return new Promise((resolve, reject) => {
    // resolve('success')
    reject("fail");
  });
}

promiseFun()
  .then(res => {
    console.log("res===>", res);
  })
  .catch(reason => {
    console.log(reason);
  });
