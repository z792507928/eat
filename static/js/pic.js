function imgHash(data) {
  //扩展名
  let arr = ['png', 'jpg', 'jpeg'];
  let index;
  let type_name;
  for (let i = 0; i <= arr.length - 1; i++) {
    index = data.indexOf(arr[i]);
    if (index >= 0) {
      type_name = data.substring(index);
      continue;
    }
  }
  let first = data.substring(0, 1);
  let second = data.substring(1, 3);
  let third = data.substring(3);
  let result = first + '/' + second + '/' + third + '.' + type_name;
  return result;
};


module.exports = imgHash;
