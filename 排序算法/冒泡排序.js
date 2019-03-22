function BubbleSort(arr) {
  let len = arr.length;
  for (let i = len - 1; i > 0; --i) {
    let hasExchange = false;
    for (let j = i - 1; j >= 0; --j) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        hasExchange = true;
      }
    }
    if(!hasExchange) return;
  }
}

let arr = [2,6,2,256,165,41,651,6541,132,165,1,1,13,65,0];
BubbleSort(arr);
console.log(arr);