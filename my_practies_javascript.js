//  Falsy values
// ""
// null
// undefine
// 0
// false
// NaN
// Truthy and
// " ", [], {}  "0" "false"


let sifat=NaN;
if(sifat){
    console.log("true");
}else{
    console.log("false");

// ===========================================
Null Vs Undefined

let sifat ;
console.log(sifat);


function adnan (num1,num2){
    Sum= num1+num2;

}
const array=[2,3,4];
console.log(array[11]);
const mofiz ={name:"sifat", age: 125}
console.log(mofiz.address);
const num= adnan(2,3);
console.log(num);

// ===========================================
// double equal (==) vs triple equal (===), implicit conversion

const num1= 2;
const num2= "2";

if (num1===num2&& num1==num2){
       console.log("true");

}else{
       console.log("false");
}
// ============================================================
// map, filter, find, smart way to run for loop

const student =[2,3,4,5,6,9,8,7];
const student2=[];
for(let i=0 ; i<student.length; i++){

    const name= student[i];
    name2= name*name;
    student2.push(name2);
}
console.log(student2);
const result=student.map(function(element){
    return element*element;
})
defien another way 
const result2= student.map(element=> element*element);
console.log(result2);
const result2= student.filter(element => element>5);
console.log(result2);
const result2= student.find(element => element<5);

console.log(result2);

// ========================================================
// Apply map, filter, find on an array of objects

const student= [
    { id:101, name:"sifat"},
    { id:102, name:"adnan"},
    { id:103, name:"rohim"},
    { id:104, name:"kuddus"}
]

const Name= [];

for( let i=0; i<student.length; i++){
      
    const element = student[i];
     const name= element.name;
     Name.push(name);
}
console.log(Name);

define another way 

const name= student.map( element => element.name);
console.log(name);

const name2= student.filter(element => element.id>101);
console.log(name2);
// =============================================================
// Closure, encapsulation, private variable


function stopWatch(count){
      count=0;
      return function(){
          count++;
          return count;
      }
}
const clock1 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());

console.log(clock1());
console.log(clock1());

Array slice, splice, array join elements

 const num =[2,3,4,5,6,7,8,9]
 const part= num.splice(2,3,77,88,99);
 console.log(part);
 console.log(num);

//  you can join array 
const together= num.join(" ");
console.log(together);
====================================================
break continue in a for loop

const num =[2,3,4,5,6,7,8,9];

for(let i=0 ; i<num.length; i++){
    console.log(num[i]);
      if(num[i]>6){
          break;
          
        
          
      }
      
}

const num2 =[2,-3,4,5,-6,7,-8,-9];

for(let i=0 ; i<num2.length; i++){
  
    if(num2[i]<0){
        continue;
    
    }
    console.log(num2[i]);
}
       //   javasript basic
var promise="i am GHADA i am bolod i am masud";

var name= 24;
var name1= ''+ name;
console.log(typeof name1);
console.log(promise.toUpperCase());
console.log(promise.indexOf("m"));
console.log(promise.split("i"));
 

     
var num = -10;
var positiveNum= Math.abs(num);
console.log(positiveNum);

var num = 5.49;
var roundNum= Math.round(num);
console.log(roundNum);

var num = 5.01;
var roundNum= Math.ceil(num);
console.log(roundNum);

var num = 5.99;
var roundNum= Math.floor(num);
console.log(roundNum);

var number =10.00
var roundNum= Math.random()*100;
var num = Math.round(roundNum);
console.log(num);

//=================================================================
//         my prblm solving
function LeapyearCovert(year){
    let leapYear= year;
    let remainder = leapYear%4;
    if (remainder==0){
        console.log("this is leap year");
    }else{
        console.log("this is not leapYear");
    }
    
}
let myYear= LeapyearCovert(2020);
function factorail(num){
//=================facttorial-----------------------
    let FacorialNumber = 1;
    let fact=num;
    for (let i = 1; i<=fact; i++) {
        FacorialNumber = FacorialNumber*i;
     
       
    }
return FacorialNumber;
}
var number = factorail(5);
console.log(number);
         //////////  recursive fuction////////////////
function factorial(n){
    if(n==0){
        return 1;
    }else{
        factorial=n*factorial(n-1);
        // return factorial;
    }
}
let myNumber= factorial(10);
console.log(myNumber);

 //========== fibonacci series ==========

function fibo(n){
     let array=[0,1];

    for(i=2; i<=n; i++){
      array[i]=array[i-1]+array[i-2];
     
    }
   return array;

}
let num = fibo(10);
console.log(num);

function fibonacci(n){
   if(n == 0){
       return 0
   } else if (n == 1){
       return 1
   }else{
       return fibonacci(n-1)+fibonacci(n-2);
   }



}
var myNum= fibonacci(10);
console.log(myNum);  
//=============================================================
let nums=[2,3,4,5,6,7,8,9,20,12,14,13,18,19];

for(let i=0; i<=nums.length;i++){
    const num =nums[i];
    if(num%2==0){
        console.log(num+"this is interger number" );
    
    }else{
        console.log(num+"this is not interger number" );
    }
}
////////////// call back function ///////////////////////

function callbackFunction(name,age ,task){
    console.log("name:",name);
    console.log("age",age);
   task();
}

function washHand(){
    console.log("wash your hand ");

}
function TakeSower(){
    console.log("plz take shawor ");

}
let myname=callbackFunction("md modon ",17,washHand);
let myname2=callbackFunction("md mofiz ",29,TakeSower);

//////////////// arguments ///////////////////
function total(num1,num2){
   let sum=0;
for(let i =0; i < arguments.length; i++){
   const num=arguments[i];
   sum= sum+num;


}
   return sum;

}


let mySum=total(2,3,4,5,6,7);
console.log(mySum);
//================================================================
// javascript array practies 
var myFriend = [7, 8, 9, 10, 11];
myFriend.push(18,22,33,34);
myFriend.pop();
myFriend.pop();
 myFriend[3] = 88;
console.log( myFriend.indexOf(88));
var solani  = myFriend[3];
console.log(myFriend.length);
console.log(myFriend);

console.log(solani);

var mygf=["kulu","lulu","mulu","chulu","dulu"];
mygf.shift();
console.log(mygf);
mygf.unshift("pulu","bulu");
console.log(mygf);

 var newgf=mygf.slice(2,4);
console.log(newgf);

var num=10;
while(num<=15){
    console.log(num);
    num++;
}
for(var i=0 ; i<mygf.length; i++){
    console.log(mygf[i]);
}
var number =5100;
switch(number){
    case 10:
        console.log('this is me');
        break;
        case 8:
        console.log('this is me');
        break;
        case 5:
        console.log('this is me');
        break;
        default:
            console.log('error');
}

object

var student={ 
    id:101, 
    name:"sifatadnan" 
}
student.hobby="gali dewa";
student.name="bolod adnan";
console.log(student);
delete student.hobby;
console.log(student);

var numbers = [1,2,3,4,5];

var result = numbers.slice(0,3);

console.log(result);
//======================================================================
   // ES6 practies
   function sum(num1, num2){
    //  if(num2==undefined){
    //      num2=0;
    //  }
    //  you can write another way
        num2= num2||0;
    return num1+num2;

}

let number = sum(20);
console.log(number);

in es6 you can write another way 
function sum(num1, num2=0){

    return num1+num2;

}

let number = sum(20);
let number2 = sum(20,5);
console.log(number,number2);
================================

const firstName = "sifat";
const LastName="adnan";
const Name= firstName+" "+LastName+ " is a good boy";
console.log(Name);

const multiline= "i miss you\n"+"i want you\n"+"i need you";
console.log(multiline);

// in es6 there is another way

const Name2 =`${firstName} ${LastName} is a good boy`;
console.log(Name2);

const multiline2=`i miss you 
i want you 
i need you`
console.log(multiline2);
============== arrow function =====================
const myNumber= function Number(num1,num2=0){

    return num1+num2;
}
const number=myNumber(10);
console.log(number);
           you can write function another way
const myNumber1= num1 => num1*2;
const myNumber2= (num1,num2=0) => num1+num2;
const myNumber3= () => 5;
const doMath= (x,y) => {
     const sum = x+y;
     const sub = x-y;
    const multiPly=sum*sub;
    return multiPly;
};

const totalNumber=doMath(5,3);
const totalNumber2=myNumber1(50);
console.log(totalNumber)
console.log(totalNumber2);

spread operator, concatenate multiple arrays, array max
const array1= [2,4,5,6];
const array2= [23,24,25];
const array3= [33,34,35];
const totalArray= array1.concat(array2).concat(array3);
const totalArray2=[...array1, ...array2, 10, ...array3];
console.log(totalArray2);

const business= 450;
const small=360;
const white=244;
const arrayMax=[450,360,244];

const maxNumber= Math.max(business,small,white);
const maxNumber2= Math.max(...arrayMax);
console.log(maxNumber);
console.log(maxNumber2);
======Class, constructor, create object from class

 class adnan {
      constructor(id,name){
         this.id=id;
         this.name=name;
         this.school="vakkas school";
      }
 }
 const student= new adnan(101,"nola khan ");
 const student2= new adnan(102, "modon kumar");
 student.id;
 console.log(student,student2,);

====  Inheritance, extends class, super, class method

class parent{
    constructor(){
        this.father= "boka condro das";
    }
}

class adnan extends parent {
          constructor(id,name){
            super();
             this.id=id;
             this.name=name;
             this.school="vakkas school";
         
          }
          getFullname(){
                return this.name+" "+this.father;
          }
     }
     const student= new adnan(101,"nola khan ");
     const student2= new adnan(102, "modon kumar");
     
     console.log(student,student2.getFullname());

======Destructure, Object, array, destructure complex object

const sifat= {name:"sifat", phone:12345, age:17, job: "hudai bekar ", hobby:"programming", play:'criket' }
const {name, phone}=sifat;

console.log(name,phone);


 destructure array 
  const adnan =['nola','pola',"tola",'bura','tura', 'modon'];
  const [firstFriend,mojarFriend, ...modnaFriend]=adnan;
  console.log(firstFriend,mojarFriend,modnaFriend);

  destructure  complex object
  const sifat= {name:"sifat", 
       phone:12345, 
       age:17, 
       job: "hudai bekar ",
       hobby:"programming", 
       play:'criket',
       info:{
           address:'nai pur',
           gram: "nolapur",
       }
     }
     const{gram}=sifat.info;
     console.log(gram);

