function collectionOddValues(arr){

    let newArr = [];

    function checkOddValues(arr){
      if(arr.length === 0) return;
      arr[0] % 2 != 0 && newArr.push(arr[0] )
      checkOddValues(arr.slice(1));
    }

    checkOddValues(arr)

    return newArr;

}

console.log(collectionOddValues([1,2,3,4,5,6,7,8,9]))