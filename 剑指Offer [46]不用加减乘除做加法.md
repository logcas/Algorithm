# 剑指Offer [46]不用加减乘除做加法

标签（空格分隔）： 算法

---

写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

## Solution
首先想到的肯定是位运算。

与运算 + 左移一位：求进位
异或运算：两数相加但不考虑进位

然后把与运算和异或运算结果相与即可。

```javascript
function Add(num1, num2)
{
    // write code here
    // 位运算
    // 两数异或 = 两数相加但不考虑进位
    // 两数相与 + 左移一位 = 求进位
    while(num2 !== 0) {
        let sum = num1 ^ num2,
            addNum = ( num1 & num2 ) << 1;
        num1 = sum;
        num2 = addNum;
    }
    return num1;
}
```
