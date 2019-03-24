/**
 * @description 防抖函数
 * @param {function} fn 执行函数
 * @param {number} wait 延迟执行的时间
 * @param {boolean} immediate 是否立即执行
 */
function debounce(fn, wait, immediate) {
  let timer = null;
  return function () {
    let args = [].slice.call(arguments);
    if (immediate && !timer) {
      fn.apply(this, args);
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  }
}

/**
 * 
 * @param {function} fn 执行函数
 * @param {number} interval 执行的时间间隔
 * @param {boolean} immediate 是否立刻执行
 */
function throttle(fn, interval, immediate) {
  let timer = null;
  let callNow = immediate;
  return function () {
    let args = [].slice.call(arguments);
    if (callNow && !timer) {
      fn.apply(this, args);
      callNow = false;
    }
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, interval);
    }
  }
}