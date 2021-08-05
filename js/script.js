//"use strict"

function myBind(func, context) {
    return func.call(context)
}

//test 1
let obj = {
    a: 2,
    b: 5,
}

function sum() {
    return this.a + this.b;      
}

console.log(myBind(sum, obj))

// test 2

let pets = {
    cat: 'Tom',
    mouse: 'Jerry'
}

function showPets() {
    console.log (this.cat + ` & ` + this.mouse)
}

myBind(showPets, pets)


