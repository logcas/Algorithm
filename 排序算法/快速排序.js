/*
function QuickSort(arr, start, end) {
  if(start >= end) return;
  let base = arr[start];
  let l = start;
  let r = end;

  while(l < r) {
    while(l < r && arr[r] >= base) --r;
    arr[l] = arr[r];
    while(l < r && arr[l] <= base) ++l;
    arr[r] = arr[l];
  }

  arr[l] = base;
  QuickSort(arr, start, l - 1);
  QuickSort(arr, l + 1, end);
}


function Quick3way(arr, start, end) {
  if(start >= end) return;
  let lt = start;
  let i = lt + 1;
  let gt = end;
  let base = arr[start];
  while(i <= gt) {
    if(arr[i] === base) ++i;
    else if(arr[i] < base) {
      [arr[i], arr[lt]] = [arr[lt], arr[i]];
      ++lt;
      ++i;
    } else {
      [arr[i], arr[gt]] = [arr[gt], arr[i]];
      --gt;
    }
  }
  Quick3way(arr, start, lt - 1);
  Quick3way(arr, gt + 1, end);
}


let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
Quick3way(arr, 0, arr.length - 1);
console.log(arr);
*/

function QuickSort(arr) {
  let l = 0;
  let r = arr.length;
  _QuickSort(arr, l, r);
}

function _QuickSort(arr, l, r) {
  if(l < r) {
    const [left, right] = partition(arr, l, r);
    _QuickSort(arr, l, left);
    _QuickSort(arr, right + 1, r);
  }
}

function partition(arr, l, r) {
  let less = l - 1;
  let more = r;
  let num = arr[l];
  while(l < more) {
    if(arr[l] < num) {
      [arr[l], arr[less + 1]] = [arr[less + 1], arr[l]];
      less++;
      l++;
    } else if(arr[l] === num) {
      l++;
    } else {
      [arr[l], arr[more - 1]] = [arr[more - 1], arr[l]];
      --more;
    }
  }
  return [less + 1, more - 1];
}

let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
QuickSort(arr);
console.log(arr);