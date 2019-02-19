# 剑指Offer [3]从头到尾打印链表

标签（空格分隔）： 算法

---

输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

## Solution
```javascript
function printListFromTailToHead(head)
{
    // write code here
    let res = [];
    while(head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
}
```



