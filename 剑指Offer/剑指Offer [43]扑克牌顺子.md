# 剑指Offer [43]扑克牌顺子

标签（空格分隔）： 算法

---

LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。

## Solution
上面说那么多，就是要判断给定了数组是否构成顺子，其中0（即王）可以变成任何值。

满足顺子的条件：
1. max - min < 5 （其中0不计算入max和min）
2. 除了0以外没有重复的数字
3. 数组长度为5

这样一分析条件就简单多了。

```javascript
function IsContinuous(numbers)
{
    // write code here
    // 顺子最大值的最小值的差值必须小于5
    // 除了王以外没有重复的牌
    if(numbers.length !== 5) return false;
    let map = {},
        max = -1,
        min = 14;
    for(let i = 0;i < numbers.length; ++i) {
        if(numbers[i] === 0) continue;
        if(map[numbers[i]]) {
            ++map[numbers[i]];
            if(map[numbers[i]] > 1) return false;
        } else {
            map[numbers[i]] = 1;
        }
        if(min > numbers[i]) {
            min = numbers[i];
        }
        if(max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max - min < 5;
}
```



