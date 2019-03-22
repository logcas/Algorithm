# 剑指Offer [2]替换空格

标签（空格分隔）： 算法

---

请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。


## Solution
从后往前替换，这样可以使循环中用到的索引保持不变。

```javascript
function replaceSpace(str)
{
    //replace 函数
    //return str.replace(/ /g,'%20');
    // 从后往前替换
    str = str.split('');
    for(let i = str.length - 1; i >= 0; --i) {
        if(str[i]===' ') {
            str.splice(i,1,'%20');
        }
    }
    return str.join('');
}
```

