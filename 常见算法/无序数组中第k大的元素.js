/**
 * @description 给定一个无序数组，在O(n)的时间复杂度下求它的第K大的元素
 */

// 整个解决方案跟快排有点类似，但又不一样
// 1. 假设数组arr有N个无序元素
// 2. 选择第N-1个作为基准base，然后把大于base的放在左边，把小于base的放在右边
// 3. 此时基准的位置为p，如果p + 1 = k，则基准为第k大的元素
// 4. 否则，如果 p + 1 > k，说明第k大的元素在[0, p - 1]区间中
// 5. 如果 p + 1 < k，说明第k大的元素在[p + 1, N -1]区间中
// 6. 然后对相应的区间作相同的处理

// 时间复杂度的计算：
// 第一轮，需要遍历N个元素，复杂度为N
// 第二轮，需要遍历N/2个元素，复杂度为N/2
// 第三轮，需要遍历N/4个元素，复杂度为N/4
// ...
// 第N轮，需要遍历1个元素，复杂度为1
// 因此，总的复杂度为： T(N) = N + N/2 + N/4 + N/8 + ... + 1
// 根据等比数列求和，最终结果为 T(N) = 2N + 1
// 因此，时间复杂度 O(T(N)) = O(N) 
// 空间复杂度为O(1)

function getKthLarge(arr, k) {
  return search(arr, 0, arr.length - 1, k);
}

function search(arr, start, end, k) {
  if(start >= end) return;
  let l = start;
  let r = end;
  let base = arr[end];
  while(l < r) {
    while(l < r && arr[l] > base) ++l;
    arr[r] = arr[l];
    while(l < r && arr[r] < base) --r;
    arr[l] = arr[r];
  }
  arr[l] = base;
  if(l + 1 === k) return base;
  if(l + 1 > k) return search(arr, start, l - 1, k);
  return search(arr, l + 1, end, k);
}

var arr = [6,1,3,5,7,2,4,9,11,8];
let r = getKthLarge(arr, 5);
console.log(r);