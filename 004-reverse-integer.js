function reverseInteger(num) {
  let n = Math.abs(num);
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  
  const INT_MAX = 2**31 - 1;
  const INT_MIN = -(2**31);

  if (rev > INT_MAX || rev < INT_MIN) return 0;
  
  return (num < 0) ? -rev : rev
}
let num = 123;
let result = reverseInteger(num);
console.log(result);
