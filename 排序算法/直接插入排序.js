function InsertSort(arr) {
  let len = arr.length;
  for(let i = 1;i < len; ++i) {
    let tmp = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = tmp;
  }
}

let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
InsertSort(arr);
console.log(arr);