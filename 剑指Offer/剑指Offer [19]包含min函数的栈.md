# 剑指Offer [19]包含min函数的栈

标签（空格分隔）： 算法

---

定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。

## Solution
设置两个栈A和B，A用来作为正常的栈，B用来存储最小值。

1. 当进行push操作时，假设要push的数wei，如果B栈为空或者x小于B的栈顶，则把x同时压入AB两栈，否则只压入A栈。
2. 当进行pop操作时，先判断A栈与B栈的栈顶是否相等，如果相等，则同时出栈，否则，只对A栈进行出栈。

```javascript
let stack = [],
    minStack = [];

function push(node)
{
    if(minStack.length === 0) {
        minStack.push(node);
    } else {
        if(minStack[minStack.length - 1] >= node) {
            minStack.push(node);
        }
    }
    stack.push(node);
}
function pop()
{
    if(stack.length === 0) return;
    if(stack[stack.length - 1] === minStack[minStack.length - 1]) {
        minStack.pop();
    }
    stack.pop();
}
function top()
{
    return (stack.length - 1 >= 0) ? stack[stack.length - 1] : null;
}
function min()
{
    return (minStack.length - 1 >= 0) ? minStack[minStack.length - 1] : null;
}
```