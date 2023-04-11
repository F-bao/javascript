const arry = ["hello", ["1", 2, "3"], [4, 5, ["js", "vue", ["vue", "vuex"]]]];
flatArry = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatArry(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(...flatArry(arry));
const obj = {
  name: "hello",
  cast: "123",
  majer: {
    openid: "r"
  }
};
