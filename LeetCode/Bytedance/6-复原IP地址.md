# 复原IP地址
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

### 示例:
```
输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]
```

## 解答思路
1. IP地址中每一项至少有1位，最多3位，最小为0，最大为255
2. 类似于字符串的全排序，先确定某一项占多少位，然后在计算剩下的项（递归）

## 代码
```js
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length < 4 || s.length > 12) return [];
    const min = 1;
    const max = 3;
    const res = [];
    const tmp = [];
    
    function getIP(s, min, max) {
        if(tmp.length > 4) return;
        if(s.length === 0) {
            let ip = tmp.join('.');
            if(tmp.length === 4 && res.indexOf(ip) === -1) res.push(ip);
            return;
        }
        if(s.length < min) return;
        for(let i = min; i <= max; ++i) {
            let num = Number(s.slice(0, i));
            if(num >= 0 && num < 256) tmp.push(num);
            else break;
            getIP(s.slice(i), min, max);
            tmp.pop();
            if(i === min && num === 0) break;
        }
    }
    
    getIP(s, min, max);
    return res;
};
```