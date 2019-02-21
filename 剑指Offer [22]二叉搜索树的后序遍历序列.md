# 剑指Offer [22]二叉搜索树的后序遍历序列

标签（空格分隔）： 算法

---

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

## Solution
首先必须清楚的两个概念是：
#### 1、后序序列的最后一个元素为该树的根节点

#### 2、二叉搜索树合法后序序列：
1. 取序列最后一个元素 root ，它为树的根
2. 可以从除根以外的序列中，找到唯一一个点，左子序列中所有元素都小于root，右子序列中所有元素的大于root。

显然是通过递归去判断每颗子树后序序列是否为二叉搜索树。

```javascript
function judge(arr, l, r) {
    if(l>=r) return true;
    let i = r,
        root = arr[r];
    while(i > l && arr[i - 1] > root) {
        --i;
    }
    for(let j = i - 1; j >= l; --j) {
        if(arr[j] > root) {
            return false;
        }
    }
    return judge(arr, l, i - 1) && judge(arr, i, r - 1);
}

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length === 0) return false;
    return judge(sequence, 0, sequence.length - 1);
}

```