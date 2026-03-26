// Interview Question 3 (Very Important for 1 Year Dev)

// Topic: Event Loop

// Tell me the output.
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

//Correct Output  A D C B
// Perfect Interview Answer (Short Version)

// You can say this:

// JavaScript executes synchronous code first.
// setTimeout goes to the macrotask queue, while Promise.then goes to the microtask queue.
// After the call stack becomes empty, the event loop executes microtasks first, then macrotasks.
// Therefore the output is A D C B.

