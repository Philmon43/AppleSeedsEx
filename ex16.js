// const reverse_arr = function (arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (typeof arr[i] === "number") {
//             result.push(arr[i]);
//         } else {
//             throw ("expected an array of integers")
//         }
//     }
//     return result
// }



const reverse_arr = function (arr) {
    if(!Array.isArray(arr)){
        throw("Array only!");
    }
  for(let i=0;i<Math.floor(arr.length/2);i++){
      let left = arr[i];
      let right = arr[arr.length-1-i]
      arr[i] = right;
      arr[arr.length-1-i] = left
  }
  return arr
}

console.log(reverse_arr([1, 2, 3, 4, 5, 6]))