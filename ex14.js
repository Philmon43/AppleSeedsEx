const min_max = function(n){
    const num_arr = [];
    const range = 50
    let min_number= range
    let max_number= 0;
    for(let i=0;i<n;i++){
        num_arr.push(Math.floor(Math.random() * range+1));
    }
    for(let i=0;i<num_arr.length;i++){
        if(num_arr[i]>max_number){
            max_number=num_arr[i]
        }else if(num_arr[i]<min_number){
            min_number = num_arr[i]
        }
    }
    console.log("min is "+ min_number+" \nmax is "+max_number);
}

min_max(20)