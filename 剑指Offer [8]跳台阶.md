# 剑指Offer [8]跳台阶

标签（空格分隔）： 算法

---

一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

## Solution
1. 斐波那契数列的应用。

f(n) = f(n-1) + f(n-2)

到第n阶的跳法是第n-1阶和第n-2阶的和。

```javascript
function jumpFloor(number)
{
    if(number < 3) return number;
    // 递归做法
    // return jumpFloor(number - 1) + jumpFloor(number - 2);
    
    // 循环做法
    let i = 0, j = 1, t = 0;
    while(number--) {
        [i, j] = [j, i + j];
    }
    return j;
}
```

