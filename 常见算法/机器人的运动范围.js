
/**
 * @description 机器人的运动范围
 * 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
 * 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */

 /**
  * @example 
  */

/**
  * @description 解答关键：DFS，用一个二维数组标记是否走过
  */
let hasGo = [];

function movingCount(threshold, rows, cols)
{
    // write code here
    // 初始化
    for(let i = 0;i < rows; ++i) {
      hasGo[i] = [];
      for(let j = 0;j < cols; ++j) {
          hasGo[i][j] = 'F';
      }
  }
    
  return search(0, 0, threshold, rows, cols);
}

function search(x, y, threshold, rows, cols) {
  if(x < 0 || y < 0 || x >= cols || y >= rows || (threshold < (numSum(x) + numSum(y))) || hasGo[y][x] === 'T') return 0;
  hasGo[y][x] = 'T';
  return search(x, y - 1, threshold, rows, cols) 
       + search(x + 1, y, threshold, rows, cols)
       + search(x, y + 1, threshold, rows, cols)
       + search(x - 1, y, threshold, rows, cols)
       + 1;
}

function numSum(num) {
    let res = 0;
    while(num > 0) {
        let n = num % 10;
        res += n;
        num = parseInt(num / 10);
    }
    return res;
}

let c= movingCount(15, 20, 20);
console.log(c);