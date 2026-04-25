function secondLargest(arr) {
  if (arr.length === 0) return false;
  if (arr.length === 1) return arr[0];

  let largestElement = -Infinity;
  let secondLargestElement = -Infinity;

  for (let num of arr) {
    if (num > largestElement) {
      secondLargestElement = largestElement;
      largestElement = num;
    } else if (num > secondLargestElement && num !== largestElement) {
      secondLargestElement = num;
    }
  }

  return secondLargestElement;
}

let array = [10, 20, 20]
let result = secondLargest(array) 
console.log(result)