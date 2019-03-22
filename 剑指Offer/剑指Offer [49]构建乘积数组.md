# 剑指Offer [49]构建乘积数组

标签（空格分隔）： 算法

---

给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

## Solution
![此处输入图片的描述][1]

看完这个图，就很清晰了。

暴力法肯定不行的，因为重复计算的量太多。

按照图示，先下三角从上往下乘，然后再上三角从下往上乘，然后再相乘就OK了。

```javascript
function multiply(array)
{
    // write code here
    // 构建数组
    let B = [];
    for(let i = 0;i < array.length; ++i) {
        B[i] = 1;
    }
    // 下三角连乘
    for(let i = 1;i < array.length; ++i) {
        B[i] *= array[i - 1] * B[i - 1];
    }
    // 上三角连乘
    let temp = 1;
    for(let i = array.length - 2;i >= 0; --i) {
        temp = temp * array[i + 1];
        B[i] *= temp;
    }
    return B;
}
```

  [1]: http://img.lxzmww.xyz/%E4%B9%98%E7%A7%AF%E6%95%B0%E7%BB%84.jpg