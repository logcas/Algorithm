# 剑指Offer [24]复杂链表的复制

标签（空格分隔）： 算法

---

输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）

## Solution
一个节点有两个指针：next和random，其中random指向任意一个节点，也可能指向null。

要复制整个链表，要分成三步：
#### 1. 在每个节点后面新增一个该节点的副本
```
原链：A->B->C->D
复制后：A->A1->B->B1->C->C1->D->D1
```

#### 2. 为每个副本建立与原节点相似的random连接
```
例如，本来有如下复杂连接：
A->C
B->D

为副本建立相似的复杂连接：
A1->C1
B1->D1
```

#### 3. 从原链表中拆分原链和副本链


```javascript
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    while(pHead === null) {
        return null;
    }
    // 在原链表上复制新的节点
    // eg 原： A->B->C->D
    //    现： A->A1->B->B1->C->C1->D->D1
    let pCursor = pHead;
    while(pCursor) {
        let cloneNode = {
            label: pCursor.label,
            next: null,
            random: null,
        };
        cloneNode.next = pCursor.next;
        pCursor.next = cloneNode;
        pCursor = cloneNode.next;
    }
    // 重新遍历，为克隆节点建立复杂链接
    pCursor = pHead;
    let cloneCursor = pHead.next;
    while(pCursor) {
        if(pCursor.random) {
            cloneCursor.random = pCursor.random.next;
        }
        pCursor = cloneCursor.next;
        if(pCursor) cloneCursor = pCursor.next;
    }
    // 重新遍历，拆分链表
    pCursor = pHead;
    cloneCursor = null;
    let cloneHead = null;
    while(pCursor) {
        if(!cloneHead) {
            cloneHead = pCursor.next;
            cloneCursor = cloneHead;
        } else {
            cloneCursor.next = pCursor.next;
            cloneCursor = cloneCursor.next;
        }
        if(pCursor.next) {
            pCursor = pCursor.next.next;
        }
    }
    return cloneHead;
}
```