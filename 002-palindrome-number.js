function isPalindrome(num) {

  if (num < 0) return false;

  if (num % 10 === 0 && num !== 0) return false;

  let reversedHalf = 0;

  while (num > reversedHalf) {
    let digit = num % 10;
    reversedHalf = reversedHalf * 10 + digit;
    num = Math.floor(num / 10);
  }

  return num === reversedHalf || num === Math.floor(reversedHalf / 10);
}