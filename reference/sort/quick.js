/**
 * 快速排序
 * @param {*} arr 
 * @param {*} left 左边界
 * @param {*} right 右边界
 */
function sort(arr, left ,right) {
   var len = arr.length
   var partitionIndex // 基准
   var left = left ? left : 0
   var right = right ? right : len - 1

   // 结束条件
   if(left < right) {
     partitionIndex = partition(arr, left, right)
     sort(arr , left , partitionIndex - 1)
     sort(arr, partitionIndex + 1 , right)
   }
   return arr
}

/**
 * 分组
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 */
function partition(arr, left ,right) {
  var pivot = left // 基准
  var index = pivot + 1
  for(var i = index ; i <= right; i ++) {
      if(arr[i] < arr[pivot] ) {
        // 交换
        swap(arr, i ,index)
        index ++
      }
  }
  swap(arr, pivot ,index -1) 
  return index - 1
}

/**
 * 交换
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function swap(arr, i, j){
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
