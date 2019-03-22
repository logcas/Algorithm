# 剑指Offer [10]矩形覆盖

标签（空格分隔）： 算法

---

我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

## Solution
同样是斐波那契数列的应用

当 n < 1 时，肯定是0了。
当 n == 1 时，只有1种。 |
当 n == 2 时，有两种。 || 和 =
当 n == 3 时，有3种。 ||| 和 |= 和 =|

![此处输入图片的描述][1]

实际上就是上图所示：f(n) = f(n-1) + f(n+1)，思想跟跳台阶一样。

```javascript
function rectCover(number)
{
    // write code here
    if(number < 1) return 0;
    else if(number < 3) return number;
    else return rectCover(number - 1) + rectCover(number - 2);
}
```

  [1]: http://img.lxzmww.xyz/%E6%97%A0%E6%A0%87%E9%A2%98.png