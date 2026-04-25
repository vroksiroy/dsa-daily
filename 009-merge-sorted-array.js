var mergeSortedArray = function (nums1, m, nums2, n) {
  // for(let i = 0; i < n; i++){
  //    nums1[m + i] = nums2[i]
  // }
  // nums1.sort((a, b)=> a - b)

  // =========================

  // let p1 = 0
  // let p2 = 0
  // let nums3 = []

  // for(let i = 0; i < m+n; i++){
  //    if(p2 >= n || (p1 < m && nums1[p1] <= nums2[p2])){
  //         nums3.push(nums1[p1])
  //         p1++
  //    }else{
  //         nums3.push(nums2[p2])
  //         p2++
  //    }
  // }

  // for(let i = 0; i < nums3.length; i++){
  //     nums1[i] = nums3[i]
  // }

  // =============================

  // let p1 = 0
  // let p2 = 0
  // let copyNums1 = nums1.slice(0,m)

  // for(let i = 0; i < m+n; i++){
  //    if(p2 >= n || (p1 < m && copyNums1[p1] <= nums2[p2])){
  //         nums1[i] = copyNums1[p1]
  //         p1++
  //    }else{
  //         nums1[i] = nums2[p2]
  //         p2++
  //    }
  // }

  // ================================

  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [4, 5, 6];
let m = 3;
let n = 3;
let result = mergeSortedArray(nums1, m, nums2, n);
console.log(result);
