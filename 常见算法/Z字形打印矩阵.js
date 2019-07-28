// Z字形打印矩阵
// 给定以下矩阵
// 1  2  3  4
// 5  6  7  8
// 9 10 11 12
// 按以下格式输出：
// 1  5  2  3  6  9  10  7  4  8  11  12

function zPrint(matrix) {
  let Ax = 0;
  let Ay = 0;
  let Bx = 0;
  let By = 0;
  let fromUp = true;
  const res = [];
  const rows = matrix.length - 1;
  const columns = matrix[0].length - 1;
  while(
    Ay <= rows && Bx <= columns
  ) {
    print(Ax, Ay, Bx, By, fromUp, matrix, res);
    Ax === columns ? Ay++ : Ax++;
    By === rows ? Bx++ : By++;
    fromUp = !fromUp;
  }
  console.log(res);
}

/**
 * 
 * @param {Number} Ax
 * @param {Number} Ay 
 * @param {Number} Bx 
 * @param {Number} By 
 * @param {Boolean} fromUp 是否从上往下输出
 * @param {Number[][]} matrix 矩阵
 * @param {Number[]} res 输出数组
 */
function print(Ax, Ay, Bx, By, fromUp, matrix, res) {
  let x = fromUp ? Ax : Bx;
  let y = fromUp ? Ay : By;
  if(fromUp) {
    while(x >= Bx && y <= By) {
      res.push(matrix[y++][x--]);
    }
  } else {
    while(x <= Ax && y >= Ay) {
      res.push(matrix[y--][x++]);
    }
  }
}

// test
zPrint([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]);
