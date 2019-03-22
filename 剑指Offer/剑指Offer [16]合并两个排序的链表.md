# 剑指Offer [16]合并两个排序的链表

标签（空格分隔）： 算法

---

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

## Solution
合并的思路其实跟归并排序合并是类似的：
1. 比较A、B链，把其中较小的节点连上。
2. 做完第一步后，肯定有一个链`yi'j已经空了。然后只需要在后面把剩下的接上就行了。

```javascript
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    // 递归版
    if(!pHead1) return pHead2;
    if(!pHead2) return pHead1;
    
    let cur = null;
    if(pHead1.val <= pHead2.val) {
        cur = pHead1;
        cur.next = Merge(pHead1.next, pHead2);
    } else {
        cur = pHead2;
        cur.next = Merge(pHead1, pHead2.next);
    }
    return cur;
    
    // 归并非递归版
    /*
    if(!pHead1) return pHead2;
    if(!pHead2) return pHead1;
    let newHead = null,
        cursor = null;
    while(pHead1 && pHead2) {
        if(pHead1.val <= pHead2.val) {
            if(!newHead) {
                newHead = pHead1;
                cursor = newHead;
            } else {
                cursor.next = pHead1;
                cursor = cursor.next;
            }
            pHead1 = pHead1.next;
        } else {
            if(!newHead) {
                newHead = pHead2;
                cursor = newHead;
            } else {
                cursor.next = pHead2;
                cursor = cursor.next;
            }
            pHead2 = pHead2.next;
        }
    }
    if(pHead1) {
        cursor.next = pHead1;
    } else {
        cursor.next = pHead2;
    }
    
    return newHead;
    */
}
```