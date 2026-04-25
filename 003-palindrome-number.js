function isPalindrome(num) {
  if (num < 0) return false;
  let n = num;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return num === rev;
}
let num = 0;
let result = isPalindrome(num);
console.log(result);
