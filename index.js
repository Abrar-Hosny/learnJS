// console.log("hwllo");


// window.alert("i really like pizza")


// comments are being ignored by interpriter


/*hfkjh*/



// 1- variables :- are a containers for storing data


// two steps : 
// 1- Declaration (let , var ,const)
// 2- assignment (= assignment operator)
// they can do toethee ror sperated
// variable scoop (let)



// // this way if the use will enter a value
// let age;  // here will be undefined
// age = 20;




// age = age +1 ;    // Data Type : 1- Number 
// let firstName = "Abrar";  //  2- String :- Series of characters
// let student = true ; // 3- Boolean (true , false)
// student= false ; 

// console.log("hello" , firstName , age , student);


// document.getElementById('p1').innerHTML = "hello "+firstName ; 
// document.getElementById('p2').innerHTML = "I am "+age + "Years Old" ; 
// document.getElementById('p3').innerHTML = "I am Enrolled or not as student " + student ; 

// --------------------------------------------------

// 2- Arithmatic expression : - is a combination of ... 
// operands(values , variables)
// operators (/ , - , = ,*)
// that can be a evaluated to a value


// let x =20 ; 
// x+=23 ;   //augmented assignment operator

// x-=23
// x/=34 


// how to acess an input from user iput 
// there is two ways 1- window propmt 2- html textbox

// let username =window.prompt("what is your name" ) ; 


// document.getElementById('myButton').addEventListener('click' , ()=>{
//  let usernamew=   document.getElementById('myText').value ;
//  console.log(usernamew);
// })

// let usernamew ;
// document.getElementById('myButton').onclick = function(){
//      usernamew = document.getElementById('myText').value ;
//      console.log(usernamew);
// document.getElementById('myLabel').innerHTML="Hello " + usernamew ;


//     }



// let agey  = window.prompt("How old are yoy ") ;  //here convert input values into strings
// to convert that sring into Number by using by using Number constructor
// typeof to  know the type of a value ; 
// agey = Number(agey);

// agey+=1  ;  //here only concatenate 

// console.log("Happy b y are " , agey , "years old")


// console.log(agey , typeof agey);


// here i will convert a Number to string using string constructor
// let f =String(12)
// // if they skip that => false "" if not will convert a boolean to true 
// let b =Boolean("bizza")
// console.log(typeof f );
// console.log(b , typeof b );


// const => a variable that can't be change data security 


// const PI = 3.14 ; 
// let  r ; 
// let c ;

// r = Number (window.prompt("Enter a radius")); 
// c = 2 * PI * r ; 
// console.log("c" , c)


// let x = 3.14 ; 
// let y =4 ; 
// let f =8 ; 
// // round 

// x= Math.ceil(x);

// x=Math.pow(x ,3);
// x= Math.sqrt(x,2);
// x=Math.abs(x)
// console.log(x);


// m = Math.max(y , f) ; 

// z = Math.min(y,f); 

// let td =Math.PI 


// console.log("Maximum " , m ); 

// console.log("minimum " , z ); 


// let a ,b,c ;

//  a = Number(window.prompt("Enter a ")); 

//  b = Number(window.prompt("Enter b ")) ; 

//  c = Math.sqrt(Math.pow(a,2)+ Math.pow(b ,2));

// console.log("Hypotenuse" , c )

// document.getElementById('myButton').onclick = function(){
//     a = Number(document.getElementById('a').value) ;
//     b =Number(document.getElementById('b').value) ;
//     document.getElementById('c').innerHTML ="Side C : "  + Math.sqrt(Math.pow(a,2)+ Math.pow(b ,2));
// }



// let count = 0 ;

// document.getElementById('Decrease').onclick= function(){
//    document.getElementById('MyNumber').innerText = count -=1;
  
// }

// document.getElementById('Reset').onclick= function(){
//     document.getElementById('MyNumber').innerText = count = 0 ;
   
//  }

//  document.getElementById('Increase').onclick= function(){
//     document.getElementById('MyNumber').innerText = count +=1 ;
   
//  }


// Random Number : 
// --------------------
//  here it will generate a random number between 0 and 1
// let y =Math.random()

//  here it will generate a random number between 0 and 5

// +1 => will generate  0 : 6 1 in called an offset
// let x = Math.floor(Math.random() * 20)+1  ;
// //  

// document.getElementById('myButton').onclick = function(){
//     document.getElementById('x').innerHTML =  Math.floor(Math.random() * 6)+1
// }
// console.log(x );

// Randow 
// Math.random ()  => generates 0 : 1 between them 
// Math.random()*6  => 0 : 5

// (Math.random()*6 ) +1  => 0 : 6 


// Strings 

// let usefulName = " Yusta fandity"
// usefulName.length
// usefulName.trim()
// //remove any spaces before and after

// // slice : = extract a section of a string and returns it as a new String 
// // without modifying the original string 


// let fullName = "Abrary Yustafandity "
// let firstNamey ; 
// let lastName ; 


// lastName = fullName.slice(fullName.indexOf(" ") +1  ) ;
 
// console.log(lastName)


// method chainning = calling one methond after another in one continous line of code



// let username = "bro" ; 

// let letter = username.charAt(0).toLowerCase(); 


// ` `  => back ticks  

// let gap =3.3 ; 
// // template literal  

// console.log(`hwlle ${gap}`)


// change any innerHtml to textContent

// let time =9 ; 

// if(time >= 12){
//     console.log("good moring")
// }


// else {
//     console.log("good afternoon")


// }


// let isStudent = true ;
// let hasLicense = false ;

// if(isStudent){
//     console.log("you are student")
//     if(hasLicense){
//         console.log("you can drive")
//     }
//     else{
//         console.log("you canot drive")
//     }
// }

// else{
// console.log("you arenot a student")
// }



// let age =12 ;

// if(age>13){
//     console.log("true")
// }

// else if(age<=0 ){
//     console.log("jskldj")
// }


// let age  ; 

// document.getElementById('myButton').onclick = function(){
//    age = Number(document.getElementById('age').value) ;
//      if(age==0 ){
//     let p = document.createElement('p');
//  p.innerText ="add an age";
//  document.body.append(p);
 
//     }


//  else  if(age>66 ){
//    let p = document.createElement('p');
// p.innerText ="You are too old";
// document.body.append(p);

//    }

//   else if(age<=66  ){
//     let p = document.createElement('p');
//  p.innerText ="You are too young";
//  document.body.append(p);
 
//     }
  
//       else{
//         console.log("true");
//       }



// }



// .checked = property that determines the checked state of an Htmll checkbox or radio button element

// const subscribe = document.getElementById('myCheckBox');
// const cash = document.getElementById('myradio1');
// const visa = document.getElementById('myradio2');
// const paypal = document.getElementById('myradio3');
// const submit = document.getElementById('myButton');
// const psub = document.getElementById('Subresult');
// const pradio = document.getElementById('paymentresult');



// submit.onclick = function(){
//     if(subscribe.checked){
//         psub.textContent = "You are SubScribe"
//     }
//     else{
//         psub.textContent = "You arenot SubScribe"

//     }

//     if(visa.checked){
//         pradio.textContent = "you will pay by visa"

//     }
//    else if(cash.checked){
//     pradio.textContent = "you will pay by cash"

//     }
//     else if(paypal.checked){
//         pradio.textContent = "you will pay by paypal"

//     }
//     else {
//         pradio.textContent = "you will Not Pay by anything"

//     }



// // }


// // Ternary Operator ? :- it is a shortcut if / else statements
// // consdition ? code if it true : code if it false  ( colon : ) 

// // let age = 21 ; 

// // console.log(age>=18 ? "you are adult" : "Your are not adult ");
// // // like you ask a question  

// // let message = age >= 90 ? "yes" : "No"; 

// // // donot repeat yourself
// // console.log(message);


// // let isStudent = true;

// // console.log(isStudent ? "yes" : "no")

// // switch :- efficient replacement to many else if statements
// // in the case we can put a value or a condition 



// // let day ="oo" ; 

// // switch(day){
// //     case 1 : 
// //     console.log("Sunday"); 
// //     break ; 

// //     case 2 : 
// //     console.log("monday"); 
// //     break ;
// //     case 3 : 
// //     console.log("thuth"); 
// //     break ;
// //     case 4 : 
// //     console.log("wen"); 
// //     break ;
// //     case 5 : 
// //     console.log("thurs"); 
// //     break ;
// //     case 6 : 
// //     console.log("fri"); 
// //     break ;
// //     case 7 : 
// //     console.log("sat"); 
// //     break ;

// //     default: 
// //     console.log("wrong")


// // }


// // let testScore =93 ; 
// // let lettterGrade ; 

// // switch (true) {
// //     case testScore>=90 : 
// //     lettterGrade = "A"; 
// //     break ; 

// //     case testScore>=80 : 
// //     lettterGrade = "B"; 
// //     break ; 
// //     case testScore>=70 : 
// //     lettterGrade = "C"; 
// //     break ; 
// //     case testScore>=60 : 
// //     lettterGrade = "D"; 
// //     break ; 

// //     default : lettterGrade = "F";
// // }

// // console.log(lettterGrade); 


// let namey = " jdd";

// console.log(namey.startsWith(" "));
// console.log(namey.endsWith(" "));

// console.log(namey.includes(" "))


// // padStart , padEnd(newLength , character)


// // logical Operators = > used to combine and mainpulate boolean values
// // And = &&  
// // or = || 
// // not = !

// const temp =20 ; 
// if(temp > 0  && temp <= 30){
//     console.log("weather is good")
// }





// if()


// // = => assignment operator
// // == =>comparsion operator (compare if values are equal)
// // === => strict equality operatot (compare if values and dataTypes)
// // != inequality operator
// // !== strict inequality operator

// const PI = 3.14

// if(PI !== "3.14"){
//     console.log("that is pi")
// }

// else{
//     console.log("that isnot pi")



// }



// while  : repeat some code Ehile some condition is true
// let username ; 

// while(username === "" || username == null){
//   username = window.prompt(`Enter Your Username`);
// }

// console.log('hello' , username);


// for loop : do something for  A limited amount of time

// functions : 
// A section of resuable code Declare code once and use it whenever you want to call the function to execute the code
// in the function => parameters in the calling => arguments[data]

// function happBirsthday(username , age) {
// console.log("hello",username)
// }



// happBirsthday("Abrar");



// function add ( x, y ){
//     return x+y;
// }

// console.log(add(3,4));

// function isEven (number){
//     // if(number%2==0){
//     //     return "Yes";
//     // }
//     // else{
//     //     return false ;
//     // }

//     // ternary operator 
//     return number%2==0 ? true : false ;
// }


// console.log(isEven(2))


// Variable scoop => where a variable is recognized and accessible (local vs global)
// we can declare the same variable but in different scoops / functions cannot see the sublings functions content
// local scoop is a Variable declare in the function 
// global scoop a variable declare out the functions
// global scoop can be accessible to all code



// Arrays : - A Variable like a structure that can hold more than 1 value

// let fruits = ["apple" , "banana" , "orange"];

// console.log(fruits[3]); 
// // we push  an element to the end of an array 
// fruits.push("hello");

// console.log(fruits[3]);

// fruits.pop() 
// console.log(fruits[3])

// fruits.unshift("apple")
// // add an element from beging
// console.log(fruits)

// console.log(fruits.shift())

// console.log(fruits.indexOf("hekk"));

// fruits.sort()
// for (let x of fruits){
//     console.log(x)
// }


// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements
// (unpacks the element )


// let numbers = [1,2,3,4,5];

// // spread operator
// let max =Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log(max ,min);
// // it can be with the strings too 

// let userName = "Bro Code" ;
// userName = [...userName].join("-") 
// // Array of characters
// console.log(userName);


// let fruits = ["apple" , "banana" , "coco"]
// let newFruits = [... fruits , ...fruits , "eggs" , "milk"];
// console.log(newFruits)


// rest parameters  => (...rest) allow a function work with a variable number of arguments by bundling them into array 
// rest => bundles sperate elments into an array


// function openFridge (...foods){
//     console.log(...foods);
// }


// // rest parameters => bundles all values into array means that spread operator on the parameters and the arguments multi sperate data 
// // sperad operator=> expands an array int seperate elements

// const food1 = "pizza" ;
// const food2 = "hamburguer"
// const food3 = "hotdog" ;
// const food4 = "sushi"; 
// const food5 = "ramen" ; 

// openFridge(food1, food2, food2 , food3 , food4 , food5);

// // rest parameters => to accept any number of arguments and bundle them into array
// function sum(...numbers){
// let result = 0 ; 
// for (let number of numbers){
//     result+=number ; 

// }
// return result ;
// }

// console.log(sum(1,2,56,76,89))


// CallBack functions : - a function that is passed as an argument 
// to another function 
// used to handle ascyronous operations :- operations takes time to execute
// like : 1- Reading a file 
// 2- network request 
// 3- interacting with database 
// callbacks :- works like (hey when you are done , call this next) ; 



// js do not wait for ascr process to finish it contine the running of the program 
// so callbacks functions genrantee that the asnc process finishes running then the rest of the program contine running
// hello(wait); 

// function hello (callback){
//     console.log("hello!");
// callback();
// }

// function wait(){
//     console.log("wait")
// }
// function goodBye ( ){
//     console.log("Goodbye");
// }

// sum(2,3,display);

// function sum (x, y ,callback){
//     let result = x+y ; 
//     callback(result , displayPage);
// }

// function display(result ,callback){
//     console.log(result);
//     callback(result);
// }

// function displayPage(result){
//     document.getElementById('myh1').textContent = result ; 
// }

// ==============================================

// foreach :- method used to iterate over the elements of an array 
// and apply a specified function (callback ) to each element
// array.forEach(callback)
// foreach element , index , array are provided
// foreach are provided  3 things of an array (element , index and the whole array)

// let numbers = [1,2,3,4,5]



// numbers.forEach(double)

// numbers.forEach(display)

// function double(element , index , array){
//     array[index] = element *2
// }

// function display (element){
//     console.log(element);
// }


// let fruits =["Apple" , "Banana" , "Cooc" , "Tomato"]


// foreach will iterativly هتمشي علي ال 
// elements  و في نفس الوقت هتنادي علي 
// callback function لكل element
// useful to apply a function to each element in the array 
// fruits.forEach(firstCase);
// fruits.forEach(display);

// function upperCase(element){
// console.log(element.toUpperCase());
// }
// function lowerCase(element , index ,array){
//     array[index] = element.toLowerCase();
//     }

//     function firstCase(element , index ,array){
//         array[index] = element.charAt(0).toUpperCase()+element.slice(1);
//         }

// function display(element ){
//     console.log(element)
// }


// =================================================

// .map () => accepts a callback and applies that function to each element of an array , then return a new array 
// similar to foreach but the difference here it returns a new array 

// const numbers = [1,2,3,4,5] ;

// map also =>is provided element , array , index it keep track of all of that 

// const squares=numbers.map(square);
// console.log(squares);



// const cubes =numbers.map(cube);

// console.log(cubes);


// function square (element){
//     return Math.pow(element,2);

// }



// function cube (element){
//     return Math.pow(element,3);
// }

// const students =["Spongebab" , "patrick" , "Squidward" , "Sandy"];

// const result = students.map(upperCase);//array.map(callback)
// // the main thing in the callback function when we use with it map() function  we should return the new array 

// const lowerCases = students.map(lowerCase);
// console.log(result);
// console.log(lowerCases);


// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }


// const dates =["2024-1-10" , "2025-2-20" , "2026-3-30"];
// const reformat = dates.map(formatDates);
// console.log(reformat);

// function formatDates (element){
// const parts = element.split("-")
//  const reformat = parts[2] +"-" +parts[1] + "-" + parts[0];
//  return  reformat;

// }


// filter method = > creates a new array by filterin out elements
// filter method it is a function that also takes a function as a parameters [callback] functions but the differenc here it return an filtered array 


// let numbers = [1,2,3,4,5,6,7];
// let evenNumbers = numbers.filter(isEven) ; 
// console.log(evenNumbers);
// let oddNumbers =numbers.filter(isOdd);
// console.log(oddNumbers);

// function isOdd (element){
//     return element%2 !== 0 ; 
// }

// function isEven(element){
//     return element%2=== 0 ; 
// }


// const ages = [16 ,17, 18 , 19 , 20 , 60] ;
// const adults =ages.filter(isAdult); 
// const childern = ages.filter(isChild);

// console.log(adults , childern);

// function isAdult (element){
//     return element>=18 ; 
// }


// function isChild (element){
//     return element<18 ; 
// }

// const words = ["apples" , "orange" , "banana" , "Kiwi" , "pomegranta" , "coconot"]

// const shortWords = words.filter(getShortWords);
// const longWords  =words.filter(getlongWords);

// console.log(shortWords,longWords)

// function getShortWords (element){
//     return element.length<=6 ; 
// }


// function getlongWords (element){
//     return element.length>6 ; 
// }

// ======================================

// .reduce () = > reduce the element of an array to a single value
// for price
// const prices = [5,30 ,10 ,25,15,20];

// const total = prices.reduce(sum);

// console.log(total);

// function sum(accumulator , element){
//     return accumulator+element
// }


// const grades = [75,50 ,90 , 80 , 65,95];

// const maximum =grades.reduce(getMax);
// console.log(maximum);
// const min =grades.reduce(getMin);
// console.log(min);

// function getMax(accumulator , element){
//     return Math.max(accumulator , element);
// }

// function getMin(accumulator , element){
//     return Math.min(accumulator , element);
// }


// ==========================

// // 1- function declaration => define a resuable block of code that performs a specific task 
// function hello (){
//     console.log("hello!");
// }


// 2- function expression => a way to define a function as a value or variable

// const hello = function(){
//     console.log("hello")
// }
// set function as a value
// calling nameOfVariable() ; 
// hello();

// here pass a function as a argument  / value
// setTimeout(function(){
//     console.log("helo")
// } , 3000);


// const numbers = [1,2,3,4,5,6]
// // here we use it as a one time function
// // any callback we can replace it with a   function 
// const squres =numbers.map(function (element){
//     return Math.pow(element,2);
// }
// );

// console.log(squres);

// const cubes = numbers.map (function (element){
//     return Math.pow(element,3) ;
//     })
//     console.log(cubes);


// const isEven = numbers.filter (function(element){
//     return element%2 === 0 ;  
// })

// console.log(isEven);

// const isOdd = numbers.filter(function(element){
//     return element %2 !== 0 ; 
// })

// console.log(isOdd);


// const sum = numbers.reduce(function(pre , element){
//     return pre+element ; 
// })


// console.log(sum);



// function expression : = 
// 1- callbacks 
// 2- Higher-order function 
// 3- clousers 
// 4- Event Listener
// ==============================================


// arrow function => concise way to write afunction expressions
// good for simple functions that you use only one (parameters ) => some code

// function declaration
// function hello (){
//     console.log("hello");
// }

// hello();


// function expression 


// const hello = function (){
//     console.log("ello");
// }



// const hello = (name , age) => {
//     console.log(name , age)
// }

// hello("abrar" , 20);


// will execute the callback after a 3000 sec
// setTimeout(callback , 3000);

// setTimeout(()=>{
// console.log("sjks");
// },3000)
// foreach , map , filter , reduce 

// const numbers = [1,2,3,4,5,6,7] ; 

// const squre = numbers.map((element) => { return Math.pow(element, 2)}) ; 
// const cube = numbers.map((element) => { return Math.pow(element, 3)}) ; 
// const odd = numbers.filter((element) => element%2 !== 0);
// const even = numbers.filter((element) => element%2 === 0);
// const redy = numbers.reduce((accumulator, element) => accumulator+element);

// console.log(squre ,cube , odd ,even ,redy);



// objects in js := is a collection ot related properties and /or methods can represent real world objects
// (people , products ,places) 
// object = {key : value} ; 


// const person =  {
//     firstName:"Spongo" , 
//    lastName : "pop" , 
//    age : 20 , 
//    isEmployee : true ,
//    sayHello : function(){console.log("hello")},
//    eat : function (){
// console.log("rose bifff")
//    }

// }

// console.log(person.firstName) ;


// const person2 = {
//     firstName : "pat",
//     lastName : "star",
//     sayHello : ()=>{
//         console.log("hello , i am pat ");
//     },

// }

// console.log(person2.firstName) ; 
// person.sayHello();
// person.eat();


// =============================================================


// this Keyword : 
// =================

// this : reference to the object where this is used (the object depends on the immediate context )
// person.name == this.name  
// this keyword => we use it when we want to access a property in the same object 

// const person  = {
// name : "spong" , 
// favfood : "hamburger" , 
// // this -> reference to the object we where in now
// sayHello : function(){console.log(this.name)}
// ,
// eat : function(){console.log(this.favfood)}
// // }


// person.sayHello() ; 
// person.eat();

// will return window
// console.log(this)

// this doesnot work with the arrow function 
// when we use this with arrow function => it will make a reference to the window  thdi => reference
// ==============================================================



// constructor : = special method for defineing the properties and mehtod of objects 




// const car1 ={
//     make : "Ford",
//     model : "Mustang" , 
//     year : 2021 , 
// color : 'red' ,
// drive : function ( ){console.log(this.model)}

// }



// // Object Constructor 

// function Car (make , model  ,year , color ){
//     this.make =make ; 
//     this.model = model ; 
//     this.year = year ; 
//     this.color =color ; 
// this.drive = function(){console.log(this.make);}
// }


// // here we will make an object from this constructor 

// const car2 =new Car("ma" , "hd" , 2032 , "green") ; 

// car2.drive();
// ===========================================================================

// instead  of writing a constructor object we use clases that is a feature of ES6 
// provides a mor structural and cleaner way to work wiht objects 
// ex. static keyword , encupsoulation , inheritance


// class Product {
//     constructor (name ,price){
//         this.name = name ; 
//         this.price =price ;
//     }

//     // in classes we donot add a word function to the method

//     displayProduct(){
//         console.log(this.name) ; 

//     }

// }

// const product1 = new Product ("channel" , 23) ;
// console.log(product1.name , product1.price )
// product1.displayProduct() ; 


// const pr2 = new Product ("pants" , 23)  ; 

// console.log(pr2.name) ;


// static keyword : = > keyword that defines properties and mehtods that belong to a class itself rather than
// the object created from class (class owns  anything static m nt the objects)
// class MathUtilities {
//     static PI =3.1415

//     // static method
//     static getDimataer(radius){
//         return radius *2
//     }
//     static getCircu(radius){
//         return radius *2 *this.PI
//     }

//     static getArea (radius){
//         return this.PI * Math.pow(radius,2)
//     }

// }

// //we donot want to create an object to access static properties


// console.log(MathUtilities.PI);
// // static belong to class

// console.log(MathUtilities.getDimataer(10));

// console.log(MathUtilities.getCircu(10))
// console.log(MathUtilities.getArea(10));
// class User{
// static userCount =0 ; 
// constructor(name){
// this.name=name ; 
// User.userCount ++ ;

// }

//  sayHello(){
//     console.log(`this is my name ${this.name}`)
// }
// static getUserCount(){
//     console.log(User.userCount)
// }
// }


// const user1 = new User("Abrar") ;
// const user2= new User("yoyo") ;
// const user3= new User("yoyotu") ;


// console.log(User.userCount)

// user1.sayHello();
// User.getUserCount();


// ===================================

// inhertiance :- allows a new class to inherit properties and methods 
// from an existing class(parent -> child) helps with code resuability 
// donot repeat yourself

// parent
// class animal {
//     alive = true ; 
//     eat(){
//         console.log(`This ${this.name} is eating `)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping `)
//     }
// }

// class Rabbit extends animal {
//     name = "rabbit";
//     run(){
//         console.log(`i can run`)
//     }
// }

// class Fish extends animal{
//     name = "fish" ; 
//     swim(){
//         console.log(`i can swim`)
//     }
// }

// class Hawk extends animal {
//     name= "Hawk" ; 
//     fly(){
//         console.log(`i can flying`)
//     }

// }

// const rabbit = new Rabbit();
// const fish =new Fish () ;
// const hawk =new Hawk () ;

// rabbit.alive=false ;
// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly() ; 

// ===============================

// super keyword := is used in classes to call the constructor or access the properties and method of a parent
// (superclass)  this => this object , super => the parent 


// class Animal {
//     constructor(name,age){
//         this.name =name ; 
//         this.age = age ;
//     }
//     move(speed){
//         console.log(`the ${this.name} moves at a speed of ${speed}`)
//     }

// }

// class Rabbit extends Animal{
// constructor(name,age,runSpeed){
// //    parent constructor we can send to parent constructor
//     super(name ,age);

// this.runSpeed =runSpeed ; 
// super.move(runSpeed) ;
// }

// }

// class Fish extends Animal {
//    constructor(name ,age ,swimSpeed){
//     super(name ,age);

  
//     this.swimSpeed =swimSpeed ; 
// }  
// }

// class Hawk extends Animal {
//     constructor(name ,age ,flySpeed){
//         super(name ,age);

    
//     this.flySpeed =flySpeed ;
//     }
// }


// const rabbit =new Rabbit("raby" , 1, 23) ;
// const fish = new Fish("Fish" , 2,34);


// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// ===============================================


// Setter and getter
// setter := special method that makes a property writable
// getter := special method that makes a property readable
// validate anf modify value


// class Rectangle {
//     constructor (width , height){
//         this.width = width ; 
//         this.height = height ; 
//     }

//     set width (newWidth){
// if(newWidth>0){
//     // _ it is a private
//     this._width = newWidth ; 

// }

// else{
//     console.error("error in width")
// }
//     }


//     set height(newHeight){
//         if(newHeight >0 ){
//             this._height = newHeight ; 
//         }
//         else{
//             console.error ("mooooooooooooooo")
//         }
//     }

//     get width (){
//         // _width => private width
//         return this._width
//     }

//     get height (){
//         return this._height; 
//     }
//     get area(){
//         return this._width * this._height ;
//     }
// }


// const rectangle = new Rectangle(3 ,4);


// console.log(rectangle.width) ;
// // here we can access all getter as a property 
// console.log(rectangle.height, rectangle.area) ;




// class Person {
//     constructor (firstName , lastName ,age){
//         this.firstName =firstName ; 
//         this.lastName = lastName ; 
//         this.age =age ; 

//     }
// set firstName (newFirstName){
//    if(typeof newFirstName ==="string" && newFirstName.length >0 ){
//     this._firstName = newFirstName ; 
//    }
//    else{console.error ("hdhhdhdhdhdh")}
// }


// set lastName (newLastName){
//     if(typeof newLastName ==="string" && newLastName.length >0 ){
//      this._lastName = newLastName ; 
//     }
//     else{console.error ("lsatts name")}
//  }
//  set age (newAge){
//     if(typeof newAge ==="number" && newAge >=0 ){
//      this._age = newAge ; 
//     }
//     else{console.error ("gata")}
//  }


//  get firstName (){
//     return this._firstName ; 
//  }

//  get lastName (){
//     return this._lastName ; 
//  }

//  get age (){
//     return this._age ; 
//  }

    
// }


// const person =new Person("Abrar" , "Yoyo" , 34);
// console.log(person.firstName) ; 

// ================================================================================

// destructring :- extract values from array and object , then assign them to  variables in a convientient way 

// [] => dec... on array 
// {} => dec.... on object 
// 5 examples
// ==========================================

// 1- swap the value of Two variables
// ====================================

// let a  =1; 
// let b = 2 ; 
// // dectructring = [array ]
// [a,b] = [b,a] ; 

// console.log(a,b)


// ====================================


// 2- Swap Elements in an array 
// =============================

// const colors = ["red" , "green" , "blue" , "white"] ; 
// [colors[0] , colors[3]] = [colors[3] , colors[0]] ; 

// console.log(colors); 

// =================================================================

// nested objects => Object inside of Objects Allows you to represent more complex
// data Structures Child Objects is enclosed by a Parent Object 

//                  Person{Adress{} , ContactInto{}}
// ShopingCart {Keyboard{ } , board{ } , Monitor{ } }
// 


// const person = {
//     fullName : "Spongpop" , 
//     age : 30 , 
//     isStudent : true , 
//     hobbies : ["karate" , "cooking"],
//     address : {
//         street : "123 conch st." , 
//         city : "Bikini Bottom" , 
//         country : "International "
//     } 

// }
// console.log(person.fullName) ; 
// console.log(person.age) ; 
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.address.street);
// console.log(person.address.city) ;
// console.log(person.address.country)


// for.... in 

// for (const property in person.address){
//     console.log(property) ; 
// }

// class Person{
   
//    constructor(name,age,...adress){
//           this.name=name ;
//           this.age = age ; 
//           this.adress = new Address(...adress);
//    }
   
   
 

    
// }

// class Address{
//     constructor(street , city ,contry){
//         this.street =street ; 
//         this.city = city ; 
//         this.contry = contry ; 
//     }
// }


// const person1 = new Person ("ss" , 30 , "123m" , "jdjd" , "djd") ; 
// const person2= new Person ("patrack" , 20 , "23m" , "jdjd" , "djd") ; 
// const person3= new Person ("squidward" , 10 , "23" , "jdjd" , "djd") ; 


// console.log(person1.adress.street);


// Array of objects : 
//-------------------

// const fruits = [{name : "apple" , color:"red"}, 
//     {name : "orange" , color:"orange" } ,
// {name : "banana" , color:"Yellow" }, 
// {name : "Coconut" , color:"white" }, 
// {name : "pineapple" , color:"green" } , 
//  ]
// fruits.push({name:"chch" ,color: "jkfj"})

//  console.log(fruits[1].name)

//  use forEach to desplay

//map => return an array 

// const firstName = fruits.map(element=>element.name);
// const color = fruits.map(element => element.color) ; 

// console.log(firstName)
// console.log(color)

// filer => will return new array after checking the condition 

// const yello = fruits.filter(element => element.color === "Yellow") ; 
// console.log(yello)

// reduce () => return  single value 

// const maxf = fruits.reduce((max , nextFruit) =>  ); 

// Sort() => method used to sort elements of an array in place 
// sorts elements as strings in lexicographic order ,not alphaberical 
// lexicographic = (alphabet + numbers + symbols ) as strings 

// let numbers =[1,10,9,23,42,2,2,4]

// // sorting numbers we should do alot of steps because it sort it as a string

// numbers.sort((a,b) => b-a) ; 
// console.log(numbers) ; 

// const people = [
//     {name:"SpongBab" , age : 30 , gpa : 3.0},
//     {name:"Patrick" , age : 32 , gpa : 3.2},
//     {name:"Squidward" , age : 31 , gpa : 3.1},
//     {name:"sandy" , age : 30 , gpa : 4}
// ]

// // sort this array of object with the age of it
// // for comparing with lexicographic order
// people.sort((a , b ) => a.name.localeCompare(b.name)) ; 

// console.log(people)


// Shuffle an array :- 

// const cards = ['A',2,3,4,5,6,,7,8,9,10];


// Here We gonna take about ES6 Modules :- 
// Am external file that contains resuable code 
// that can be imported into other javascript files.
// write resuable code for many difference apps 
// can contain variables , classes , functions , .... and more
// introduced as Part of ECAMScrpt 2015 upate 


// here we will gona import an moduale
import {PI , getCircumference , getArea , getVolume} from './mathUtile' ;
console.log(PI) ;






