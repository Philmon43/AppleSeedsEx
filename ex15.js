const concat_arr = function(arr_one, arr_two){
    result = arr_one;
    for(let i=0;i<arr_two.length;i++){
        result.push(arr_two[i]);
    }
    return result
}

console.log(concat_arr(["Hello"], ["AppleSeeds", "Bootcamp"]))
// console.log(["Hello"].concat(["AppleSeeds", "Bootcamp"]))
