# 剑指Offer [37]平衡二叉树

标签（空格分隔）： 算法

---

输入一棵二叉树，判断该二叉树是否是平衡二叉树。

## Solution
平衡二叉树：对于一颗二叉树，其任意一个结点的左子树高度和右子树高度之差小于或等于1。

解决思想是：
1. 如果左子树是平衡二叉树，得到左子树高度left。
2. 如果右子树是平衡二叉树，得到右子树高度right。
3. 如果左右子树高度差小于等于1，则返回其中高度最大值+1，否则返回-1表示不是平衡二叉树。

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function getRootLength(root) {
    if(!root) return 0;
    let left = getRootLength(root.left);
    if(left === -1) return -1;
    let right = getRootLength(root.right);
    if(right === -1) return -1;
    return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right);
}

function IsBalanced_Solution(pRoot)
{
    return getRootLength(pRoot) !== -1;
}
```




