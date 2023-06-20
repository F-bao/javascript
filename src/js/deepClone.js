//深拷贝
function deepClone(obj) {
  if (!(obj instanceof Array) || !(obj instanceof Object)) {
    return obj
  }

  let targetObj = obj instanceof Array ? [] : {}

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
    } else {
      const element = obj[key]
      if (element instanceof Array || element instanceof Object) {
        targetObj[key] = deepClone(element)
      } else {
        targetObj[key] = element
      }
    }
  }
  return targetObj
}

let obj = {
  a: 1,
  b: 2,
  list: ["a", "b"],
  listTwo: [
    {
      deep: "123"
    }
  ],
  c: undefined,
  d: () => {
    console.log(111)
  },
  e: {
    name: "fisk"
  }
}

let newObj = deepClone(obj)
console.log("obj===>", obj)
console.log("newObj===>", newObj)
// newObj.d()
