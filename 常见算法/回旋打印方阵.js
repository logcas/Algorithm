// 回选打印矩阵
// 给定一个矩阵：
// [1, 2, 3, 4]
// [5, 6, 7, 8]
// [9, 10, 11, 12]
// [13, 14, 15, 16]
// 使其按以下顺序打印：
//  [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]

function rotatePrint(matrix) {
  let Lx = 0;
  let Ly = 0;
  let Rx = matrix.length - 1;
  let Ry = Rx;
  const res = [];
  while((Lx !== Rx && Ly !== Ry) && (Lx - 1 !== Rx && Ly - 1 !== Ry)) {
    print(Lx++, Ly++, Rx--, Ry--, matrix, res);
  }
  console.log(res);
}

/**
 * 
 * @param {Number} Lx 左上角x
 * @param {Number} Ly 左上角y
 * @param {Number} Rx 右下角x
 * @param {Number} Ry 右下角y
 * @param {Number[][]} matrix 矩阵
 * @param {Number[]} res 输出数组
 */
function print(Lx, Ly, Rx, Ry, matrix, res) {
  for(let i = Lx; i < Rx; ++i) {
    res.push(matrix[Ly][i]);
  }
  for(let i = Ly; i < Ry; ++i) {
    res.push(matrix[i][Rx]);
  }
  for(let i = Rx; i > Lx; --i) {
    res.push(matrix[Ry][i]);
  }
  for(let i = Ry; i > Ly; --i) {
    res.push(matrix[i][Lx]);
  }
}

// test
rotatePrint([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]);