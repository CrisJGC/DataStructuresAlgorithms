/*
  Crear una funcion que junte dos array y las acomode de menor a mayor
*/

function mergeSortedArrays(arr1, arr2) {
  let arrRes = []
  arrRes = arr1.concat(arr2).toSorted((a, b) => a - b)
  console.log(arrRes)
}

// mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);


function mergeSortedArrays1(arr1, arr2) {
  const mergeArray = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let i = 1
  let j = 1

  while (arr1Item || arr2Item) {
    // console.log(mergeArray)
    if (!arr2Item || arr1Item < arr2Item) {
      mergeArray.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      mergeArray.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }
  return mergeArray
}
console.log(mergeSortedArrays1([0, 3, 4, 31], [3, 4, 6, 30]))