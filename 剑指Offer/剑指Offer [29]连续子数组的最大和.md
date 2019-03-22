# 剑指Offer [29]连续子数组的最大和

标签（空格分隔）： 算法

---

HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)

## Solution
这种问题利用动态规划去求解。

我们设一个辅助数组_arr，_arr[i]从前面某一个位置到i的连续序列和的最大值。

当我们要求x~0的连续子序列最大值时，显然是`_arr[0]`。

当我们要求x~1的连续子序列最大值时，显然是`max(_arr[0] + arr[1], arr[1])`

当我们要求x~n的连续子序列最大值时，显然是`max(_arr[n-1] + arr[n], arr[n])`

时间复杂度O(n)，空间复杂度O(n)。

```javascript
function FindGreatestSumOfSubArray(array)
{
    // write code here
    // 动态规划
    let res = -Infinity;
    let _arr = array.slice(0);
    for(let i = 0;i < array.length; ++i) {
        let t = i - 1 >= 0 ? _arr[i - 1] : 0;
        _arr[i] = Math.max(array[i], array[i] + t);
        res = Math.max(_arr[i], res);
    }
    return res;
}
```