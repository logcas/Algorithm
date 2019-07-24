//
// 给定一个无序数组，寻找该数组排序后，相邻两树的最大差值
// 时间复杂度要求：O(n)
// 且不允许使用非比较排序算法
//

function getMaxDifference(arr) {
  if (!arr || arr.length < 2) return 0;
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; ++i) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  if (max === min) return 0;
  const isEmpty = new Array(arr.length + 1).fill(true);
  const maxVal = new Array(arr.length + 1);
  const minVal = new Array(arr.length + 1);
  isEmpty[0] = isEmpty[arr.length] = false;
  maxVal[0] = minVal[0] = min;
  maxVal[arr.length] = minVal[arr.length] = max;
  const bucketRange = Math.ceil((max - min) / arr.length);
  for (let i = 0; i < arr.length; ++i) {
    const idx = Math.floor(arr[i] / bucketRange);
    putInto(isEmpty, maxVal, minVal, idx, arr[i]);
  }
  let maxRes = -Infinity;
  let lastMax = maxVal[0];
  for (let i = 1; i <= arr.length; ++i) {
    if (isEmpty[i]) continue;
    let r = minVal[i] - lastMax;
    maxRes = Math.max(r, maxRes);
    lastMax = maxVal[i];
  }
  return maxRes;
}

function putInto(isEmpty, maxVal, minVal, index, val) {
  isEmpty[index] = false;
  if (maxVal[index] === undefined && minVal[index] === undefined) {
    maxVal[index] = minVal[index] = val;
    return;
  }
  if (val > maxVal[index]) {
    maxVal[index] = val;
  } else if (val < minVal[index]) {
    minVal[index] = val;
  }
}

let r = getMaxDifference([2, 3, 12, 131, 65, 156, 23, 56]);
console.log(r);
