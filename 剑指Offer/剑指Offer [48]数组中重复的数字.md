# 剑指Offer [48]数组中重复的数字

标签（空格分隔）： 算法

---

在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。

## Solution
凡是要找重复的、与出现次数关联的，肯定会想到用hashmap，但是一用hashmap，空间复杂度就上去了。

这题按题意，长度为n且数字只在0~n-1范围内，并且只寻找第一个出现重复的。这样，我们可以利用原来的空间。

每遍历一个数，索引为i，我们都取index = arr[i]，如果index大于数组的长度，就index = index -  arr.length，然后对arr[index]加上数组的长度。如果index减了一次还大于arr.length，说明已经出现了重复，直接返回arr[i]就行了。

```javascript
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    
    // hashmap解法
    /*
    let map = {};
    for(let i = 0;i < numbers.length; ++i) {
        map[numbers[i]] || (map[numbers[i]] = 0);
        ++map[numbers[i]];
        if(map[numbers[i]] > 1) {
            duplication[0] = numbers[i];
            return true;
        }
    }
    return false;
    */
    
    // 时间复杂度O(n)，空间复杂度O(1) 解法
    for(let i = 0;i < numbers.length; ++i) {
        let index = numbers[i];
        if(index > numbers.length) {
            index -= numbers.length;
        }
        if(numbers[index] >= numbers.length) {
            duplication[0] = index;
            return true;
        }
        numbers[index] += numbers.length;
    }
    return false;
}
```

