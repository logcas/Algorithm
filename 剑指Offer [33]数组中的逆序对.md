# 剑指Offer [33]数组中的逆序对

标签（空格分隔）： 算法

---

在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

## Solution
逆序对：[5,3]、[5,2]这种。

目前用的方法很简单，就是遍历每一个元素，然后从它开始往后找有没有小于它的，有的话数量+1。

```javascript
function InversePairs(data)
{
    // write code here
    let count = 0,
        len = data.length;
    for(let i = 0; i < len - 1; ++i) {
        for(let j = i + 1; j < len; ++j) {
            if(data[i] > data[j]) ++count;
        }
    }
    return count % 1000000007;
}
```



