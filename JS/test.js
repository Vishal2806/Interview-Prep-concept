function myfun() {
    return "hello world";
}
console.log(typeof (myfun));

function doSomething() {
    console.log(this);
}

doSomething();