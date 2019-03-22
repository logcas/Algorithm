# 剑指Offer [32]第一个只出现一次的字符

标签（空格分隔）： 算法

---

在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

## Solution
通过一个map作为辅助结构，先扫描一次字符串，把出现的次数放入map，然后取map中第一个出现的且仅为1的字符。

### **BUG: for in 在不同浏览器下不能保证顺序相同**

```javascript
function FirstNotRepeatingChar(str)
{
    // write code here
    let map = {};
    let len = str.length;
    for(let i = 0;i < len; ++i) {
        map[str[i]] || (map[str[i]] = []);
        map[str[i]].push(i);
    }
    for(let key in map) {
        if(map[key].length === 1) return map[key][0];
    }
    return -1;
}
```



