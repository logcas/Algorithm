﻿# 剑指Offer [7]斐波那契数列

标签（空格分隔）： 算法

---

大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39

## Solution
1. 递归。但是递归的话会重复进行多次计算。增加很多计算量。
2. 循环。

斐波那契数列： 0 1 1 2 3 5 8 ......
（从第三项开始，该项等于前两项的和）

```javascript
function Fibonacci(n)
{
    if(n < 2) return n;
    let i = 0,j = 1;
    while(--n) {
        [i, j] = [j, i + j];
    }
    return j;
}
```


