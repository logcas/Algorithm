# 剑指Offer [9]变态跳台阶

标签（空格分隔）： 算法

---

一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

## Solution
1. 当第N阶时，f(n) = f(n-1) + f(n-2) + ... + f(1)
2. 当第N-1阶时，f(n-1) = f(n-2) + f(n-3) + ... + f(1)

整理1、2两式，得 f(n) = 2 * f(n - 1)

```javascript
function jumpFloorII(number)
{
    // write code here
    if(number < 2) {
        return number;
    } else {
        return 2 * jumpFloorII(number - 1);
    }
}
```




