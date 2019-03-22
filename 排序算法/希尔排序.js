function ShellSort(arr) {
  if (arr.length <= 1) return;
  let len = arr.length;
  let gap = Math.floor(arr.length / 3) === 0 ? 1 : Math.floor(arr.length / 3);
  for (; gap > 0; gap = Math.floor(gap / 3)) {
    for(let i = gap; i < len; ++i) {
      let j = i - gap;
      let tmp = arr[i];
      while(j >= 0 && arr[j] > tmp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = tmp;
    }
  }
}

let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
ShellSort(arr);
console.log(arr);