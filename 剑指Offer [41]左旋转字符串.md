# 剑指Offer [41]左旋转字符串

标签（空格分隔）： 算法

---

汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！

## Solution
用JS来做的话其实很简单，所谓的左移n位，实际上就是把[0,n]个字符串放到后面去拼接。

但是需要注意一些边缘情况：
1. str == NULL，返回`''`。
2. str.length == 0，返回`''`。
3. n必须取模，即`n = n % str.length`。

```javascript
function LeftRotateString(str, n)
{
    // write code here
    if(!str || str.length === 0) return '';
    let move = n % str.length;
    let moveStr = str.slice(0, move);
    let baseStr = str.slice(move);
    return baseStr + moveStr;
}
```