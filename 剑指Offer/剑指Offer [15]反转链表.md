# 剑指Offer [15]反转链表

标签（空格分隔）： 算法

---

输入一个链表，反转链表后，输出新链表的表头。

## Solution
要反转链表，一个很简单的就是利用链表的头插法。

```javascript
function ReverseList(pHead)
{
    // write code here
    // 头插法
    if(!pHead) return null;
    let newHead = pHead,
        cursor = pHead.next;
    newHead.next = null;
    while(cursor) {
        let next = cursor.next;
        cursor.next = newHead;
        newHead = cursor;
        cursor = next;
    }
    return newHead;
}
```