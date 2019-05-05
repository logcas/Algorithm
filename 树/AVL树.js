// AVL树（二叉搜索树）
// 性质：
//   1. 对于任何一个节点，其左子树的所有节点均小于它，其右子树的所有节点均大于它。
//   2. 对AVL树进行中序遍历，可以在O(n)的时间复杂度下得到一个有序序列。

// AVL树的操作
class Node {
  constructor(val) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const tree = new Node(10); // tree root

// 1. 插入
//    如果插入元素小于该节点，则从它的左子树中插入
//    如果插入元素大于该节点，则从它的右子树中插入
//    直到左子树（或右子树）为null，则结束寻找，插入

function Insert(val) {
  let p = tree;
  let pp = null;
  while(p) {
    if(p.val > val) {
      pp = p;
      p = p.left;
    } else {
      pp = p;
      p = p.right;
    }
  }
  const newNode = new Node(val);
  if(pp.val > val) {
    pp.left = newNode;
  } else {
    pp.right = newNode;
  }
}

// 2. 查找
//    查找很简单，利用AVL树的性质
function find(val) {
  let p = tree;
  while(p && p.val !== val) {
    if(p.val > val) {
      p = p.left;
    } else {
      p = p.right;
    }
  }
  return p;
}

// 3. 删除
//    删除是AVL树比较复杂的操作之一
//    主要分为以下三种情况：
//    (1) 被删除节点没有子节点，即左子树和右子树均为null，立即删除即可
//    (2) 被删除节点只有左子树或只有右子树，删除节点，把父节点的指针指向它的子节点即可。
//    (3) 被删除节点同时拥有左子树和右子树，则需要寻找右子树中的最小节点去替换被删除节点，即把右子树中最小节点的数据
//        替换到被删除节点中，然后运用规则(1)(2)(3)删除右子树中的最小节点。

function remove(val) {
  let p = tree;
  let pp = null;
  while(p && p.val !== val) {
    if(p.val > val) {
      pp = p;
      p = p.left;
    } else {
      pp = p;
      p = p.right;
    }
  }
  if(!p) return null;
  // 如果有左子树和右子树
  while(p.left && p.right) {
    let tmp = p.right;
    let tmpp = p;
    while(tmp.left) {
      tmpp = tmp;
      tmp = tmp.left;
    }
    p.val = tmp.val;
    p = tmp;
    pp = tmpp;
  }

  // 如果只有左子树或右子树或没有子树
  let child;
  if(p.left) child = p.left;
  else if(p.right) child = p.right;
  else child = null;

  if(pp === null) tree = child; // 删除的是根节点
  else if(pp.left === p) pp.left = child;
  else pp.right = child;
}

// AVL树的时间复杂度
// 1. 最坏：当AVL树极度不平衡，退化成单链表
//  5
//   \
//    6
//     \
//      7
// 显然时间复杂度就是O(n)
//
// 2. 最好：当AVL树极度平衡，为满二叉树，最理想的状态
//      5
//    /  \
//   3    8
// 时间复杂度根树的高度成正比，为O(logn) 
//
// 3. 平均：
// 当AVL树接近平衡，或者高度差较小的时候，查找、插入、删除的时间复杂度为O(logn)

// AVL树处理重复数据
// 在实际应用中，会存在很多键值重复的数据，对于AVL树处理重复数据
// 有两种较为常用的处理方法：
// 1. 一个节点存放多个值
// 2. 在插入重复元素时，把它当成大于重复元素的结点，插入到重复结点的右子树中。