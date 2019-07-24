//
// 使用固定数组实现队列
//

class Queue {
  constructor(initSize) {
    this.data = [];
    this.length = initSize;
    this.start = this.end = 0;
    this.size = 0;
  }

  put(val) {
    if(this.size >= this.length) return false;
    this.data[this.end++] = val;
    this.size++;
    if(this.end === this.length) this.end = 0;
    return true;
  }

  get() {
    if(this.size === 0) return null;
    let val = this.data[this.start++];
    this.size--;
    if(this.start === this.length) this.start = 0;
    return val;
  }
}

const qu = new Queue(3);
// helpers 
const log = (...args) => {
  args.forEach(v => console.log(v));
};

log(
  qu.get(),
  qu.put(1),
  qu.put(2),
  qu.get(),
  qu.put(5),
  qu.put(6),
  qu.put(7),
  qu.get(),
  qu.get(),
  qu.get(),
  qu.get()
)