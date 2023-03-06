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
    username: 'KALE',
    banks: {
        bankOne: {
            address: {
                city: 'Tbilisi'
            }
        },
        bankTwo: {
            address: {
                city: 'Batumi'
            }

        },
        bankThree: {
            address: {
                city: 'Kutaisi'
            }
        }
    }
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



console.log(fn(1,2,3,4,5, 6)); // TASK ONE

const {fullName, banks: {bankThree: {address: { city }}}} = user
console.log(city); // TASK TWO

console.log(newObjCreator(user, user2)); // TASK THREE