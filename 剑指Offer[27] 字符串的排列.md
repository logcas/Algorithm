# 剑指Offer[27] 字符串的排列

标签（空格分隔）： 算法

---

输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

输入描述:
```
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
```

## Solution
对于字符串全排序，做法是先固定前n个字符的顺序，然后对后n个进行全排序。

举个例子：abc

1、首先很容易想到，第1个字符，可以为`a`、`b`、`c`。即通过第一位分别与自己的交换、与第二位的交换、与第三位的交换……与第N位的交换，可以确定第一个字符。

`abc` => `bac`、`cba`

2、然后处理第二个字符。对于上面得到的每个字符串，由于第一位已经确定，所以我们从第二位开始，分别与后面的字符进行交换。

`abc` => `acb`

`bac` => `bca`

`cba` => `cab`

3、然后再处理第三个字符与后面字符的交换……以此类推，把不同位的字符与后面所有字符进行交换。对于上面的例子，交换就结束了。得到了六个字符串：`abc`、`bac`、`cba`、`acb`、`bca`、`cab`。这就是`abc`的全排序。

整个算法思想可以用递归去实现。

```c++
class Solution {
public:
    vector<string> res;
    vector<string> Permutation(string str) {
        if(str.size() == 0) return res;
        myPermutation(str, 0);
        // 调用sort进行字典排序
        sort(res.begin(), res.end());
        return res;
    }
    void myPermutation(string str, int begin) {
            // 避免相同
            if(begin == str.size() && find(res.begin(), res.end(), str) == res.end()) {
                res.push_back(str);
            }
            
            for(int i = begin;i < str.size(); ++i) {
                if(i != begin && str[i] == str[begin]) continue;
                swap(str[i], str[begin]);
                myPermutation(str, begin + 1);
                swap(str[i], str[begin]);
            }
    }
};
```



