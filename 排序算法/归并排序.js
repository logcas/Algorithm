function MergeSort(arr, start, end) {
  if(arr.length === 0) return;
  if(start >= end) return;
  let mid = Math.floor(start + (end - start) / 2);

  MergeSort(arr, start, mid);
  MergeSort(arr, mid + 1, end);

  let left = start;
  let right = mid + 1;
  let tmp = [];
  while(left <= mid && right <= end) {
    if(arr[left] < arr[right]) {
      tmp.push(arr[left++]);
    } else {
      tmp.push(arr[right++]);
    }
  }
  if(left <= mid) {
    tmp.push(...arr.slice(left, mid + 1));
  }
  if(right <= end) {
    tmp.push(...arr.slice(right, end + 1));
  }
  for(let i = 0;i < tmp.length; ++i) {
    arr[start + i] = tmp[i];
  }
}


let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);