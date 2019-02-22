# 剑指Offer [25]二叉搜索树与双向链表

标签（空格分隔）： 算法

---

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

## Solution
要完成这题，必须先明白什么是二叉搜索树，二叉搜索树的性质是什么。对于二叉搜索树的节点，它的左子树上的每一个节点都是小于它的，而它的右子树上的每一个节点都是大于它的。根据这个性质，很容易知道根据中序遍历很容易得到一个升序的序列。并且，我们设置一个pre指针指向前一个节点，用于辅助连接树的节点。

#### JavaScript 版
```javascript
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

let pre = null;

function inOrderSearch(root) {
    if(!root) return;
    inOrderSearch(root.left);
    root.left = pre;
    if(pre) pre.right = root;
    pre = root;
    inOrderSearch(root.right);
}

function Convert(pRootOfTree)
{
    // write code here
    // 中序遍历即可     
    if(!pRootOfTree) return null;
    inOrderSearch(pRootOfTree, pre);

    let res = pRootOfTree;
    while(res.left) {
        res = res.left;
    }
    return res;
}
```

#### C++ 版
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
    TreeNode* Convert(TreeNode* pRootOfTree)
    {
        if(pRootOfTree == nullptr) return nullptr;
        
        TreeNode* pre = nullptr;
        InorderSearch(pRootOfTree, pre);
        
        while(pRootOfTree->left) {
            pRootOfTree = pRootOfTree->left;
        }
        return pRootOfTree;
    }
    
    void InorderSearch(TreeNode* root, TreeNode*& pre) {
        if(root == nullptr) return;
        
        InorderSearch(root->left, pre);
        
        root->left = pre;
        if(pre) pre->right = root;
        pre = root;
        
        InorderSearch(root->right, pre);
    }
};
```