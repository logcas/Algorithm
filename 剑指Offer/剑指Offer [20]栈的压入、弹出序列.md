# 剑指Offer [20]栈的压入、弹出序列

标签（空格分隔）： 算法

---

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）

## Solution
借助一个辅助栈st去完成判断。

遍历pushV数组，把对应的元素压入st，并且检测是否等于popV中对应的元素。如果相等，则st出栈，继续检测popV中对应的下一个元素。

当遍历完pushV数组后，若st不空，则说明popV序列不是pushV序列的出栈序列。

```javascript
function IsPopOrder(pushV, popV)
{
    // write code here
    let stack = [];
    for(let i = 0, j = 0; i < pushV.length; ++i) {
        stack.push(pushV[i]);
        while(j < popV.length && stack[stack.length - 1] === popV[j]) {
            stack.pop();
            ++j;
        }
    }
    return stack.length === 0;
}
```





