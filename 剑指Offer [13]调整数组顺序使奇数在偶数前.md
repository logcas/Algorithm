# 剑指Offer [13] 调整数组顺序使奇数在偶数前

标签（空格分隔）： 算法

---

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。

## Solution
#### 解法一：把偶数放到新数组并从原数组中删除，最后合并到原数组中
这个解放是非常直观的，通过遍历把偶数提取出来，最后再拼接到原数组中，时间复杂度O(n)，空间复杂度O(n)。

```javascript
function reOrderArray(array)
{
    // write code here
    let len = array.length,
        odd = [];
    for(let j = array.length - 1; j >= 0; --j) {
        if(array[j] % 2 === 0) {
            odd.unshift(...array.splice(j, 1));
        }
    }
    array = array.concat(odd);
    return array;
}
```

#### 解法二：类似冒泡，把前偶后奇就交换
把整一个当成是冒泡，把奇数冒到最前面，遇到前偶后奇的情况就交换。

时间复杂度O(n^2)，空间复杂度O(1)。

```javascript
function reOrderArray(array)
{
    // write code here
    let len = array.length;
    for(let i = 0;i < len;++i) {
        let cur = null;
        for(let j = array.length - 1;j >= i;--j){
            if(array[j]%2!==0){
                cur = array[j];
            } else {
                if(cur){
                    [array[j], array[j + 1]] = [cur, array[j]];
                }
            }
        }
    }
    return array;
}
```

