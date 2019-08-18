// 在时间复杂度小于O(n)的情况下计算完全二叉树的结点个数
// e.g.
//  1. 对于满二叉树而言，若层数为n，对应的满二叉树的结点个数为 2^n - 1


// 时间复杂度 O((logn)^2)
function calCBT(node) {
  return getCBTNodeSum(node, 1, getLeftMax(node));
}

function getCBTNodeSum(node, level, h) {
  if (!node) {
    return 0;
  }
  if (level === h) {
    return 1;
  }
  if (getLeftMax(node.right) === h - level) {
    return (1 << (h - level)) + getCBTNodeSum(node.right, level + 1, h);
  } else {
    return (1 << (h - level - 1)) + getCBTNodeSum(node.left, level + 1, h);
  }
}

function getLeftMax(node) {
  if (!node) {
    return 0;
  }
  let t = 0;
  while(node) {
    ++t;
    node = node.left;
  }
  return t;
}