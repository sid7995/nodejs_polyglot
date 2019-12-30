const express = require('express');
const app = express();


app.get("/api/checkDoublePrime/:id",(req,res)=>{
    let numberPrime = prime(req.params.id);
    let left= leftPrime(req.params.id);
    let right = rightPrime((req.params.id));
    res.send(numberPrime && left && right);

});

let leftPrime=(number) =>{
    let flag= true;
    let length = number.length;
    for(let i=0;i<length-1;i++){
        number = number%  Math.pow(10.0,Math.floor(Math.log10(number)));
        if(!prime(number)){
            flag=false;
        }
    }
    return flag;
};

let rightPrime=(number) =>{
    let flag = true;
    let length =number.length;
    for(let i=0;i<length-1;i++){
        number=Math.floor(number/10);
        if(!prime(number)){
            flag=false;
        }
    }
    return flag;
};


let prime =(number)=>{
    if(number===1){
        return false;
    }
    else if(number===2){
        return true;
    }
    else {
        for(let i=2;i< Math.sqrt(number);i++){
            if(number%i===0){
                return false;
            }
        }
        return true;
    }
};

const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Listening to ${port}...`));