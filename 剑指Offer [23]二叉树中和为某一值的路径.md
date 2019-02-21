# 剑指Offer [23]二叉树中和为某一值的路径

标签（空格分隔）： 算法

---

输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)

## Solution
这题属于简单题了。

解题思路十分简单：
每遍历一个节点，就计算传入的期望值与当前节点值的差，如果差为零并且当前节点的子节点都为null，则当前节点为符合条件的树叶节点，从根节点到该节点的路径就是符合条件的一条路径。

实际上就是深度优先遍历。

不知道为什么，用C++写就通过，用JS写就不通过，纳闷。

#### C++版本
```c++
/*
struct TreeNode {
	int val;
	struct TreeNode *left;
	struct TreeNode *right;
	TreeNode(int x) :
			val(x), left(NULL), right(NULL) {
	}
};*/
class Solution {
public:
    vector<vector<int>> res;
    vector<int> path;
    void find(TreeNode* root, int target) {
        if(!root) return;
        path.push_back(root->val);
        target = target - root->val;
        if(target == 0 && root->left == nullptr && root->right == nullptr) {
            res.push_back(path);
        } else {
            find(root->left, target);
            find(root->right, target);
        }
        path.pop_back();
    }
    vector<vector<int> > FindPath(TreeNode* root,int expectNumber) {
        find(root, expectNumber);
        return res;
    }
};
```

#### JavaScript版本（V8）
```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 深度优先遍历

let path = []; // 记录当前遍历的路径
let res = [];  // 记录符合条件的所有路径

function find(root, expectNumber) {
    if(!root) return;
    path.push(root.val);
    let result = expectNumber - root.val;
    if(result === 0 && !root.left && !root.right) {
        res.push(path.slice(0));
    } else {
        find(root.left, result);
        find(root.right, result);
    }
    path.pop();
}

function FindPath(root, expectNumber)
{
    // write code here
    find(root, expectNumber);
    return res;
}
```