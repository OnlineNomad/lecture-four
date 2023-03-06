function fn(a=1, b=1, ...args) {
    let total = 1;
    args.forEach(function(a) {
        total = total * a;
    });
    const numbers =[a+b, total];
    return numbers;
}
console.log(fn(1,2,3,4,5, 6));