# 剑指Offer [28]从1到n整数中1出现的次数

标签（空格分隔）： 算法

---

求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

## Solution
可以这么说，这道题是目前我觉得最麻烦的一道，因为要从数学上去分析和获取规律。参考了不少网页，以自己的智商能理解的解法并不多，幸好找到了一种容易理解的解法。

要统计1出现的次数，我们要把数字分为不同位数去处理。

举个例子：12312

从1~12312究竟有多少个1呢？

### **首先我们从个位开始。**

先把12312分成下面几个部分：`round`、`weight`、`former`。
![从个位分析][1]
对于目前来讲，因为`weight`代表的是个位，因此，`former`就等于0了（所以没有在图上标注）

切入正题，我们来讨论一下当n从1增长到12312中，个位数的1会出现多少次？

很显然，先不考虑`weight`本身，如果`round=1231`时，个位的1会出现1231次（因为每10进1嘛），此时`count1=1231`。

现在把`weight`考虑进来，前面已经知道从1~12310，`count1=1231`，而从12310~12312，12311中个位的1会出现一次，因此`count1=count1+1=1232`。

也就是说，从1~12312，个位上会出现1232个1。

### **接着从十位开始分析。**

![从十位分析][2]

对于十位来讲，`round=123`、`weight=1`、`former=2`。

我们需要知道的是，每一个round中weight上1究竟出现多少次？

因为要在个位增10才在weight上增1，因此，一个round会出现10个1。如果不清楚的话，实际上数一数就知道了：

- 10
- 11
- 12
- 13
- 14
- 15
- 16
- 17
- 18
- 19

一共十次，也就是说，`count2 = 10 * round = 1230`。

然后我们再把`weight`考虑进来。因为`weight=1`，表明1出现多少次决定于`former`，因为`former = 2`，所以第1231轮时会出现`10`、`11`、`12`这3个十位有1数。因此`count2 = 10 * round + 3`。

难道每次都要数吗？并不是，实际上`3 = former + 1`。

实际上：（个位base=1，十位base=10...）
1. 当`weight > 1`时，`count = round * base + base`。
2. 当`weight = 1`时，`count = round * base + former + 1`。
3. 当`weight = 0`时，`count = round * base`。

### **然后我们再来看百位**
![从百位分析][3]

对于`round = 12`，显然`count3 = round * 100`。因为`weight = 3 > 1`，所以肯定多了从100~199的100个1，因此`count 3 = round * 100 + 100 = 1300`。

### **更高位实际上分析也是一样的**
高位的分析实际上是一样的，所以这里就不讲了。需要注意的一点是，使用JS时必须注意除完以后round必须是一个整数，因此需要函数`Math.floor`去调整。

```javascript
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    if(n < 1) return 0;
    let round = n,
        base = 1,
        count = 0;
    while(round > 0) {
        let weight = round % 10;
        round = Math.floor(round/10);
        count += round * base;
        let former = n % base;
        if(weight === 1) {
            count += former + 1;
        } else if(weight > 1) {
            count += base;
        }
        base *= 10;
    }
    return count;
}
```

  [1]: http://img.lxzmww.xyz/alg%E4%BB%8E%E4%B8%AA%E4%BD%8D%E5%88%86%E6%9E%90.png
  [2]: http://img.lxzmww.xyz/alg%E4%BB%8E%E5%8D%81%E4%BD%8D%E5%88%86%E6%9E%90.png
  [3]: http://img.lxzmww.xyz/alg%E4%BB%8E%E7%99%BE%E4%BD%8D%E5%88%86%E6%9E%90.png