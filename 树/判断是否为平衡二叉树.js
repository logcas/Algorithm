function isBT (head) {
  const [isBst] = _isBT(head);
  return isBst;
}

function _isBT(head) {
  if (!head) {
    return [true, 0];
  }
  const [leftIs, leftH] = isBST(head.left);
  if (!leftIs) {
    return [false, 0];
  }
  const [rightIs, rightH] = isBST(head.right);
  if (!rightIs) {
    return [false, 0];
  }
  if (Math.abs(leftH - rightH) <= 1) {
    return [true, Math.max(left, rightH) + 1];
  }
  return [false, 0];
}