// There are 2 category of data types primitive and non-primative
//types of primive_types
console.log(typeof ("vishal"));
console.log(typeof (3.141));
console.log(typeof (true));
console.log(typeof (234567890123456789012345678901234567890n));
console.log(typeof (undefined));
console.log(typeof (null));
console.log(typeof (Symbol('symbol')));


//Types of primitive data
//1. Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.Primitive 
let obj1 = {
    x : 45,
    y : "hello",
    z : function(){
        return this.x;
    }
}
//  list or array
let arr = [5,"hello",true , 2];