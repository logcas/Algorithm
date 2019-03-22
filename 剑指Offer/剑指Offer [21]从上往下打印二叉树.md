# 剑指Offer [21]从上往下打印二叉树

标签（空格分隔）： 算法

---

从上往下打印出二叉树的每个节点，同层节点从左至右打印。

## Solution
从上到下，从左到右，一看就知道是广度优先遍历，因此需要借助一个辅助的对列结构去完成。

一开始先把根节点放入队列中。

每次从队列取一个节点，先遍历节点自身的元素，再以先左后右的方式把子节点依次放入队列中，不断循环队列，直到队列为空。

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    if(!root) return [];
    let list = [],
        queue = [];
    queue.push(root);
    while(queue.length!==0) {
        let tmpRoot = queue.shift();
        if(tmpRoot.left) {
            queue.push(tmpRoot.left);
        }
        if(tmpRoot.right) {
            queue.push(tmpRoot.right);
        }
        list.push(tmpRoot.val);
    }
    return list;
}
```