let arr = [5, 3, 2, 0, 1]
let n = arr.length

function sum(n){
    let isOdd = arr[n] % 2 !== 0
    if(n === 0) return( isOdd ? arr[0] : 0)
    return (isOdd ? arr[n] : 0) + sum(n - 1)
}

console.log(sum(n-1))