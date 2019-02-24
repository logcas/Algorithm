# 剑指Offer [31]丑数

标签（空格分隔）： 算法

---

把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

## Solution
首先必须明确什么是丑数：
只包含质因子2、3和5的数称为丑数，并且1是第一个丑数。

也就是说：1、2、3、4、5、6、8、都是丑数。

另一个丑数 = 丑数 * 3 或 丑数 * 5 或丑数 * 2。

因此可以通过循环，分别计算三个丑数，取其中的最小值作为下一个丑数，直到第n个位置。

```javascript
function GetUglyNumber_Solution(index)
{
    // write code here
    if(index < 7) return index;
    let arr = [],
        p2 = 0,
        p3 = 0,
        p5 = 0,
        uglyNum = 1;
    arr.push(uglyNum);
    while(arr.length < index) {
        uglyNum = Math.min(arr[p2] * 2, arr[p3] * 3, arr[p5] * 5);
        if(arr[p2] * 2 === uglyNum) ++p2;
        if(arr[p3] * 3 === uglyNum) ++p3;
        if(arr[p5] * 5 === uglyNum) ++p5;
        arr.push(uglyNum);
    }
    return uglyNum;
}
```