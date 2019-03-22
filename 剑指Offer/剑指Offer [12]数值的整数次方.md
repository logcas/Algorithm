# 剑指Offer [12]数值的整数次方

标签（空格分隔）： 算法

---

给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

## Solution
这道题目看上去并不难，但是实际需要考虑的边界情况多：
1、判断exponent正负，对于exponent<0的情况，base不能小于0。
2、先计算base的abs(exponent)次方，如果exponent < 0，则返回倒数。
3、通过二进制移位乘减少循环乘的次数。

```
function Power(base, exponent)
{
    // write code here
    // 当指数小于0时，base不能为0
    // 利用二进制数的移位减少循环次数
    // 5^1101 = 5^0001 * 5^0100 * 5 ^1000
    let _base = base,
        _exp = exponent;
    if(exponent < 0) {
        if(base > 0) {
            _exp = -_exp;
        } else {
            throw new Error('分母不能为0');
        }
    }
    let res = 1;
    while(_exp != 0) {
        if(_exp & 1) {
            res *= _base;
        }
        _exp >>= 1;
        _base *= _base; // 相当于左移一位
    }
    return exponent > 0 ? res : 1/res;
}
```




