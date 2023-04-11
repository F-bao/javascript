//订阅器模型
let Dep = {
  clientList: [],

  //订阅
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
      this.clientList[key].push(fn);
    }
  },

  //发布
  trigger: function () {
    let key = Array.prototype.shift.call(arguments);
    let fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }

    for (let i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments);
    }
  }
};

//用来做数据劫持
let hiJack = ({ data, tag, dataKey, selector }) => {
  let value = "";
  let el = document.querySelector(selector);
  Object.defineProperty(data, dataKey, {
    //取值
    get: function () {
      console.log("取值");
      return value;
    },
    //赋值
    set: function (val) {
      console.log("赋值");
      value = val;
      //发布
      Dep.trigger(tag, val);
    }
  });
  //订阅
  Dep.listen(tag, function (text) {
    el.innerHtml = text;
  });
};
