/*
  Devolver los indices de dos numeros que sumen el objetivo
*/

function twoSums(nums, target) {
  let index = {}
  for (let i = 0; i < nums.length; i++) {
    let remaing = target - nums[i]
    if (remaing in index) {
      return [index[remaing], i]
    }
    index[nums[i]] = i
  }
  return []
}

const nums = [2, 7, 11, 15]
const target = 26
// twoSums(nums, target)

function twoSums1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[j] + nums[i]) {
        return (i, j)
      }
    }
  }
}
// console.log(twoSums(nums, target))

// function binarySearch(arr, target) {
//   const complementMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     if (complementMap.has(complement)) {
//       return [complementMap.get(complement), i];
//     }
//     complementMap.set(arr[i], i);
//   }
//   return null;
// }

function anotherBin(nums, target){
  let left = 0
  let right  = nums.length-1

  while(left < right){
    const complement = nums[left]+ nums[right]
    if(complement === target) {
      return [left, right];
    } else if (complement < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

console.log(anotherBin(nums, target))