function selectSort(arr) {
  let len = arr.length;
  for(let i = 0;i < len - 1; ++i) {
    let min = Infinity;
    let idx = -1;
    for(let j = i + 1;j < len; ++j) {
      if(arr[j] < min) {
        idx = j;
        min = arr[j];
      }
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
}

let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
selectSort(arr);
console.log(arr);