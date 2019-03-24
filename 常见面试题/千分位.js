/**
 * @description 给一个数字加上千分位
 * @example 1234567.55 => 1,234,567.55
 */


/**
 * 方法一
 */
function commafy(num) {
  let str = num.toString().split('');
  let start = str.indexOf('.');
  if (start === -1) start = str.length - 1;
  else start -= 1;
  let t = 0;
  for (let i = start; i >= 0; --i) {
    if (++t % 3 === 0) {
      if (i !== 0) str.splice(i, 0, ',');
      t = 0;
    }
  }
  return str.join('');
}

/**
 * 方法二：正则表达式
 */
function commafy2(num) {
  return num && num
    .toString()
    .replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
      return $2 + ',';
    });
}