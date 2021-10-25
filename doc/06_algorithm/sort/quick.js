const input = [1, 3, 2, 5, 9, 7, 11, 4];
console.log(sort(input));

// 分治思想
// 递归函数

function sort(arr, left, right) {
  console.log("quick:", left, right);

  var len = arr.length;
  var partitionIndex;
  var left = left ? left : 0;
  var right = right ? right : len - 1;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    // 根据基准数所有位置 左右分治为两部分
    // 两部分别递归快排过程
    sort(arr, left, partitionIndex - 1);
    sort(arr, partitionIndex + 1, right);
  }
  return arr;
}

/**
 * 分组
 * 将数组中指定范围内的数据进区分
 * 1. 将做左侧数据当做基准数
 * 将比基准数大的放在基准数右侧
 * 将比基准数小的放在基准数左侧
 * 返回基准数所在位置
 * @param {*} arr
 * @param {*} left
 * @param {*} right
 * @returns
 */
function partition(arr, left, right) {
  // 分区操作
  var pivot = left; // 设定基准值（pivot）
  var index = pivot + 1;

  console.log("partition.....begin", pivot,arr);
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  console.log("partition.....end", arr);
  return index - 1;
}
/**
 * 交换数据位置
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function swap(arr, i, j) {
  console.log("swap ....");
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
