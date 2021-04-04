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
