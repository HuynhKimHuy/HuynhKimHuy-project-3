function huynhtin(n){
    let ivalid;
    if(n < 2 && n %2 ==0){
        ivalid=true ;    
    }
    else{
        ivalid=false;
    }
    return ivalid;}
    console.log(huynhtin(5));