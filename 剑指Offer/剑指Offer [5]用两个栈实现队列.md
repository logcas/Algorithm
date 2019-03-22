# 剑指Offer [5]用两个栈实现队列

标签（空格分隔）： 算法

---

用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

## Solution
设置两个栈A、B，A用来push。当进行pop时，先判断栈B是否为空，如果为空，则把栈A的元素逐一通过pop操作push到栈B，然后pop；如果不为空，则从栈B中进行pop操作。

```javascript
let mainStack = [],
    tmpStack = [];

function push(node)
{
    mainStack.push(node);
}
function pop()
{
    if(tmpStack.length===0) {
        while(mainStack.length) {
            tmpStack.push(mainStack.pop());
        }
    }
    return tmpStack.pop();
}
```



