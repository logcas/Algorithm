# 剑指Offer [35]数字在排序数组种出现的次数

标签（空格分隔）： 算法

---

统计一个数字在排序数组中出现的次数。

## Solution
解决方法还是有两种：
1、二分法 + 中心扩展
2、两次二分法：一次找最前的，一次找最后的，然后取索引差值。

我用的是第一种

```javascript
function GetNumberOfK(data, k)
{
    // write code here
    // 二分法 + 中心扩展
    if(data.length === 0) return 0;
    let l = 0,
        r = data.length - 1,
        mid = -1,
        count = 0;
    while(l <= r) {
        mid = Math.floor((l + r) / 2);
        if(data[mid] === k) { 
            ++count;
            break;
        }
        else if(data[mid] > k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    
    if(data[mid] === k) {
        let j = 1;
        while((mid - j >= 0) || (mid + j < data.length)) {
            if(mid - j >= 0 && data[mid - j] === k) ++count;
            if(mid + j < data.length && data[mid + j] === k) ++count;
            ++j;
        }
    }
    
    return count;
}
```