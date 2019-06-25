/**
 *  图
 *  跟树一样的非线性的数据结构
 *  存储方法：
 *    1. 邻接表
 *    2. 邻接矩阵 
 */

// 邻接表
// 1. 空间复杂度为O(n^2)
// 2. 对于稀疏图，非常浪费存储空间
// 3. 可以快速查找图中节点的关系，以及可以快速查阅节点的出度和入度
// 4. 对于无向图，可以使用压缩矩阵的方法存储（上三角或下三角法）
// 5. 存储结构唯一

class AdjacencyTable {
  constructor(table, hasDirection = false) {
    this.table = table;
    this.hasDirection = hasDirection;
  }
  add(t, s) {
    this.table[t][s] = 1;
    if (this.hasDirection) return;
    this.table[s][t] = 1;
  }
  remove(t, s) {
    this.table[t][s] = 0;
    if (this.hasDirection) return;
    this.table[s][t] = 0;
  }
}

// 邻接矩阵
// 1. 对于N个节点的表，邻接矩阵有N个链表
// 2. 对于无向图，如果有E条边，则有2E个链表节点；对于有向图，则有E个链表节点。
// 3. 比邻接矩阵更节省空间
// 4. 无法快速访问任意两个节点的关系，需要遍历整个链表，查询效率较低。
class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class AdjacencyMatrix {
  // 输入一个邻接矩阵，转换为邻接表
  constructor(table, hasDirection) {
    this.hasDirection = hasDirection || false;
    this.matrix = [];
    for (let i = 0; i < table.length; ++i) {
      this.matrix[i] = new LinkNode(i, null);
      let cursor = this.matrix[i];
      let lines = table[i];
      for (let j = 0; j < lines.length; ++j) {
        if (lines[j] !== 0) {
          cursor.next = new LinkNode(j);
          cursor = cursor.next;
        }
      }
    }
  }
  add(t, s) {
    if (t >= this.matrix.length || s >= this.matrix.length) return;
    let cursor = this.matrix[t];
    let alreadyHas = false;
    while (cursor.next) {
      cursor = cursor.next;
      if (cursor.val === s) {
        alreadyHas = true;
        break;
      }
    }!alreadyHas && (cursor.next = new LinkNode(s));
    if (this.hasDirection) return;
    cursor = this.matrix[s];
    alreadyHas = false;
    while (cursor.next) {
      cursor = cursor.next;
      if (cursor.val === t) {
        alreadyHas = true;
        break;
      }
    }!alreadyHas && (cursor.next = new LinkNode(t));
  }
  remove(t, s) {
    if (t >= this.matrix.length || s >= this.matrix.length) return;
    let cursor = this.matrix[t].next;
    let pre = this.matrix[t];
    while (cursor) {
      if (cursor.val === s) {
        pre.next = cursor.next;
        break;
      }
      pre = cursor;
      cursor = cursor.next;
    }
    if (this.hasDirection) return;
    cursor = this.matrix[s].next;
    pre = this.matrix[s];
    while (cursor) {
      if (cursor.val === t) {
        pre.next = cursor.next;
        break;
      }
      pre = cursor;
      cursor = cursor.next;
    }
  }
}

/**
 *  图的简单遍历
 *  1. 深度优先
 *  2. 广度优先
 */

// 深度优先搜索
// 1. 使用回溯的思想
// 2. 在最坏的情况下，对于图中的每条边，都会走两次（进入、回溯），
//    因此，T = 2E（E为边数），时间复杂度为O(E)
// 3. 在整个搜索过程中，调用栈的层数最多为节点数（V），
//    辅助数组 visited、prev 等与节点数成正比
//    因此，空间复杂度为O(V)

function showPath(prev, start, target) {
  let i = target;
  let path = [];
  while (i !== start) {
    path.unshift(i);
    i = prev[i];
  }
  console.log(path);
}

let isFound = false;

function dfs(start, target, matrix) {
  const nodeLength = matrix.matrix.length;
  if (target >= nodeLength || start >= nodeLength) return;
  const visited = [];
  for (let i = 0; i < nodeLength; ++i) {
    visited[i] = 0;
  }
  dfsearch(start, target, matrix.matrix, visited);
}

function dfsearch(s, target, matrix, visited) {
  if (isFound) return;
  visited[s] = 1;
  console.log(s);
  if (s === target) {
    isFound = true;
    return;
  }
  let cursor = matrix[s].next;
  while (cursor) {
    if (visited[cursor.val] === 0) {
      dfsearch(cursor.val, target, matrix, visited);
    }
    cursor = cursor.next;
  }
}

const matrix = new AdjacencyMatrix([
  [0, 1, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 0]
]);

//dfs(1, 4, matrix);


// 广度优先搜索
// 1. 需要借助栈结构
// 2. 可以得出最短路径

function bfs(start, target, matrixInstance) {
  const matrix = matrixInstance.matrix;
  const visited = [];
  for (let i = 0; i < matrix.length; ++i) {
    visited[i] = 0;
  }
  const queue = [];
  queue.push(matrix[start]);
  visited[start] = 1;
  while (queue.length !== 0) {
    let node = queue.shift();
    let cursor = node.next;
    while (cursor) {
      if (visited[cursor.val] === 0) {
        queue.push(matrix[cursor.val]);
        visited[cursor.val] = 1;
      }
      cursor = cursor.next;
    }
    console.log(node.val);
    if (node.val === target) break;
  }
}

bfs(1, 4, matrix);