// 前序遍历
// 递归版
function preOrder(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}
// 非递归版
function preOrder2(node) {
  const stack = [];
  stack.push(node);
  while(!!stack.length) {
    const n = stack.pop();
    console.log(n.value);
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
}

// 中序遍历
// 递归版
function inOrder(node) {
  if (node) {
    preOrder(node.left);
    console.log(node.value);
    preOrder(node.right);
  }
}
// 非递归版
function inOrder2(node) {
  const stack = [];
  let head = node;
  while(!!stack.length || head) {
    if (head) {
      stack.push(head);
      head = head.left;
    } else {
      head = stack.pop();
      console.log(head.value);
      head = head.right;
    }
  }
}

// 后序遍历
// 递归版
function postOrder(node) {
  if (node) {
    preOrder(node.left);
    preOrder(node.right);
    console.log(node.value);
  }
}
// 非递归版
function postOrder2(node) {
  const helper = [];
  const stack = [];
  stack.push(node);
  while(!!stack.length) {
    const n = stack.pop();
    helper.push(n.value);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  for(let n of helper.reverse()) {
    console.log(n);
  }
}