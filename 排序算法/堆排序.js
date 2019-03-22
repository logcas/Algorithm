function adjust(arr, t, len) {
  let top = t;
  let val = arr[top];
  for (let ex = 2 * top + 1; ex < len; ex = 2 * ex + 1) {
    if (ex + 1 < len && arr[ex] < arr[ex + 1]) {
      ex++;
    }
    if (arr[ex] > val) {
      arr[top] = arr[ex];
      top = ex;
    } else break;
  }
  arr[top] = val;
}

function HeapSort(arr) {
  // 先调整为大顶堆
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; --i) {
    adjust(arr, i, arr.length);
  }

  // 每一轮把最大的元素（第一个）放最后，然后再调整
  for (let i = 0; i < arr.length - 1; ++i) {
    [arr[0], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[0]];
    adjust(arr, 0, arr.length - i - 1);
  }
}

let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
HeapSort(arr);
console.log(arr);