# 剑指Offer [47]把字符串转成正数

标签（空格分隔）： 算法

---

将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。

#### 输入描述
输入一个字符串,包括数字字母符号,可以为空

#### 输出描述
如果是合法的数值表达则返回该数字，否则返回0

## Solution
首先必须确定的是：
1. 正负号只能出现在第一位。
2. 没有其他符号

然后就是遍历的问题了。

```javascript
function isNumber(charNum) {
    return !isNaN(+charNum);
}

function StrToInt(str)
{
    // write code here
    if(!str) return 0;
    let isPositive = true;
    let sum = 0,
        base = 1;
    for(let i = str.length - 1;i >= 0; --i) {
        if(isNumber(str[i])) {
            sum += base * (+str[i]);
        } else {
            if(i === 0 && (str[i] === '+' || str[i] === '-')) {
                if(str[i] === '-') isPositive = false;
            } else {
                return 0;
            }
        }
        base *= 10;
    }
    return isPositive ? sum : -sum;
}
```