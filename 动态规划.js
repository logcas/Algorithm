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

//
// 早矩阵中找一条最短的路径，每次只能向右或向下走
//
//  矩阵：
//  [1, 3, 5, 9]
//  [2, 1, 3, 4]
//  [5, 2, 6, 7]
//  [6, 8, 4, 3]

const map = [
  [1, 3, 5, 9],
  [2, 1, 3, 4],
  [5, 2, 6, 7],
  [6, 8, 4, 3],
];

// 状态转移表法
function shortestRoad() {
  const state = new Array(map.length);
  for(let i = 0;i < state.length; ++i) {
    state[i] = new Array(map[i].length);
  }

  for(let i = 0;i < map.length; ++i) {
    if(i > 0) state[0][i] = state[0][i - 1] + map[0][i];
    else state[0][i] = map[0][i];
  }

  for(let i = 0;i < map.length; ++i) {
    if(i > 0) state[i][0] = state[i - 1][0] + map[i][0];
    else state[i][0] = map[i][0];
  }

  for(let i = 1;i < map.length; ++i) {
    for(let j = 1; j < map.length; ++j) {
      state[i][j] = map[i][j] + Math.min(state[i - 1][j], state[i][j - 1]);
    }
  }

  return state[map.length - 1][map.length - 1];
}

console.log(shortestRoad());

// 状态方程法
// 对于上面的问题
// 显然有 minRoad[i][j] = map[i][j] + Math.min(minRoad[i - 1][j], minRoad[i][j - 1])

const tmpState = new Array(map.length);
for(let i = 0;i < map.length; ++i) {
  tmpState[i] = new Array(map.length).fill(-1);
}
function minRoad(i, j) {
  if(i === 0 && j === 0) return map[i][j];
  if(tmpState[i][j] >= 0) return tmpState[i][j];
  let topRoad = Infinity;
  if(i - 1 >= 0) {
    topRoad = minRoad(i - 1, j);
  }
  let leftRoad = Infinity;
  if(j - 1 >= 0) {
    leftRoad = minRoad(i, j - 1);
  }
  let cur = map[i][j] + Math.min(topRoad, leftRoad);
  tmpState[i][j] = cur;
  return cur;
}

console.log(minRoad(map.length - 1, map.length - 1));
