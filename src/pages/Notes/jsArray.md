---
title : 'hello world'
subTitle: "My personel portfolio to show recuriter how able I am to do stuff ." 
publishData: 'q2'
layout: '../../layouts/project.astro'
---
# Javascript Arrays

*__Array.prototype__* indicates any prototype of array .

Arrays are important part for any beginner, I am going to divide Array methods or built in Array function into these 4 categories . 
  1. [Investigate array](./jsArray#store)
      1. Length 
          + [length()](#arrayprototypelength)
      1. Position
          + [at()](#arrayprototypeatindex)
          + [indexOf()](#arrayprototypeindexofelement)
          + [find()](#arrayprototypefindarrowfunction)
          + [findIndex()](#arrayprototypefindindexarrowfunction)
      1. Reading Elements
          + [slice()](#arrayprototypeslicestart-end)
      1. Checking element
          + [some()](#arrayprototypesomearrowfunction)
          + [every()](#arrayprototypeeveryarrowfunction)
          + [includes()](#arrayprototypeincludeselementfromindex)
  1. [Edit](#edit)
      1. To adds one or more elements
          + to the end of an array, use [push()](#arrayprototypepush) 
          + to the start of an array, use [unshift()](#arrayprototypeunshift) in front
      1. To remove one or more elements
          + last element of array, use [pop()](#arrayprototypepop)
          + first element of array, use [shift()](#arrayprototypeshift)
      1. To add remove and update or replace  in a array use
          + [splice()](#arrayprototypesplice-startfromindex-deletecount--itemstoadd-)
  <!-- 1. [Extracting Values](#make) -->
  <!-- 1. [Produce](#produce) -->
  
# How to Investigate array
With Array we can store strings, number, Objects and Functions too,

To investigate stored values we can use following methods 

But before investigation begins, let create a array first
```js
let fruits = [ 'orange', 'apple' ]
```
+ ##### *__Array.prototype.length()__*
    ```javascript
      //  returns the number of elements in that array
      let length = fruits.length();
      console.log(length)
      // 3
    ```
+ ##### *__Array.prototype.at(index)__*
    ```javascript
      // returns the array element at the given index
      let element = fruits.at(1)
      console.log(element)
      // 'apple'
    ```
+ ##### *__Array.prototype.indexOf(element)__*
    ```javascript
      /* returns the first index at which
      a given element can be found in the array or
      -1 if it is not present.*/

      let element = fruits.indexOf('apple')
      console.log(element)
      // 1
    ```
+ ##### *__Array.prototype.find(arrowFunction)__*
    ```javascript
      //returns the element of the first element in the array
      //that satisfies the provided testing function . Otherwise, 
      //it returns -1, indicating no element satisfy the condition .

      // Example 1
      let fruitEndsWithE = fruits.find(
        (element) => element.endsWith('e')
      );
      console.log(fruitEndsWithE);
      // 'apple'

      // Example 2
      let tempArray = [1,2,3,11,50,49,100,110]
      let numBiggerThan45 = tempArray.find(
        (element)=>element > 45
      );
      console.log(numBiggerThan45)
      // 50

    ```
+ ##### *__Array.prototype.findIndex(arrowFunction)__*
    ```javascript
      //returns the index of the first element in the array
      //that satisfies the provided testing function . Otherwise, 
      //it returns -1, indicating no element satisfy the condition .

      // Example 1
      let indexOfElement = fruits.findIndex(
        (element) => element==='apple'
      );
      console.log(indexOfElement);
      // 1

      // Example 2
      let tempArray = [1,2,3,11,50,49,100,110]
      let indexOfElement = tempArray.findIndex(
        (element) => element > 45
      );
      console.log(indexOfElement)
      // 4

    ```
+ ##### *__Array.prototype.slice(start, end)__*
    ```javascript
    // here, start and end represent the index of items in that array.
    /* returns a shallow copy of that array from start to end(end not included) 
    into a new array object .
    On changing this copy, the original array will not be modified .
    */
      
    // Let's first understand ``Onchanging this copy, the originalarray will not be modified. ``
    let sliceArray = fruits.slice();
    let newFruits = fruits
    console.log(sliceArray,fruits,newFruits);
    // Now If change fruits arraythen automatically newFruitsarray will change and vice-versawhich is not what you expect 
    newFruits = ['blueberry''banana'];
    console.log(fruits)
    // expected [ 'orange', 'apple'] But we get [ 'blueberry''banana' ] 
    // You might get it now
    
    // Now see slice method
    
    // Example
    let numbers = [ 10,30,50,70 ]
    // to get first three number
    let first3Num = numbers.slice(03)
    console.log(first3Num);
    // [10,30,50]
    // to get last number
    let lastNum = numbers.slice(-1)
    console.log(lastNum)
    // [70]
    let last3Num = numbers.slice(1)slice(-3)
    console.log(last3Num);
    // [30,50,70] 
    ```
+ ##### *__Array.prototype.some(arrowFunction)__*
    ```js
    /* Check whether at least one element in the array,
    satisfies the condition,
    that we provided in our function
    */
    // Example 1
    function isLessThan10(element, index, array) {
      return element > 10;
    }
    [10,20,4,30].some(isLessThan10)
    // true
    
    // This function can be written as
    [10,20,4,30].some((element)=>{
      return element > 10;
    })
    // true

    [10,20,50,30].some(isLessThan10)
    // false
    ```
+ ##### *__Array.prototype.every(arrowFunction)__*
    ```js
     /*checks whether all elements in the array pass the satisfies 
     the condition that we provided in our function */
     // Example 1
     let isAllNumEven = [1,2,4,5,6].every((currentValue)=>{
      return currentValue%2===0; 
     })
     console.log(isAllNumEven)
     // false
    ```
+ ##### *__Array.prototype.includes(element,fromIndex)__*
    ```js
    // fromIndex is Optional
    // checks whether an array includes, 
    //a certain value among its entries
    // Example 1
    let is2 = [2,4,6,8].includes(2)
    console.log(is2);
    // true
    let is2At3rdIndex = [2,4,6,8].includes(2,3)
    console.log(is2At2ndIndex);
    //false 
    ```
# How to Edit 
With Array we can store strings, number, Objects and Functions too,

To edit these stored values we can use following methods 

But before editing any array let create a array first
```js
let fruits = [ 'orange', 'apple' ]
```
+ ##### *__Array.prototype.push()__*
    ```javascript
      // Add one or more items to the end of an Array
      // return the length of the Array
      let newLength = fruits.push('grapes')
      console.log(fruits)
      // [ "orange", "apple", "grapes" ]
      console.log(newLength)
      // 3
    ```
+ ##### *__Array.prototype.unshift()__*
    ```javascript
      // Add one or more items to the front of an Array
      // return the length of the Array
      let newLength = fruits.unshift('grapes')
      console.log(fruits)
      // [ "grapes", "orange", "apple" ]
      console.log(newLength)
      // 3
    ```
+ ##### *__Array.prototype.pop()__*
    ```javascript
      // Removes the last element from an array
      // return the removed element from the array;
      let returnElement = fruits.pop()
      console.log(fruits)
      // [ "orange" ]
      console.log(returnElement)
      // [ "apple" ]
    ```
+ ##### *__Array.prototype.shift()__*
    ```javascript
      // Removes the first element from an array
      // return the removed element from the array;
      let returnElement = fruits.shift()
      console.log(fruits)
      // [ "apple" ]
      console.log(returnElement)
      // [ "orange" ]
    ```

+ ##### *__Array.prototype.splice(__* startFromIndex, deleteCount , itemsToAdd *__)__*
    ```javascript
      // Used to add remove or replace values in array
      // deleteCount and itemsToAdd are Optional parameters
      // return the removed elements Array
      
      // Example 1 
      let deletedFruits_1 = fruits.splice(1);
      console.log(deletedFruits_1)
      // [ "apple", "grapes" ]
      console.log(fruits)
      // [ "orange" ]
      
      // Example 2 
      // reseting fruits 
      fruits = [ "orange", "apple", "grapes" ]
      // adding fruits at 1st index
      let deletedFruits_2 = fruits.splice( 1 , 0 , 'banana','pineapple','blueberry' );
      console.log(deletedFruits_2)
      // []
      console.log(fruits)
      // ['orange', 'banana', 'pineapple', 'blueberry', 'apple', 'grapes']

      // Example 3
      // resetting fruits
      fruits = [ "orange", "apple", "grapes" ]
      let deletedFruits_3 = fruits.splice( 1, 1,'banana','blueberry' );
      console.log(deletedFruits_3)
      // [ 'apple' ]
      console.log(fruits)
      // ['orange', 'banana', 'blueberry', 'grapes']
    ```
