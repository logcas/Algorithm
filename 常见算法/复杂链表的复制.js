// 复杂链表的复制
// 对于结点以下结构的链表：
/* Node {
  int value,
  Node* next;
  Node* random;
} */

// random 指针为任意指向，可能指向链表中的某个结点，也可能指向null。
// 例如：
//   __________
//  |         |
//  |         V
//  1 -> 2 -> 3 -> 4 -> null
// 

// 要求复制这个链表

// 解法一
// 利用 HashMap记录每个链表
// 时间复杂度O(n)
// 空间复杂度O(n)

function Node(value, next, random) {
  this.value = value;
  this.next = next || null;
  this.random = random || null;
}

function copyNodeList(head) {
  if(!head) return head;
  const map = {};
  let cur = head;
  while(cur) {
    map[cur] = new Node(cur.value);
    cur = cur.next;
  }
  cur = head;
  let copied = null;
  let p = null;
  while(cur) {
    if(!copied) {
      copied = p = map[cur];
      if(map[cur.random]) {
        p.random = map[cur.random];
      }
    } else {
      p.next = map[cur];
      p = p.next;
      if(map[cur.random]) {
        p.random = map[cur.random];
      }
    }
    cur = cur.next;
  }
  return copied;
}


// 解法二
// 第一次遍历:先在每一个源结点后接副本结点
// 第二次遍历:启动双指针，再链接random
// 时间复杂度：O(n)
// 空间复杂度：O(1)

function copyNodeList2(head) {
  if(!head) return;
  let cur = head;
  // copy
  while(cur) {
    cur.next = new Node(cur.value, cur.next);
  }
  // link random
  cur = head;
  let p = cur.next;
  while(cur) {
    if(cur.random) {
      p.random = cur.random.next;
    }
    cur = cur.next.next;
    if(cur) p = cur.next;
  }
  // split
  let copied = null;
  p = null;
  let cur2 = null;
  cur = head;
  cur2 = cur.next;
  while(cur) {
    if(!copied) {
      copied = p = cur2;
    } else {
      p.next = cur2;
      p = p.next;
    }
    cur = cur2.next;
    if(cur) cur2 = cur.next;
  }
  return copied;
}