function fn(a=1, b=1, ...args) {
    let total = 1;
    args.forEach(function(a) {
        total = total * a;
    });
    const numbers =[a+b, total];
    return numbers;
};

const user = {
    fullName: 'User',
    username: 'KALE'
};
const user2 = {
    fullName: 'user2'
}
function newObjCreator(...obj) {
    const newObj = {
        ...obj
    };
    return newObj;
}
console.log(newObjCreator(user, user2));
console.log(fn(1,2,3,4,5, 6));