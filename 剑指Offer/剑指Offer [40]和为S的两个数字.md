# 剑指Offer [40]和为S的两个数字

标签（空格分隔）： 算法

---

输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

## Solution
在递增排序的数组中找两个数求和，用双指针法。分别设置首指针l和尾指针r。

1. 当 l + r < target 时，++l
2. 当 l + r > target 时， --r

```javascript
function FindNumbersWithSum(array, sum)
{
    // write code here
    // 双指针法
    let res = [],
        l = 0,
        r = array.length - 1;
    while(l < r) {
        if(array[l] + array[r] === sum) {
            res.push(array[l]);
            res.push(array[r]);
            break;
        }
        if(array[l] + array[r] < sum) {
            ++l;
        } else {
            --r;
        }
    }
    return res;
}
```