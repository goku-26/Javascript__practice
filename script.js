/*hello(wait);

function hello(callback){
     console.log("Hello!");
     callback();
}

function wait(){
     console.log("wait");
}

function leave(){
     console.log("Leave");
}

function goodbye(){
     console.log("Good evening");
}*/

/*sum(displaypage,1,9);

function sum(callback,x,y){
     let result=x+y;
     callback(result);
}

function displayConsole(result){
     console.log(result);
}

function displaypage(result){
     document.getElementById("myH1").textContent=result;
}*/


/*let numbers=[1,2,3,4,5];



numbers.forEach(display);
numbers.forEach(cube);

function Double(element,index,array){
   array[index]= element * 2;
}

function cube(element,array,index){
    array[index]=Math.pow(element,3);
}

function display(element){
     console.log(element);
}*/

/*let fruits = ["apple","orange","banana","berry"];

fruits.forEach(capitalize);
fruits.forEach(display);


function uppercase(element,index,array){
     array[index]=element.toUpperCase();
}

function display(element){
     console.log(element);
}

function capitalize(element,index,array){
     array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}*/

/*const numbers=[1,2,3,4,5];

const squares=numbers.map(square);

console.log(squares);

function square(element){
     return Math.pow(element,2);
}*/

/*const students=["spongebob","patrick","squidward","sandy"];

const studentsUpper=students.map(upperCase);
const studentsLower=students.map(lowerCase);

console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
     return element.toLowerCase();
}*/

/*const dates=["2024-1-10","2025-1-10","2026-1-10"];
const formateddate=dates.map(formatdates);

console.log(formateddate);

function formatdates(element){
   const parts=element.split("-");
   return `${parts[1]}/${parts[2]}/${parts[0]}`;
}*/

/*const number=[1,2,3,4,5,6,7,8,9];

let evennum = number.filter(isEven);

let oddnum = number.filter(isOdd);

console.log(oddnum);

function isEven(element){
    return element % 2===0;
}

function isOdd(element){
     return element %2===1;
}*/

/*const age=[16,17,18,19,20,21];

const adults=age.filter(isAdult);

const child=age.filter(isChild);

console.log(child);

function isAdult(element){
     return element >= 18;
}

function isChild(element){
     return element < 18;
}*/

/*const prices=[5,30,10,25,15,20];

const total=prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);
function sum(accumulator,element){
     return accumulator+element;
}*/

/*const grades=[65,75.85,95,100];

const maximum=grades.reduce(getMax);

console.log(maximum);

function getMax(accumulator,element){
     return Math.max(accumulator,element);
}*/

/*setTimeout(function(){
     console.log("Hello");
},3000);*/

/*const person1={
     firstname:"spongebob",
     lastname:"cn",
     age:30,
     favfood:"hamburger",
     say:function(){console.log(`Hi i am ${this.firstname}`)},
     eat:function(){console.log(`${this.firstname}is eating ${this.favfood}`)}
}

const person2={
     firstname:"patrick",
     lastname:"will",
     age:32,
     say:function(){console.log("Hey i am patrick....")}
}

person1.say();
person1.eat();
person2.say();*/

/*function Car(make,model,year,color){
     this.make=make,
     this.model=model,
     this.year=year,
     this.color=color
}

const car1=new Car("Toyota","Supra",2024,"Black");
const car2=new Car("Nissan","GTR",2024,"Black");
const car3=new Car("Ford","Mustang",2024,"Red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);*/

/*class Product{
     constructor(name,price){
          this.name=name;
          this.price=price;
     }
     displayproduct(){
          console.log(`Product name:${this.name}`);
          console.log(`Price:$${this.price.toFixed(2)}`);
     }
     calculatetotal(salestax){
        return  this.price+(this.price*salestax);
     }
}

const salestax=0.05;

const product1=new Product("Shirt",19.99);

product1.displayproduct();

const total=product1.calculatetotal(salestax);
console.log(`Total price(with tax):$${total.toFixed(2)}`);*/

/*class unit{
    static PI=3.14159;

    static getdiameter(radius){
           return radius*2;
    }

    static getcircumfurance(radius){
     return 2 * this.PI * radius;
    }
}

console.log(unit.PI);
console.log(unit.getdiameter(10));
console.log(unit.getcircumfurance(10));*/

/*class user{
     static usercount=0;

     constructor(username){
          this.username=username;
          user.usercount++;
     }
}

const user1=new user("spongebob");
const user2=new user("patrick");
console.log(user1.username);
console.log(user2.username);
console.log(user.usercount);*/

/*class animal{
     alive=true;

     eat(){
          console.log(`This ${this.name} is eating`);
     }
     sleep(){
          console.log(`This ${this.name} is sleeping`);
     }
}

class Rabbit extends animal{
     name="Rabbit";
}

class Fish extends animal{
     name="Fish";
}

class Hawk extends animal{
     name="Hawk";
}

const rabbit=new Rabbit();
const fish=new Fish();
const hawk=new Hawk();

rabbit.eat();
rabbit.sleep();

fish.eat();
fish.sleep();
 */

/*class animal{
     constructor(name,age){
          this.name=name;
          this.age=age;
     }
}

class Rabbit extends animal{
     constructor(name,age,runspeed){
          super(name,age);
          this.runspeed=runspeed;
     }
}

class Fish extends animal{
     constructor(name,age,swimspeed){
          super(name,age);
          this.swimspeed=swimspeed;
     }
}

class Hawk extends animal{
     constructor(name,age,flyspeed){
          super(name,age);
          this.flyspeed=flyspeed;
     }
}

const rabbit=new Rabbit("Rabbit",1,25);
const fish=new Fish("Fish",2,15);
const hawk=new Hawk("Hawk",3,50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);*/


/*class Rectangle{
     constructor(width,height){
          this.width=width;
          this.height=height;
     }


     set width(newwidth){
          if(newwidth>0){
               this._width=newwidth;
          }
          else{
               console.error("Width must be positive number");
          }
     }

     set height(newheight){
          if(newheight>0){
               this._height=newheight;
          }
          else{
               console.error("Height must be positive number");
          }
     }

     get width(){
          return this._width;
     }
     get height(){
          return this._height;
     }

     get area(){
          return this._width*this._height;
     }
}

const rectangle=new Rectangle(3,4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);*/

/*class person{
     constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
     }

     set firstname(newfirstname){
          if(typeof newfirstname === "string" && newfirstname.length>0){
                this._firstname=newfirstname;
          }
          else{
               console.error("First name must be string");
          }
     }
     
     set lastname(newlastname){
          if(typeof newlastname === "string" && newlastname.length>0){
               this._lastname=newlastname;
          }
          else{
               console.error("First name must be string");
          }
     }

     set age(newage){
          if(typeof newage==="number" && newage>=0){
               this._age=newage;
          }
          else{
               console.error("Age must be number");
          }
     }

     get firstname(){
        return this._firstname;
     }

     get lastname(){
          return this._lastname;
     }

     get age(){
          return this._age;
     }
     
}

const Person=new person("Obito","Uchiha",20);

console.log(Person.firstname);
console.log(Person.lastname);
console.log(Person.age);*/

/*const colors=["red","blue","green","black","white"];

[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);*/

/*const person = {
     fname: "ben",
     lname:"10",
     isstudent:true,
     hobby:["drawing","football","movies"],
     address:{
          street:"bannari",
          city:"sathymangalam",
          country:"India"
     }
}

console.log(person.fname);
console.log(person.lname);
console.log(person.isstudent);
console.log(person.hobby[1]);
console.log(person.address);*/

/*let numbers=[1,3,5,7,9,2,4,6,8,10];

numbers.sort((a,b)=>a-b);

console.log(numbers);*/

/*const cards=['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
     for(let i=array.length-1;i>0;i--){
          const random=Math.floor(Math.random * (i+1));

          [array[i],array[random]=array[random],array[i]];
     }
}*/

/*const date=new Date();

console.log(date);*/

/* function outer(){
     
     let message="hello";
     function inner(){
           console.log(message);
     }

     inner();
}

outer(); */

/*function createcounter(){
     let count=0;

     function increment(){
          count++;
          console.log(`count was ${increment}`);
     }

     function getcount(){
          return count;
     }

     return {increment,getcount};
}

const counter=createcounter();

counter.increment();
counter.increment();

console.log(`counter incremented ${counter.getcount()}`);*/

/*function sayhello(){
     window.alert("Hello");
}

setTimeout(sayhello,3000);*/

/*const timeout=setTimeout(() => {window.alert("Hello")},3000);

clearTimeout(timeout);*/

/*let cleartimeid;

function starttimer(){
     cleartimeid= setTimeout(()=> window.alert("Hello"),3000);
     console.log("Started");
}

function cleartime(){
     clearTimeout(cleartimeid);
     console.log("Cleared");
}*/

/*import {PI,getcircumfurance,area} from "./main.js";

console.log(PI);

const circumference=getcircumfurance(10);
const getarea=area(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${getarea.toFixed(2)}cm^2`);*/

/*function func1(callback){
           setTimeout(()=> {console.log("Time 1");
            callback()},3000);
}
function func2(){
console.log("Time 2");
console.log("Time 3");
console.log("Time 4");
}
func1(func2);*/


/*try{
   const dividend=Number(window.prompt("Enter dividend:"));
   const divisor=Number(window.prompt("Enter divisor:"));

   if(divisor==0){
     throw new Error("You cant divide by 0");
   }
   if(isNaN(dividend)||isNaN(divisor)){
     throw new Error("Value must be number");
   }
   const result=dividend / divisor;
   console.log(result);
}
catch(error){
    console.error(error);
}

console.log("Project success");*/

/*const ulElements=document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
     const firstchild=ulElement.lastElementChild;
     firstchild.style.backgroundColor="yellow";
});*/

/*const element=document.getElementById("");

const nextsibling=element.nextElementSibling;

nextsibling.style.backgroundColor="yellow";*/

/*const element=document.getElementById("vegetables   ");

const prevsibling=element.previousElementSibling;

prevsibling.style.backgroundColor="yellow";*/

/*const element=document.getElementById("mutton");

const parent=element.parentElement;

parent.style.backgroundColor="yellow";*/

/*const element=document.getElementById("nonveg");
const children=element.children;

Array.from(children).forEach(child => {
     child.style.backgroundColor="yellow";
});*/

//ADD AND CHANGE HTML USING JS

//STEP1 - create element// 

//const newH1=document.createElement("h1");

//STEP2- add attributes/properties//

//newH1.textContent="I love pizza!";
//newH1.id="myH1";
//newH1.style.color="red";
//newH1.style.textAlign="center"; 
//STEP3- append element to DOM

//document.body.append(newH1);
//document.body.prepend(newH1);

//document.getElementById("box1").append(newH1);

//const box2=document.getElementById("box2");
//document.body.insertBefore(newH1,box2);

//REMOVE HTML ELEMENT

//document.getElementById("box1").removeChild(newH1);

let buttons=document.querySelectorAll(".mybuttons");

//console.log(buttons);

/*buttons.forEach(button=>{
   button.addEventListener("click",event=>{
     event.target.style.backgroundColor="tomato";
   });
});*/

/*buttons.forEach(button=>{
     button.addEventListener("mouseover",event=>{
       event.target.style.backgroundColor="hsl(204, 100%, 40%)";
     });
  });
 buttons.forEach(button=>{
     button.addEventListener("mouseout",event=>{
       event.target.style.backgroundColor="hsl(204, 100%, 50%)";
     });
  });*/

 /* let newbutton=document.createElement("button");
  newbutton.textContent="BUTTON 5";
  newbutton.classList="mybuttons";
  document.body.appendChild(newbutton);

  buttons=document.querySelectorAll("button");
console.log(buttons);*/
/*buttons.forEach(button=> {
     button.addEventListener("click",event=>{
       event.target.remove();
       buttons=document.querySelectorAll(".mybuttons");
       console.log(buttons);
     });
  });*/


/*function task1(){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               const task1=false;
               if(task1){
               resolve("Task 1 completed.");
               }
               else{
                    reject("Task 1 not completed");
               }
          },2000);
     })
}

function task2(){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               const task2=true;
               if(task2){
               resolve("Task 2 completed.");
               }
               else{
                    reject("Task 2 not completed.");
               }
          },1000);
     })
}

function task3(){
     return new Promise((resolve,reject)=>{
          setTimeout(()=>{
               const task3=true;
               if(task3){
               resolve("Task 3 completed.");
               }
               else{
                    reject("Task 3 is not completed");
               }
          },3000);
     })
}

/*task1().then(value=>{console.log(value);return task2()})
       .then(value=>{console.log(value);return task3()})
       .then(value=>{console.log(value); console.log("You finished all task.")})
       .catch(error => console.error(error));
*/

/*async function dotask(){
     try{
     const task1result=await task1();
     console.log(task1result);

     const task2result=await task2();
     console.log(task2result);

     const task3result=await task3();
     console.log(task3result);
     }
     catch(error){
      console.error(error);
     }
}

dotask()
*/

//JSON PRACTICE
/*const names=["spongebob","patrick","squidward","sandy"];

const json=JSON.stringify(names);

console.log(names);*/

/*const person=`[{
     "name":"spongebob",
     "age":30,
     "isemployed":true
 },
 {
     "name":"patrick",
     "age":30,
     "isemployed":false
 },
 {
     "name":"squidward",
     "age":50,
     "isemployed":true
 },
 {
     "name":"sandy",
     "age":30,
     "isemployed":false
 }]`
*/
 //const json=JSON.stringify(person);
 //const parseddata=JSON.parse(person);

//console.log(parseddata);

//FETCH JSON FILE

/*fetch("people.json")
     .then(response => response.json())
     .then(value => value.forEach(value=>console.log(value.isemployed)))
     .catch(error=>console.error(error))*/

/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
   .then(response=>response.json())
   .then(data=>console.log(data))
   .catch(error=>console.error(error))*/

async function fetchdata(){
     try{
          const pokemonName=document.getElementById("pokemonname").value.toLowerCase();
          const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

          if(!response.ok){
               throw new Error("Could not fetch resource");
          }
          const data=await response.json();
          const pokemonSprite=data.sprites.front_default;
          const imgelement=document.getElementById("pokemonsprite");

          imgelement.src=pokemonSprite;
          imgelement.style.display="block";

     }    
     catch(error){
          console.error(error);
     }
}