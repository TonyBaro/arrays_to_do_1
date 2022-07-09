

function pushFront(arr,num){
    for (var x=arr.length; x>0; x--){
        arr[x] = arr[x-1]
    }
    arr[0] = num
    return arr
}

console.log(pushFront([5,7,2,3],8))
console.log(pushFront([99],7))

function popFront(arr){
    for (var x=0 ; x<=arr.length-1; x++){
        arr[x]=arr[x+1]
    }
    arr.length = arr.length-1
    return arr
}

console.log(popFront([0,5,10,15]))
console.log(popFront([4,5,7,9]))

function insertAt(arr,point,num){
    for (var x=arr.length ; x>point-1; x--){
        arr[x] = arr[x-1]
    }
    arr[point]=num
    return arr
}

console.log(insertAt([100,200,5],2,311))
console.log(insertAt([9,33,7],1,42))

function removeAt(arr,point){
    var pulledPoint= arr[point]
    for (var x=point ; x<= arr.length-1; x++){
        arr[x] = arr[x+1]
    }
    arr.length = arr.length-1
    return ` the array is ${arr} and pulled number ${pulledPoint} at point ${point}`

}

console.log(removeAt([1000,3,204,77],1))
console.log(removeAt([8,20,55,44,98],3))

function swap(arr){
    for (var x=0; x<arr.length-1; x+=2){
        var temp = arr[x]
        arr[x]=arr[x+1]
        arr[x+1] = temp
    }
    return arr
}

console.log(swap([1,2,3,4]))
console.log(swap([true,"Brendan",42]))
