var a = 10
console.log(a);
if(1==1){
    var a = 20;
    console.log(a);
}
console.log(a); // 20 because var is function scoped

let b = 10;
console.log(b);
if(1==1){
    let b = 20;
    console.log(b); // 20
}   
console.log(b); // 10 because let is block scoped