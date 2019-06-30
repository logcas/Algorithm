// 0-1背包简单版
// 对于一组不同重量、不可分割的物品，我们需要选择一些装入背包，
// 在满足背包最大重量限制的前提下，背包中物品总重量的最大值是多少？

const items = [2, 2, 4, 6, 3]; // 物品的重量
const values = [3, 4, 8, 9, 6]; // 物品的价值
const n = 5; // 物品数量
const maxWeight = 9; // 背包的最大重量

function bagProblem() {
  const state = new Array(n);
  for(let i = 0; i < state.length; ++i) {
    state[i] = new Array(maxWeight + 1).fill(false);
  }
  state[0][0] = true;
  if(items[0] < maxWeight) {
    state[0][items[0]] = true;
  }
  for(let i = 1;i < n; ++i) {
    // 在不装入的条件下
    for(let j = 0;j < maxWeight + 1; ++j) {
      if(state[i - 1][j]) state[i][j] = true;
    }
    // 在装入的条件下
    for(let j = 0;j <= maxWeight - items[i]; ++j) {
      if(state[i - 1][j]) {
        state[i][j + items[i]] = true
      }
    }
  }

  // 找出最大值
  let max = -1;
  for(let i = 0;i <= maxWeight; ++i) {
    if(state[n - 1][i] && max < i) {
      max = i;
    }
  }
  return max;
}

console.log(bagProblem());

// 0-1背包升级版
// 对于一组不同重量、不同价值、不可分割的物品，
// 我们选择将某些物品装入背包，
// 在满足背包最大重量限制的前提下，背包中可装入物品的总价值最大是多少呢？

function bagProblem2() {
  const state = new Array(n);
  for(let i = 0; i < state.length; ++i) {
    state[i] = new Array(maxWeight + 1).fill(-1);
  }
  state[0][0] = 0;
  if(items[0] < maxWeight) {
    state[0][items[0]] = values[0];
  }
  for(let i = 1;i < n; ++i) {
    // 先处理不放入的情况
    for(let j = 0;j <= maxWeight; ++j) {
      if(state[i - 1][j] >= 0) state[i][j] = state[i - 1][j];
    }
    // 处理放入物品i的情况
    for(let j = 0;j <= maxWeight - items[i]; ++j) {
      let val = state[i - 1][j] + values[i];
      if(val > state[i][j + items[i]]) {
        state[i][j + items[i]] = val;
      }
    }
  }
  // 找最大值
  return Math.max(...state[n - 1]);
}

console.log(bagProblem2());