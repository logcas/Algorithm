/**
 * 数组扁平化
 * e.g [[1,2],3,4,[6,[7]]] => [1,2,3,4,5,6,7]
 */

// 解法一
function flat(arr) {
  if (!Array.isArray(arr)) return arr;
  let target = [];
  for (let i = 0; i < arr.length; ++i) {
    if (Array.isArray(arr[i])) {
      target.push(...flat(arr[i]));
    } else {
      target.push(arr[i]);
    }
  }
  return target;
}



// 解法二
function flat2(arr) {
  return arr.reduce((accumulator, item) => accumulator.concat(Array.isArray(item) ? flat2(item) : [item]), []);
}

let arr = [
  [1, 2], 3, 4, [6, [7]]
];
console.log(flat2(arr));