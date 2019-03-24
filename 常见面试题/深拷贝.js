function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function deepClone(origin) {
  if(!origin) return null;
  let target = Array.isArray(origin) ? [] : {};
  for(let key in origin) {
    if(origin.hasOwnProperty(key)) {
      if(isObject(origin[key])) {
        target[key] = deepClone(origin[key]);
      } else {
        target[key] = origin[key];
      }
    }
  }
  return target;
}