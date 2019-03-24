/**
 * @description 打乱数组的顺序
 */

 /**
  * 方法一
  */
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(() => Math.random() - 0.5);
console.log(arr);

/**
 *  方法二
 */

 function randomSort(arr) {
   for(let i = 0;i < arr.length; ++i) {
     let rand = parseInt(Math.random() * arr.length);
     [arr[rand], arr[i]] = [arr[i], arr[rand]];
   }
   return arr;
 }

 var a = [1,2,3,4,5,6,7,8,9,0];
 randomSort(a);
 console.log(a);