# 剑指Offer [38]数组中只出现一次的数字

标签（空格分隔）： 算法

---

一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。

## Solution
解决思路有两个：
1. 利用一个map作为辅助结构，统计每个数字出现的次数，然后返回只出现一次的数字。简单粗暴，时间复杂度O(n)，空间复杂度O(n)。
2. 利用位运算，因为一个整型数组中其他数字都出现了偶数次，又因为两个相同的数字进行异或运算得零，因此，遍历一遍数组之后，出现偶数次的数字都会抵消到，得到的结果是只出现一次的两个数字的异或结果。因为这两个数字是不一样的，异或的结果不会是零，我们只需要找到第一个1，再把数字分为该位是0和该位是1分别进行异或运算，两组分别运算之后就可以得出两个只出现一次的数字。时间复杂度O(n)，空间复杂度O(1)。

```javascript
function IsBit(sum, count) {
    sum = sum >> count;
    return (sum & 1) === 1;
}

function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    if(array.length < 2) return array;
    let re = 0,
        len = array.length;
    for(let i = 0;i < len; ++i) {
        re = re^array[i];
    }
    let index = 0;
    while((re & 1) === 0) {
        re = re >> 1;
        ++index;
    }
    let sum1 = 0,
        sum2 = 0;
    for(let i = 0;i < len; ++i) {
        if(IsBit(array[i], index)) {
            sum1 = sum1 ^ array[i];
        } else {
            sum2 = sum2 ^ array[i];
        }
    }
    return [sum1, sum2];
}
```