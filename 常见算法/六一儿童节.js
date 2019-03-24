
/**
 * @description 六一儿童节
 * 六一儿童节，老师带了很多好吃的巧克力到幼儿园。
 * 每块巧克力j的重量为w[j]，对于每个小朋友i，当他分到的巧克力大小达到h[i] (即w[j]>=h[i])，他才会上去表演节目。
 * 老师的目标是将巧克力分发给孩子们，使得最多的小孩上台表演。
 * 可以保证每个w[i]> 0且不能将多块巧克力分给一个孩子或将一块分给多个孩子。
 */

 /**
  * @example 
  */

/**
  * @description 解答关键：贪心算法，将巧克力按重量升序排序，将小朋友食量按升序排序，食量小的小朋友先选巧克力
  */


 let args = [];
 while(line = readline()) {
     args.push(line);
 }

 let h = args[1].split(' ').map(n => Number(n)); // 小朋友的食量，h[i]代表第i个小朋友需求量
 let w = args[3].split(' ').map(n => Number(n)); // 巧克力重量，w[i]代表第i块巧克力的重量
 
 h.sort((a, b) => {
     return a - b;
 });
 
 w.sort((a, b) => {
     return a - b;
 });
 
 let res = 0;
 let j = 0;
 for(let i = 0;i < w.length && j < h.length; ++i) {
     if(h[j] <= w[i]) {
         ++res;
         ++j;
     }
 }
 print(res);