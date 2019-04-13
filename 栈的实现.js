/**
 * 数组实现栈结构
 */
class Stack {
  constructor(capacity) {
    this.capacity = capacity || 5;
    this.data = [];
    this.top = -1;
  }

  top() {
    if(top === -1) return null;
    return this.data[this.top];
  }

  push(val) {
    if(this.top >= this.capacity) return false;
    this.data[this.top++] = val;
    return true;
  }

  pop() {
    if(this.top === -1) return null;
    let val = this.data[this.top--];
    return val;
  }
}


/**
 * 链表实现栈结构
 */

function LinkNode(val) {
  this.value = val;
  this.next = null;
} 

class Stack2 {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = null;
  }

  top() {
    if(!this.top) return null;
    return this.top.value;
  }

  push(val) {
    if(!this.top) {
      this.top = new LinkNode(val);
    } else {
      let newNode = new LinkNode(val);
      newNode.next = this.top;
      this.top = newNode;
    }
    return true;
  }

  pop() {
    if(!this.top) return null;
    let val = this.top.value;
    this.top = this.top.next;
    return val;
  }
}