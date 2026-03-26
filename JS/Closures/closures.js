//basic idea of closures
function main(){
    const name = "vishal"
    function sayMyName(){
        console.log(name)
    }
    sayMyName();
}
main();
// common questions
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();
counter2();
counter1();
// What will be the output?
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}