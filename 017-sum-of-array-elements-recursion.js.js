let arr = [5, 3, 2, 0, 1]
let n = arr.length

function sum(n){
    if(n === 0) return arr[0]
    return arr[n] + sum(n - 1)
}

console.log(sum(n-1))