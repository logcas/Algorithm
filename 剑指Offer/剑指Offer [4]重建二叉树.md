# 剑指Offer [4]重建二叉树

标签（空格分隔）： 算法

---

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

## Solution
知识点：
1. 前序遍历序列和中序遍历序列可以唯一确定一颗二叉树。
2. 后序遍历序列和中序遍历序列可以唯一确定一颗二叉树。

思路：
1. 先从前序序列中找到第一个字符为根。
2. 再从中序中找到根所在的位置，根左方的序列为左子树，根右方的序列为右子树。
3. 递归1、2。

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length === 0 || vin.length === 0) return null;
    let rootIdx = vin.indexOf(pre[0]);
    let leftVin = vin.slice(0, rootIdx),
        leftPre = pre.slice(1, rootIdx + 1),
        rightVin = vin.slice(rootIdx + 1),
        rightPre = pre.slice(rootIdx + 1);
    return {
        val: pre[0],
        left: reConstructBinaryTree(leftPre, leftVin),
        right: reConstructBinaryTree(rightPre, rightVin)
    }
}
```