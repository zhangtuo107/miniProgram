
// 过滤重复商品
function unique(arr) {
  var newArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i].id == arr[j].id) {
        arr.splice(j, 1);
        len--;
        j--;
        arr[i].num++;
      };
    };
    newArr.push(arr[i]);
  };
  return newArr
};
module.exports.isUnique = unique;