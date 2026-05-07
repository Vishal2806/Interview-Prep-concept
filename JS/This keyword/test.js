/*
========================================================
                JAVASCRIPT THIS KEYWORD
========================================================

Golden Rule:
👉 "Which object is calling the function?"

Normal Function:
- Creates its own `this`
- `this` depends on HOW function is called

Arrow Function:
- Does NOT create its own `this`
- Borrows `this` from parent scope/function
========================================================
*/



/*
========================================================
1. NORMAL FUNCTION INSIDE OBJECT
========================================================
*/

const user = {
    name: "Vishal",

    greet() {
        // user is calling greet()
        // so this = user
        console.log(`Normal Function Output : ${this.name}`);
    }
};

user.greet();

/*
OUTPUT:
Vishal
*/





/*
========================================================
2. ARROW FUNCTION INSIDE OBJECT
========================================================
*/

const userArrowFun = {
    name: "Vishal",

    greet: () => {

        /*
        Arrow function does NOT create its own this.

        It borrows this from parent scope.

        Here parent scope is global/window object.

        So:
        this = window

        window.name usually does not exist.
        */

        console.log(`Arrow Function Output : ${this.name}`);
    }
};

userArrowFun.greet();

/*
OUTPUT:
undefined
*/





/*
========================================================
3. FUNCTION REFERENCE COPYING
========================================================
*/

const person1 = {
    name: "A",

    greet() {
        console.log(this.name);
    }
};

const person2 = {
    name: "B"
};

/*
Here we are copying function reference.

person2 now gets greet method dynamically.
*/

person2.greet = person1.greet;

/*
Now person2 becomes:

{
    name: "B",
    greet: function(){...}
}
*/

person2.greet();

/*
OUTPUT:
B

Because:
person2 is calling greet()

So:
this = person2
*/





/*
========================================================
4. NESTED NORMAL FUNCTION
========================================================
*/

const obj = {
    name: "Vishal",

    outer() {

        function inner() {

            /*
            inner() is called normally.

            NOT:
            obj.inner()

            So:
            this = window/global object
            */

            console.log(this.name);
        }

        inner();
    }
};

obj.outer();

/*
OUTPUT:
undefined

Because:
window.name does not exist
*/





/*
========================================================
5. FUNCTION STORED IN VARIABLE
========================================================
*/

const student = {
    username: "Rahul",

    printName() {
        console.log(this.username);
    }
};

/*
Only function reference is copied.

x becomes a normal function.
*/

const x = student.printName;

x();

/*
OUTPUT:
undefined

Because:
x() is normal function call

So:
this = window
*/





/*
========================================================
6. NORMAL FUNCTION RETURNED FROM METHOD
========================================================
*/

const car = {
    brand: "BMW",

    start() {

        /*
        Returning normal function
        */

        return function () {
            console.log(this.brand);
        };
    }
};

/*
car.start() returns function

Second () calls returned function normally
*/

car.start()();

/*
OUTPUT:
undefined

Because returned function is called normally

So:
this = window
*/





/*
========================================================
7. ARROW FUNCTION RETURNED FROM METHOD
========================================================
*/

const mobile = {
    company: "Samsung",

    show() {

        /*
        Arrow function borrows this
        from parent function show()
        */

        return () => {
            console.log(this.company);
        };
    }
};

mobile.show()();

/*
OUTPUT:
Samsung

Because:
mobile.show()

So inside show():
this = mobile

Arrow function borrows same this
*/





/*
========================================================
8. OBJECT INSIDE OBJECT
========================================================
*/

const teacher = {
    subject: "Math",

    outer() {

        /*
        teacher is calling outer()

        so:
        this = teacher
        */

        console.log(this.subject);

        const inside = {
            subject: "Science",

            inner() {

                /*
                inside is calling inner()

                so:
                this = inside
                */

                console.log(this.subject);
            }
        };

        inside.inner();
    }
};

teacher.outer();

/*
OUTPUT:
Math
Science
*/





/*
========================================================
9. SAME FUNCTION USED BY MULTIPLE OBJECTS
========================================================
*/

function display() {
    console.log(this.title);
}

const movie1 = {
    title: "KGF",
    display
};

const movie2 = {
    title: "Pushpa",
    display
};

/*
movie1 is calling display()

So:
this = movie1
*/

movie1.display();

/*
movie2 is calling display()

So:
this = movie2
*/

movie2.display();

/*
OUTPUT:
KGF
Pushpa
*/





/*
========================================================
10. ARROW FUNCTION BORROWING WRONG THIS
========================================================
*/

const laptop = {
    model: "HP",

    check: function () {

        /*
        check() will lose object connection
        later because of variable assignment
        */

        console.log(this.model);

        const test = () => {

            /*
            Arrow function borrows this
            from check()
            */

            console.log(this.model);
        };

        test();
    }
};

/*
Function reference copied

run becomes normal function
*/

const run = laptop.check;

run();

/*
OUTPUT:
undefined
undefined

Why?

run() is normal function call

So inside check():
this = window

Arrow function borrows same this
*/





/*
========================================================
11. CALLBACK FUNCTION PROBLEM
========================================================
*/

const player = {
    name: "Virat",

    showName: function () {
        console.log(this.name);
    }
};

/*
setTimeout receives only function reference.

After 1 second it runs like:

function()

NOT:
player.showName()
*/

setTimeout(player.showName, 1000);

/*
OUTPUT:
undefined

Because:
this = window
*/





/*
========================================================
12. ARROW FUNCTION INSIDE OBJECT
========================================================
*/

const animal = {
    petName: "Tom",

    speak: () => {

        /*
        Arrow function borrows this
        from global scope
        */

        console.log(this.petName);
    }
};

animal.speak();

/*
OUTPUT:
undefined
*/





/*
========================================================
                FINAL SUMMARY
========================================================

NORMAL FUNCTION:
👉 this depends on HOW function is called

ARROW FUNCTION:
👉 does NOT create own this
👉 borrows this from parent scope/function

IMPORTANT:
this does NOT depend on:
❌ where function is written
❌ which object contains function

this ONLY depends on:
✅ HOW function is called
========================================================
*/