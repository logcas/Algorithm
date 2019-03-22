# 剑指Offer [1] 二维数组中的查找

标签（空格分隔）： 算法

---

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

## Solution
例如：
[1 5 6 9 ]
[2 6 7 13]
[3 7 8 15]

从左下角开始，target小于当前位置的数值时，向右移动；target大于当前位置时，向上移动。

```javascript
function Find(target, array)
{
    let r = array.length - 1,
        c = 0;
    while(r >= 0 && c < array[0].length) {
        let tmp = array[r][c];
        if(tmp === target) return true;
        else if(tmp > target) {
            r -= 1;
        } else {
            c += 1;
        }
    }
    return false;
}
```




