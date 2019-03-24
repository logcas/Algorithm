
/**
 * @description 大整数相乘
 * 有两个用字符串表示的非常大的大整数,算出他们的乘积，也是用字符串表示。不能用系统自带的大整数类型。
 */

 /**
  * @example 72106547548473106236 982161082972751393 => 70820244829634538040848656466105986748
  */

/**
  * @description 解答关键：没有，纯粹模拟手动计算
  */

function readline() {
  return '991086334737101014141447823434124179111084831929311089596731075933473557543639836 73378335716510109111963597814326771110829569262663543213269127839633';
}

function print(result) {
  console.log(result);
}

let line = readline();
let [num1, num2] = line.split(' ');
num1 = num1.split('').reverse().join('');
num2 = num2.split('').reverse().join('');
let subResult = [];
for (let i = 0; i < num2.length; ++i) {
  let tmpResult = '';
  let extraZero = i;
  let tens = 0;
  while (extraZero--) tmpResult += '0';
  for (let j = 0; j < num1.length; ++j) {
    let sum = Number(num1[j]) * Number(num2[i]);
    let units = (sum + tens) % 10;
    tens = Math.floor((sum + tens) / 10);
    tmpResult += units;
  }
  if (tens !== 0) tmpResult += tens;
  subResult.push(tmpResult);
}
let r = subResult.reduce((prev, cur) => {
  let delta = Math.abs(prev.length - cur.length);
  let newResult = '';
  if (prev.length > cur.length) {
    while (delta--) cur += '0';
  } else {
    while (delta--) prev += '0';
  }
  let tens = 0;
  for (let i = 0; i < prev.length; ++i) {
    let sum = Number(prev[i]) + Number(cur[i]);
    let units = (sum + tens) % 10;
    tens = Math.floor((sum + tens) / 10);
    newResult += units;
  }
  if (tens !== 0) newResult += tens;
  return newResult;
}, '');
print(r.split('').reverse().join(''));