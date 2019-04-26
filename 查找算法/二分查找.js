// 二分查找
// 适用条件：有序的数组
// 使用场景：
//     1. 如果数组过小，例如，长度为10的有序数组的查找，顺序遍历和二分查找的效率是相当的，因为数据量太小。 
//        这时候可以直接用遍历查找了。
//     2. 如果数组过大，也不适合用二分查找。
//        例如，有1亿个数据，每个数据占8字节，总共就是800MB。假如你有1GB内存，表面上是适合的，但是要注意的
//        是，数组是连续存储的，也就是说你需要在1GB中腾出800MB的连续空间，基本上不合实际。
//        再例如，有10亿个数据，同样每个数据都是8字节，总共就8GB了，并且是8GB连续空间，二分查找肯定不合适了。
//     3. 对于数据量适中，并且插入、删除等操作不频繁的数组，最适合用二分查找。
//        这里需要注意的地方有两个：
//            一、数据量适中。
//               假如只有1000万个有序的数据，每个数据占8字节，总共是80MB。对于现代的计算机来说，拥有80MB连续空间
//               是很正常的。因此，适合用二分查找。
//            二、不频繁的进行插入和删除
//               如果数据不频繁进行插入、删除等操作，那么，即使数据没有顺序，我们都可以通过排序一次、查找多次的方法
//               去平摊排序的时间消耗。

//
// 基本的二分查找
//

// 非递归版
function binarySearch(arr, n, target) {
  let low = 0;
  let high = n - 1;
  while(low <= high) {
    let mid = low + ((high - low) >> 1);
    if(arr[mid] === target) return mid;
    else if(arr[mid] > target) {
      high = mid - 1;
    } else { 
      low = mid + 1;
    }
  }
  return -1;
}

var arr = [1,2,3,4,6,7,8,9,10];
let idx = binarySearch(arr, arr.length, 5);
console.log(idx);
let idx2 = binarySearch(arr, arr.length, 4);
console.log(idx2);

// 递归版
function binarySearchRecursive(arr, n, target) {
  return recursive(arr, 0, n - 1, target);
}

function recursive(arr, low, high, target) {
  if(low > high) return -1;
  let mid = low + ((high - low) >> 1);
  if(arr[mid] === target) return mid;
  else if(arr[mid] > target) return recursive(arr, low, mid - 1, target);
  else return recursive(arr, mid + 1, high, target);
}

idx = binarySearchRecursive(arr, arr.length, 5);
console.log(idx);
idx2 = binarySearchRecursive(arr, arr.length, 4);
console.log(idx2);

//
// 二分查找的变形问题
//

// 1. 查找第一个值等于给定值的元素
function binarySearchFirst(arr, n, target) {
  let low = 0;
  let high = n - 1;
  while(low <= high) {
    let mid = low + ((high - low) >> 1);
    if(arr[mid] > target) {
      high = mid - 1;
    } else if(arr[mid] < target) {
      low = mid + 1;
    } else {
      if(mid === 0 || arr[mid - 1] !== target) return mid;
      else high = mid - 1;
    }
  }
  return -1;
}

var arr2 = [1,2,3,3,4,4,5,5,5,6,7,8,8,9];
idx1 = binarySearchFirst(arr2, arr2.length, 5);
console.log(idx1);
idx2 = binarySearchFirst(arr2, arr2.length, 10);
console.log(idx2);

// 2. 查找最后一个值等于给定值的元素
function binarySearchLast(arr, n, target) {
  let low = 0;
  let high = n - 1;
  while(low <= high) {
    let mid = low + ((high - low) >> 1);
    if(arr[mid] < target) {
      low = mid + 1;
    } else if(arr[mid] > target){
      high = mid - 1;
    } else {
      if(mid === n - 1 || arr[mid + 1] !== target) return mid;
      else low = mid + 1;
    }
  }
  return -1;
}

idx1 = binarySearchLast(arr2, arr2.length, 5);
console.log(idx1);
idx2 = binarySearchLast(arr2, arr2.length, 10);
console.log(idx2);

// 3. 查找第一个大于或等于给定值的元素
function binarySearchFristLarger(arr, n, target) {
  let low = 0;
  let high = n - 1;
  while(low <= high) {
    let mid = low + ((high - low) >> 1);
    if(arr[mid] >= target) {
      if(mid === 0 || arr[mid - 1] < target) return mid;
      else high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

idx1 = binarySearchFristLarger(arr2, arr2.length, 5);
console.log(idx1);
idx2 = binarySearchFristLarger(arr2, arr2.length, 4);
console.log(idx2);

// 4. 查找最后一个小于等于给定值的元素
function binarySearchLastSmaller(arr, n, target) {
  let low = 0;
  let high = n - 1;
  while(low <= high) {
    let mid = low + ((high - low) >> 1);
    if(arr[mid] <= target) {
      if(mid === n - 1 || arr[mid + 1] > target) return mid;
      else low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

idx1 = binarySearchLastSmaller(arr2, arr2.length, 5);
console.log(idx1);
idx2 = binarySearchLastSmaller(arr2, arr2.length, 4);
console.log(idx2);

// 附加题：在一个有序循环数组中寻找指定元素
// e.g [4, 5, 6, 1, 2, 3]

function searchFromCycleArray(arr, target) {
  function bin_search(arr, start, end, target) {
    while(start <= end) {
      let mid = start + ((end - start) >> 1);
      if(arr[mid] === target) return mid;
      else if(arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }

  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    let mid = low + ((high - low) >> 1);
    if(arr[low] < arr[mid]) {
      if(target >= arr[low] && target <= arr[mid]) {
        return bin_search(arr, low, mid, target);
      } else {
        low = mid + 1;
      }
    } else if(arr[low] >= arr[mid]) {
      if(target >= arr[mid] && target <= arr[high]) {
        return bin_search(arr, mid, high, target);
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

var _arr = [4, 5, 6, 1, 2, 3];
let idx3 = searchFromCycleArray(_arr, 4);
console.log(idx3);