
/**
 * @description 最大乘积
 * 给定一个无序数组，包含正数、负数和0，要求从中找出3个数的乘积，使得乘积最大，
 * 要求时间复杂度：O(n)，空间复杂度：O(1)
 */

 /**
  * @example [2,1,3,4] => 24
  */

/**
  * @description 解答关键：最大乘积只能为 [最大*次大*第三大] 或者 [最大*次小*最小]
  */

function readline() {
  return '2 1 3 4 -5 -6 1 9';
}

function print(result) {
  console.log(result);
}

let line = readline()
var nums = line.split(' ');
nums = nums.map(n => Number(n));
let max_fir = -Infinity; // 第一大
let max_sec = -Infinity; // 第二大
let max_thr = -Infinity; // 第三大
let min_fir = Infinity; // 最小
let min_sec = Infinity; // 次小
for (let i = 0; i < nums.length; ++i) {
  if (nums[i] > max_fir) {
    [max_fir, max_sec, max_thr] = [nums[i], max_fir, max_sec];
  } else if (nums[i] > max_sec) {
    [max_sec, max_thr] = [nums[i], max_sec];
  } else if (nums[i] > max_thr) {
    max_thr = nums[i];
  }
  if (nums[i] < min_fir) {
    [min_fir, min_sec] = [nums[i], min_fir];
  } else if (nums[i] < min_sec) {
    min_sec = nums[i];
  }
}
print(Math.max(max_fir * max_sec * max_thr, max_fir * min_fir, min_sec));