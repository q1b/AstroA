---
title : 'hello world'
subTitle: "My personel portfolio to show recuriter how able I am to do stuff ." 
publishData: 'q2'
layout: '../../layouts/project.astro'
---

# Javascript
JavaScript is a multi-paradigm, dynamic language with types and operators, standard  built-in objects, and methods .

#### JavaScript's types are:
  1. Numbers ( 1,2,3,4 )
  1. BigInt ( 1n,2n,999999n )
  1. String ( 'Names' , 'Anything' )
  1. Boolean ( true, false )
  1. Function 
  1. Object
  1. Symbol

### Variables 
Used to store instance of a data in itself to further manipulate .

New variables in JavaScript are declared 
using one of three keywords: let, const, or var .

const (Come from constant) is used for assigning data whose value is not going to  change in future .

let is used for assigning data whose value is going to change in future,
  ```javascript
    let a = 'nobita'
    console.log(a);
    a = 'Oh my God!' // Now value of a is changed
    console.log(a);
  ```
Also the declared variable is only available from the block it is enclosed into.
Example:
  ```javascript
      // myLetVariable is *not* visible out here
      for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
        // myLetVariable is only visible in here
      }
      // myLetVariable is *not* visible out here
  ```
Another example 
  ```javascript
    let a = 10; // This a is defined outside of { } 
    {
      let a = 10; // This a is defined inside of { }
      a = 20; // Value is changed but only of variable defined inside
      console.log(a);
      // 20
    }
    console.log(a)
    // 10
  ```
But if I remove let inside `{ }` in upper code 
  Then,
  ```javascript
    let a = 10; // This a is defined outside of { } 
    {
      a = 10; // This a is defined inside of { }
      a = 20; // Value is changed but only of variable defined inside
      console.log(a);
      // 20
    }
    console.log(a)
    // 20
  ```
  Var in javascript can be accessed outside of block in which it is defined already .
  ```javascript
    {
      let a = 10;
    }
    console.log(a) // a is not avaliable outside {} 
    // Error a is not defined
  ```
  But for var
  ```javascript
    {
      var a = 10;
    }
    console.log(a) // a is also avaliable outside {} 
    // 10
  ```
### Operators (+,-,*,/,%,=,==,===,<=,>=...)
  To add Strings to a single String Use + ,
  ```javascript
    'hello' + ' world'; // "hello world"
  ```
  Modulo aperator %
  Gives reminder of the number from which it is divided,
  ```javascript
    console.log(14%5); // 4
    console.log(20%7); // 6
  ```
  Comparision operator in javascript
  equality operator:
  ```javascript
    true == 'true' // true
    true === 'true' // false 
  ```
  === operator is prefered over == To avoid type coercion ,
### Conditional statements ( if, else if, else )
  ```javascript
  let condition = 1 === 1; //true
  let anotherCondition = 23-2===21; //true
  // Read it as 
  //  if condition is true 
  //  then, console.log(10);
  // else if antherCondition is true
  // then, console.log(10.5);
  // else, No above condition is right
  // then, console.log(11);
  if(condition){ 
    console.log(10);
  } else if (anotherCondition) {
    console.log(10.5);
  } else {
    console.log(11);
  }
  ```
  You can also use  ternary operator in place of if else,
  `(condition) ? (console.log(10)) : (console.log(11))`
  if condition is true then run action1, else run action2

#### Control Flow
  1. For loop
      ```js
      for (let i = 0; i < 4; i++) {
        // Will execute 4 times
        console.log(i)
      }
      // output
      // 0
      // 1
      // 2
      // 3
      ```
  2. while loop
      ```js
        let i = 0;
        while(i<4) { // Until i < 4, Code inside { } will run
          i++
          console.log(i)
        }
      // output 
      // 1
      // 2
      // 3
      // 4
      ``` 
### Objects
  There are two basic ways to create an empty object:
  ```js
    var obj = new Object();
    or 
    var obj = {};
  ```
  Both are same,
  Let create an object
  ```js
  let guy = {
      name: 'Sukhpreet',
      bestFriend: 'Max', // 'for' is a reserved word, use '_for' instead.
      details: {
        favColor: 'white',
        height: '5.9'
      }
    };
  ```
  Now, You can access properties in two ways
  ```js
    // dot notation
    obj.details.favColor; // white
    // or you can access and change it
    obj.bestFriend = 'Jack' 
  ```
  ```javascript
      // bracket notation
      obj['details']['favColor']; // white
      // or you can access and change it
      obj['bestFriend'] = 'Jack'
  ``` 
### Array
  Arrays in JavaScript are actually a special type of object.

#### Manipulate Numbers in javascript
  1. Convert a number to string
  1. Convert a string to number
  1. Using binary in javascript
  1. Math function in javascript

#### Manipulate Strings in javascript
  1. Converting Strings into numbers
  1. Editing Strings
  1. Looping over a String
  1. Using Math function in javascript
# Like