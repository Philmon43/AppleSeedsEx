function boom(){
    for(let i=0;i<100;i++){
        if(i%7===0 || i.toString().includes("7")){
            console.log("Boom")
        }else{
            console.log(i)
        }
    }
}
boom();