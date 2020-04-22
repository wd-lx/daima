let _ = require('_underscore@1.10.2@underscore');
// let arr = [1, 2, 3, 4, 5];
// arr = _.without(arr, 5);
// console.log(arr);
let obj = {
        name: "andy",
        age: 10,
        addr: "北京"
    }
    //map 可以应用在对象身上
let newObj = _.map(obj, (value, key) => {
    console.log(value, key);
    let _o = {}
    if (key == 'age' && value >= 18) {
        _o.desc = '你成年了'
    } else {
        _o[key] = value;
    }
    return _o
})
console.log(newObj);
//andy name 10 'age' 北京 addr [{ name: 'andy' }, { age: 10 }, { addr: '北京' }]

//range
let a1 = _.range(10)
let a2 = _.range(0, 60, 5)
console.log(a1); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(a2); //[ 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55 ]
//every some
//有一项满足条件 some
let r1 = _.some(obj, (value, key) => {
    return value >= 18;
})
console.log(r1); //false
// //都满足 every
let r2 = _.every(obj, (value, key) => {
    return value > 18;
})
console.log(r2); //false
// //delay 与settimeout效果一致 简单写法
function log() {
    console.log(new Date())
}
_.delay(log, 3000);
//find
let arr1 = [1, 3, 41, 2, 3, 21, 35, 3, 2, 21];
let m = _.find(arr1, item => item % 5 == 0)
console.log(m) // 35