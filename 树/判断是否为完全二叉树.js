// 判断是否为完全二叉树
// 判断完全二叉树：
//    按层遍历：
//    1. 一个结点，不存在有有孩子而没有左孩子
//    2. 当遇到一个结点，只有左孩子或者没有孩子，这个结点以后的结点，都必须是叶子结点

function isCompleteBinaryTree(node) {
  let isLeaf = false;
  const queue = [];
  queue.push(node);
  let p;
  while (queue.length)  {
    p = queue.shift();
    if (isLeaf && (p.left || p.right)) {
      return false;
    }
    if (!p.left && p.right) { 
      return false;
    }
    if ((p.left && !p.right) || (!p.left && !p.right)) {
      isLeaf = true;
    }
    p.left && (queue.push(p.left));
    p.right && (queue.push(p.right));
  }
  return true;
}