/**
 * @description 矩阵中的路径
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 
 * 例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
 * 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */

/**
 * @example 
 */

/**
 * @description 解答关键：DFS+回溯法
 */

let map = [];

function hasPath(matrix, rows, cols, path) {
  // write code here
  for (let i = 0; i < rows * cols; ++i) {
    map[i] = 'F';
  }
  let res = '';
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      let hasPath = search(matrix, i, j, rows, cols, res, path);
      if (hasPath) return true;
    }
  }
  return false;
}

function search(matrix, i, j, rows, cols, res, path) {
  if (i < 0 || j < 0 || i >= rows || j >= cols || map[i * rows + j] === 'T') return false;
  let ch = matrix[i][j];
  res += ch;
  if (res === path) return true;
  else {
    map[i * rows + j] = 'T';
    if (search(matrix, i - 1, j, rows, cols, res, path) ||
      search(matrix, i, j + 1, rows, cols, res, path) ||
      search(matrix, i + 1, j, rows, cols, res, path) ||
      search(matrix, i, j - 1, rows, cols, res, path)) {
      return true;
    } else {
      map[i * rows + j] = 'F';
    }
  }
  return false;
}