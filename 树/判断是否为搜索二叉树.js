// 判断是否为搜索二叉树

function isBST(node) {
  let pre = -Infinity;
  const stack = [];
  let head = node;
  while(!!stack.length || head) {
    if (head) {
      stack.push(head);
      head = head.left;
    } else {
      head = stack.pop();
      if (head < pre) {
        return false;
      }
      head = head.right;
    }
  }
  return true;
}