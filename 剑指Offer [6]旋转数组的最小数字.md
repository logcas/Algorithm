# 剑指Offer [6]旋转数组的最小数字

标签（空格分隔）： 算法

---

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

## Solution
1. 如果数组进行了旋转，那么，第一个元素是永远都大于最后一个元素的。
2. 可以设置两个指针，分别指向数组头(l)、尾(r)。
3. mid = (l + r) / 2，当arr[mid] > arr[l]时，l = mid；当arr[mid] < arr[r] 时，r = mid。如果arr[mid] == arr[l] == arr[r]，则需要通过遍历去确定最小的数。
4. 直到 r = l + 1。

```javascript
function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length === 0) return 0;
    // write code here
    let l = 0, 
        r = rotateArray.length - 1,
        mid = 0;
    while(rotateArray[l] >= rotateArray[r]) {
        if(l + 1 === r) {
            mid = r;
            break;
        }
        if(rotateArray[l] === rotateArray[r] === rotateArray[mid]) {
            let min = rotateArray[l];
            for(let i = l;i <= r; ++i) {
                if(min >= rotateArray[i]) {
                    mid = i;
                    min = rotateArray[i];
                }
            }
            break;
        }
        mid = Math.floor((l+r)/2);
        if(rotateArray[l] <= rotateArray[mid]) {
            l = mid;
        } else {
            r = mid;
        }
    }
    return rotateArray[mid];
}
```