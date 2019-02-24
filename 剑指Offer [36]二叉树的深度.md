# 剑指Offer [36]二叉树的深度

标签（空格分隔）： 算法

---

输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

## Solution
用递归很容易实现：
1. 当node == NULL时，返回0，
2. 否则返回左子树高度和右子树高度之间的最大值+1。

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot)
{
    if(!pRoot) return 0;
    return Math.max(1 + TreeDepth(pRoot.left), 1 + TreeDepth(pRoot.right));
}
```



