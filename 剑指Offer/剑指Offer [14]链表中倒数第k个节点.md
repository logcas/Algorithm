# 剑指Offer [14]链表中倒数第k个节点

标签（空格分隔）： 算法

---

输入一个链表，输出该链表中倒数第k个结点。

## Solution
要输出倒数第k个节点，在限制条件下暴力法肯定不行。

通常的解决方法是：设立一个指针p和指针q，先让指针q前进k-1个节点，然后同时前进，当q到达最后一个节点时指针p就到达了倒数第k个节点处了。

但是要注意一些边缘情况：
1. 输入为空链，直接返回null。
2. 倒数第k个的k大于整个链的长度，也就是不存在，也返回null。

```javascript
function FindKthToTail(head, k)
{
    // write code here
    if(!head || !k) return null;
    let cursor = head;
    while(--k) {
        cursor = cursor.next;
        if(!cursor) return null;
    }
    while(cursor.next !== null) {
        head = head.next;
        cursor = cursor.next;
    }
    return head;
}
```



