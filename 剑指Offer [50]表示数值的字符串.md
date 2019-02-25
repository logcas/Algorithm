# 剑指Offer [50]表示数值的字符串

标签（空格分隔）： 算法

---

请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

## Solution
这种字符串转数字的题目，都是同一个套路的，也就是遍历，确定合法性。

```javascript
//s字符串
function isNumeric(s)
{
    // write code here
    let hasE = false,
        decimal = false,
        sign = false,
        len = s.length;
    for(let i = 0;i < len; ++i) {
        // 如果是e
        if(s[i] === 'e' || s[i] === 'E') {
            // e 不能是最后
            if(i === len - 1) return false;
            // e 不能重复
            if(hasE) return false;
            hasE = true;
        } else if(s[i] === '+' || s[i] === '-') {
            // 如果正负号第一次出现，只能在开头或e之后
            if(!sign && i !== 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false;
            // 如果正负号第二次出现，只能在e之后
            if(sign && s[i - 1] !== 'e' && s[i - 1] !== 'E') return false;
            sign = true;
        } else if(s[i] === '.') {
            // 小数点只能出现一次，且不能出现在e之后
            if(hasE || decimal) return false;
            decimal = true;
        } else if(isNaN(+s[i])) {
            return false;
        }
    }
    return true;
}
```




