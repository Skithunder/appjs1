
function sum1(tal1) {
    return tal1+10;
}

function sum2(tal1) {
    return {tal1: tal1, tal2: tal1+10};    
}
//return simple integer
let mysum1 = sum1(10);
console.log("mysum1 er: "+mysum1);

//return object
let mysum2 = sum2(10);
console.log("mysum2 tal1 er: "+mysum2.tal1+ " mysum2 tal2 er:"+mysum2.tal2);

