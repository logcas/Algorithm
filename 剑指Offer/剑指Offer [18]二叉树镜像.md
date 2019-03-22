# 剑指Offer [18]二叉树镜像

标签（空格分隔）： 算法

---

操作给定的二叉树，将其变换为源二叉树的镜像。

```
二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
```

## Solution
要求镜像二叉树，实际上就是遍历每个节点，把左子树和右子树调转即可。

ES6解构赋值语法加成，整个写起来贼整洁。

```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(!root) return null;
    [root.left, root.right] = [Mirror(root.right), Mirror(root.left)];
    return root;
}
```
