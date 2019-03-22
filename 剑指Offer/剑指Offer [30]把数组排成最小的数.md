# 剑指Offer [30]把数组排成最小的数

标签（空格分隔）： 算法

---

输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

## Solution
最整个数组进行排序，排序规则如下：

注意：+ 是字符串拼接

```
如果 s1 + s2 < s2 + s1，则 s1 在前，否则 s2 在前。
```

```javascript
function PrintMinNumber(numbers)
{
    // write code here
    numbers = numbers.map(num => num.toString());
    numbers.sort((s1, s2) => {
        let str1 = s1 + s2,
            str2 = s2 + s1;
        return str1 < str2 ? -1 : 1;
    });
    return numbers.reduce((str, num) => { return str + num; }, '');
}
```