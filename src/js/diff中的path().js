// 1、初始化  patch(container,vnode)
// 2、更新 update(vnode,newVnode)

function createElement(vnode) {
  let tag = vnode.tag; // 目标元素
  let attrs = vnode.attrs || {}; //属性
  let children = vnode.children || []; //子节点

  if (!tag) {
    return null;
  }

  //1、创建对应的dom
  let elem = document.createElement(tag);
  let attrName;
  //2、给对应的dom添加属性
  for (let attrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      elem.setAttribute(attrName, attrs[attrName]);
    }
  }

  //3、将子元素添加到目标上
  children.forEach((childVnodde) => {
    elem.appendChild(createElement(childVnodde));
  });

  return elem;
}

function updateChildren(vnode, newVnode) {
  let children = vnode.children || []; //现有节点
  let newChildren = newVnode || []; //新节点

  children.forEach((VNodeChildren, index) => {
    //拿到循环的每一项
    let newChildrenVnode = newChildren[index];
    if (VNodeChildren.tag === newVnode.tag) {
      //第一层么有变化
      updateChildren(VNodeChildren, newChildrenVnode);
    } else {
      //变化的
      replaceNode(VNodeChildren, newChildrenVnode);
    }
  });
}
