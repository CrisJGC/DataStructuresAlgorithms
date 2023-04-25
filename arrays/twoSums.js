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
console.log(twoSums(nums, target))

function twoSums2(nums, target) {
  let remaing = nums.map(num => target - num)
  for ( let i = 0 ; i < nums.length; i++){
    if( remaing === nums[i] ){
      
    }
    
  }
}