function multiplyByANumberFactory(y){
    return function multiply(x){
        return x*y;
    }
}

let multiplyBy15 = multiplyByANumberFactory(15);
let multiplyBy12 = multiplyByANumberFactory(12);

console.log(multiplyBy15(8));
console.log(multiplyBy12(9));