/*
堆的性质：
  1. 堆是一颗完全二叉树
  2. 堆的某个结点的值肯定大于其子孙结点的值

实际开发中，快排的性能比堆排序要好：
  1. 根据访问的空间局限性，快排能够有效地命中缓存，而堆排序由于每次比较都是根据树的路径（1，2，4，8...）
     因此，当数据量大的时候，缓存的命中率较低，因此性能更低。
  2. 每次排序时，都需要进行”堆化"，堆化会打乱数组原有的顺序，增加逆序性

时间复杂度:
  1. 堆排序在排序前需要对数据进行建堆，建堆的时间复杂度实际上为O(n)：
              结点数           层数
              2^0 = 1           h
              2^1 = 2         h - 1
                2^2           h - 2
                ...            ...
                2^k           h - k
             2^(h - 1)          1

    建堆需要从最后一个非叶子结点开始，也即从倒数第二层开始建堆。
    因此，情况如下：
      1. 对于最后一层(h-1层)，有2^(h-1)个结点，需要比较的层数为1（即只与最后一层比较）
      2. 对于h-2层，有2^(h-2)个结点，需要比较的层数为2（即h - (h - 2))
      ....
      3. 对于第一层，有1个结点，需要比较的层数为h层。
    所以，需要比较的结点数：
      S = 1 * h + 2 * (h - 1) + 4 * (h - 2) + ... + 2^k * (h - k) + 2^(h - 1) * 1
     2S =         2 * h       + 4 * (h - 1) + 8 * (h - 2) + ... + 2^(k+1) * (h - k) + 2^h * 1
     错位相减：2S - S
     所以 S = 2 + 4 + 8 + ... + 2^(h-1) - h + 2^h
           = 2^h - 2 - h + 2^h
           = 2^(h+1) - 2 - h
     又因为完全二叉树的高度为 h = logn（2为底）
     因此 S = 2n - 2 - logn
     所以 O(S) = O(n)
  2. 每趟排序，都会找出最大或最小的元素，然后进行堆化，
     每次堆化的时间复杂度为O(logn)（2为底）
     因此，总堆化的时间复杂度为O(nlogn)
  3. 因此，堆排序实际的时间复杂度为：
     O = O(n) + O(nlogn) = O(nlogn)

稳定性：不稳定

*/

/**
 * 堆的操作
 */

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class Heap {
  constructor(data) {
    this.heap = [null, ...data];
    this.buildHeap();
  }

  // 构造堆
  buildHeap() {
    let len = this.heap.length;
    for (let i = Math.floor(len / 2); i > 0; --i) {
      this.heapify(len, i);
    }
  }

  // 堆化
  heapify(n, i) {
    let maxPos = i;
    let arr = this.heap;
    while (true) {
      if (i * 2 < n && arr[i] < arr[i * 2]) maxPos = i * 2;
      if (i * 2 + 1 < n && arr[maxPos] < arr[i * 2 + 1]) maxPos = i * 2 + 1;
      if (maxPos === i) break;
      swap(this.heap, maxPos, i);
      i = maxPos;
    }
  }

  // 插入
  insert(val) {
    let len = this.heap.length;
    this.heap[len] = val;
    let i = Math.floor(len / 2);
    let j = len;
    while (i > 0 && this.heap[i] < this.heap[j]) {
      swap(this.heap, i, j);
      j = i;
      i = Math.floor(i / 2);
    }
  }

  // 删除堆顶元素
  removeHead() {
    let len = this.heap.length;
    if (len === 0) return;
    swap(this.heap, len - 1, 1);
    this.heap.splice(len - 1, 1);
    this.heapify(len - 1, 1);
  }

  // 排序
  sort() {
    this.buildHeap();
    let i = this.heap.length - 1;
    let arr = this.heap;
    while (i > 1) {
      swap(arr, i, 1);
      this.heapify(i--, 1);
    }
  }
}

/** test
const heap = new Heap([2, 6, 6, 7, 5, 0, 1, 3, 6, 21, 32, 14, 10]);
console.log(heap.heap);
heap.insert(28);
console.log(heap.heap);
heap.insert(53);
console.log(heap.heap);
heap.removeHead();
console.log(heap.heap);
heap.sort();
console.log(heap.heap);
 */

// 堆的应用： 求数据的中位数
class BaseHeap {
  constructor(data) {
    this.heap = [null, ...data];
    this.buildHeap();
  }

  // 获取长度
  getLength() {
    return this.heap.length;
  }

  // 获取堆顶元素
  getTop() {
    return this.heap[1];
  }

  // 构造堆
  buildHeap() {
    let len = this.heap.length;
    for (let i = Math.floor(len / 2); i > 0; --i) {
      this.heapify(len, i);
    }
  }

  // 删除堆顶元素
  removeHead() {
    let len = this.heap.length;
    if (len === 0) return;
    swap(this.heap, len - 1, 1);
    this.heap.splice(len - 1, 1);
    this.heapify(len - 1, 1);
  }

  // 排序
  sort() {
    this.buildHeap();
    let i = this.heap.length - 1;
    let arr = this.heap;
    while (i > 1) {
      swap(arr, i, 1);
      this.heapify(i--, 1);
    }
  }
}

class SmallHeap extends BaseHeap {
  constructor(data) {
    super(data);
  }

  // 堆化
  heapify(n, i) {
    let maxPos = i;
    let arr = this.heap;
    while (true) {
      if (i * 2 < n && arr[i] > arr[i * 2]) maxPos = i * 2;
      if (i * 2 + 1 < n && arr[maxPos] > arr[i * 2 + 1]) maxPos = i * 2 + 1;
      if (maxPos === i) break;
      swap(this.heap, maxPos, i);
      i = maxPos;
    }
  }

  // 插入
  insert(val) {
    let len = this.heap.length;
    this.heap[len] = val;
    let i = Math.floor(len / 2);
    let j = len;
    while (i > 0 && this.heap[i] > this.heap[j]) {
      swap(this.heap, i, j);
      j = i;
      i = Math.floor(i / 2);
    }
  }
}

class BigHeap extends BaseHeap {
  constructor(data) {
    super(data);
  }

  // 堆化
  heapify(n, i) {
    let maxPos = i;
    let arr = this.heap;
    while (true) {
      if (i * 2 < n && arr[i] < arr[i * 2]) maxPos = i * 2;
      if (i * 2 + 1 < n && arr[maxPos] < arr[i * 2 + 1]) maxPos = i * 2 + 1;
      if (maxPos === i) break;
      swap(this.heap, maxPos, i);
      i = maxPos;
    }
  }

  // 插入
  insert(val) {
    let len = this.heap.length;
    this.heap[len] = val;
    let i = Math.floor(len / 2);
    let j = len;
    while (i > 0 && this.heap[i] < this.heap[j]) {
      swap(this.heap, i, j);
      j = i;
      i = Math.floor(i / 2);
    }
  }
}

function isOrdered(arr) {
  for(let i = 1;i < arr.length; ++i)
    if(arr[i] > arr[i - 1]) return false;
  return true;
}

class Median {
  constructor(data) {
    data = isOrdered(data) ? data : data.sort((a, b) => a - b);
    console.log(data);
    let len = data.length;
    let mid = Math.floor(len / 2);
    if (mid % 2 === 0) this.isEven = true;
    else this.isEven = false;
    this.mid = mid;
    // 小顶堆
    this.smallHeap = new SmallHeap(data.slice(mid));
    // 大顶堆
    this.bigHeap = new BigHeap(data.slice(0, mid));
  }

  // 取中位数
  getMidian() {
    return this.isEven ? [this.bigHeap.getTop(), this.smallHeap.getTop()] : this.smallHeap.getTop();
  }

  // 插入
  insert(val) {
    if (this.smallHeap.getTop() <= val) {
      this.smallHeap.insert(val);
    } else {
      this.bigHeap.insert(val);
    }
    this.isEven = !this.isEven;
    // 检测是否依然符合比例
    while (this.isEven ?
      this.bigHeap.getLength() !== this.smallHeap.getLength() :
      this.bigHeap.getLength() !== this.smallHeap.getLength() - 1) {
      let bigLen = this.bigHeap.getLength();
      let smallLen = this.smallHeap.getLength();
      if (this.isEven) {
        if (bigLen > smallLen) {
          this.smallHeap.insert(this.bigHeap.getTop());
          this.bigHeap.removeHead();
        } else if (bigLen < smallLen) {
          this.bigHeap.insert(this.smallHeap.getTop());
          this.smallHeap.removeHead();
        }
      } else if (!this.isEven) {
        if (bigLen > smallLen) {
          this.smallHeap.insert(this.bigHeap.getTop());
          this.bigHeap.removeHead();
        }
      }
    }
  }
}

/* test
const md = new Median([2, 6, 7, 5, 0, 1, 3, 21, 32, 14, 10]);
console.log(md.getMidian());
md.insert(7);
console.log(md.getMidian());
md.insert(6);
console.log(md.getMidian());
md.insert(6);
console.log(md.getMidian());
*/