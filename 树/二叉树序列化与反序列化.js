// 序列化
// 前序遍历序列化
function Serialization (node) {
  let str = '';
  if (node) {
    str += node.value + '_';
    str += Serialization(node.left);
    str += Serialization(node.right);
  } else {
    str += '#_';
  }
  return str;
}

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// 对应前序遍历反序列化
function Deserialization (str) {
  const queue = str.split('_').slice(0, -1);
  return deserialize(queue);
}

function deserialize(queue) {
  if (queue.length === 0) {
    return null;
  } 
  if (value === '#') {
    return null;
  }
  const value = queue.shift();
  const head = new Node(value);
  head.left = deserialize(queue);
  head.right = deserialize(queue);
  return head;
}
