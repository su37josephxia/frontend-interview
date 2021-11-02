function sort(arr) {
    // 3,2,1 => 1,2,3
    // len -1 
    var len = arr.length 
    for(i = 0 ; i < len -1 ; i ++ ) {
        if(arr[i] > arr[i + 1]) {
            var temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i+1] = temp
        }
    }

}