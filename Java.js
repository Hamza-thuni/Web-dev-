// // Comparisons
// let name;

// name='hamza';

let result=5>4;


// conditional statements

let year4=prompt('you are a good person');


if(year=2015)
 {
  alert("you are a good person");
    alert("you are a bad person");
}


// // boolean comparison

// let cond =(year==2015);

// if(cond)
// {
//     alert("fuck you!");
// }

// else statements
let year=prompt('please enter the year');
let cond2=(year==2015);
if (cond2) 
    {
    alert("you got it right");
}
else if(year==2016)
{
    alert("you got it wrong");201
}
else
{
    alert("enter year again");2015
}

// conditional statements

// let result2=condition ? value: value2;

// let accessAllowed=(age>18)?true:false;201

// // logical operators=a||b;
// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

// while loops
let year3=prompt("How old are you");
while(year3>19)
{
    alert("koi kaam dhanda dhoondo");
}

let i=3;
while(i<3)
{
    alert(i);
    i++
}

for(let i=0;i<3;i++)
{
    alert(i);
}


// functions


function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }

// arrow functions
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

// OBJECTS

let user={
  name: "john",
  age:30,
  "likes birds":true

};

alert(user.name);
alert(user.age);

user.isAdmin=true;

delete user.age;


// getter/setters

let user2={};
// get
user["likes birds"]=true;
// set
alert(user["likes birds"]);

// delete
delete user["likes birds"];

// Property value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name);
alert(user.age);

let user={name:"john",age:30};

alert("age"in user );
alert("blabaha"in user);

let user={
  name:john,
  age:30,
  isAdmin:true,
}

for(let key in user)
{
  alert(key); //alerts all properties in object user

  alert(user[key]);
}


// ordering in objects

let codes={
  "49":"germany",
  "48":"pakistan",
  "32":"india",

  "1":"nigeria",
}
for(let cdoes in codes)
{
  alert(code);
}

let user={
  name:"john",
  surname:"smith",

}

alert(user.name);
alert(user.surname);

user.name=user.surname;

alert(user.surname);

delete[user.name];






let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(menu){
  for (let key in menu) 
    if(typeof obj[key]=='number')
      obj[key]*=2;
}
rock paper scissor

alert("lets play rock paper scissor")
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let choice=prompt("press 0 for rock,1 for paper,2 for scissor");


alert(getRandomInt(3));

if(getRandomInt==2 && choice===2)
{
   alert("tie");
}
else if(getRandomInt==2&& choice==1)
{
  alert("scissor beats paper, you lose");
}
else if(getRandomInt==2&& choice==0)
{
  alert("rock beats scissor, you win");
}else if(getRandomInt==1&& choice==2)
{
  alert("scissor cuts paper, you win");
}
else if(getRandomInt==1&& choice==1)
{
  alert("tie");
}
else if(getRandomInt==1&& choice==0)
{
  alert("paper beats rock, you lose");
}
else if(getRandomInt==0&& choice==2)
{
  alert("rock beats scissor,you lose");
}
else if(getRandomInt==0&& choice==1)
{
  alert("paper beats rock,you win");
}
elseif(getRandomInt==0&& choice==0)
{
  alert("tie");
}




// object Referencing and copying

// single object cloning
let user={
  name:"john",
  age:30,

}

let clone=Object.assign({},user);

alert(clone.name);
alert(clone.age);

// nested cloning
let user2={
  name:"john",
  age:30,
  sizes:{
    height:180,
    width:20,
  }
}
let clone2=Object.assign({},user);

alert(user.sizes==clone.sizes);

user.sizes.width=60;

alert(clone.sizes.width);

// structuredClone
let user3={
  name:"john",
  age:30,
  sizes:{
    height:180,
    width:20,
  }
}
let clone3=structuredClone(user);

alert(user.sizes==clone3.sizes);


// Object methods
let user4={
  name:"john",
  age:30,
  sizes:{
    height:180,
    width:20,
  }
}

function sayHi()
{
  alert("hello");
}

user.sayHi=sayHi;

user.sayHi();

// method shorthanding

user = {
  sayHi: function() {
    alert("Hello");
  }
};

user={
  sayHi(){
    alert("Hello");
  }
};


// this in methods
let user={
  name:"john",
  age:30,

}

function sayHi()
{
   alert(this.name);
}

user.sayHi();




// constructors,operators

function User (name)
{
  this.name=name;
  this.isAdmin=false;
  
}
let user=new user("jack");

alert(user.name);
alert(user.isAdmin);


let user=new("emily");

// return from constructors
function Biguser()
{
  this.name="john";

  return {name:"godzilla"};
}

alert( new Biguser().name);


function Biguser()
{
  this.name="emily";
  return;
}

alert(Biguser().name);


// methods in constructors
function User(name)
{
  this.name=name;
  this.sayHi=function()
  {
    alert("my name is: ",+this.name);
  };
}

let john=new User("john");

john.sayHi;



// optional chaining
let user={};

alert(user.address ? user.address.street :undefined);


// Symbol type

// let id=Symbol;

let id=Symbol("Id");
// 
// symbols allow us to create hidden properties of an object
let user={
  name:"John",

};

let id2=Symbol("id");

user[id2];

alert(user[id]);

// object to primitive conversion
// explicit convsersion
let num=Number(obj);

let n=+obj;
let delta=date1-date2;


// methods of primitives

let str="hello";

alert(str.toUpperCase());

let n2=1.23467;
alert(n.toFixed(2)); //fixed prescision


// Numbers in javascript


let billion=1000000000;
let billion2=1_000_000_000;

let billion3=1e9;
alert(73e9);

let mcs=0.000001;
let mcs2=1e-5;

// Hex,binary and octal numbers
let a=0b11111;
let b=0o377;

alert(a==b);


// toString(base)
let num6=255;

alert(num.toString(16)); 


// Random function

alert(Math.random());
alert(Math.max(3,5,6,2,1));
alert(Math.min(2,1));

alert(Math.pow(2,10)); //2 to the power of 10

// Strings

let single='single quoted';
let double="double quoted";

let backticks=`backticks`;

function sum()
{
  return a+b;
}
alert(`a+b=${sum(1,2)}.`);

let GuestList=`Guests:
*john
*mary
*peter`;
alert(GuestList);

// special characters
let GuestList2="Guests:\n*john\n*Pete\n*Mary\n";
alert(GuestList);


let str1="Hello \nWorld";

alert(`I\`m the walrus!`);


// Accessing String

let str3=`hello`;

alert(str[0]);
alert(str.at(0));

alert(str[str.length-1]);
alert(str/at(-1));


// Strings are immutable

let str4="hi";

str[0]=`h`;

alert(str[0]);//doesnt work

let str5=`Hi`;

str='h'+str5[1];

alert(str5);


// Changing the case

alert(`Interface`.toUpperCase());
alert(`Interface`.toLowerCase());

alert(`Interface[0]`.toLowerCase());

// Looking for a Substring
let str="widget with id";

alert(str.indexOf("widget"));
alert(str.indexOf("Widget"));


// Looping to look for substring

let str="As sly as a fox,as strong as an ox";

let target='as';

let pos=0;

while(true)
{
  let foundPos=str.indexOf(target,pos);
  if(foundPos==-1)
    break;

  alert(`Found at ${foundPos}`);
  pos=foundPos+1;
}


alert("widget".includes("id"));

alert("widget".startsWith("wid"));
alert("widget".endsWith("get"));


// Getting a Substring

let str="stringify";
alert(str.slice(0,5)); //slices string from 0 to 5 but no including 5
alert(str.slice[0,1]);


// Comparing Strings
alert('z'>'y')//false

// Arrays
let arr=[1,2,3];

let arr2=new Array();
let arr3=[];

let fruits=["apples","oranges","Plum"];
alert(fruits.length);

let arr4=["Apples", {name:"jonh"},true,function(){alert(`Hello`)}];

alert(arr[1].name);


let fruits2=["apples","oranges","pears"];
alert(fruits.at(-1));

// Methods pop/push ,Shift,

let fruits3=["apples","pears","oranges"];

alert(fruits3.pop());
fruits.push("limes");
alert(fruits);

// Internals

let fruits4=["banana"];
let arr5=fruits4;


// Loops

for(let i=0;i<fruits[3];i++);{
alert(arr[i]);
}

// Multi-dimesional arrays
let matrix=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

alert(matrix[0,1]);


// Array Methods

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

alert(users.findIndex(user=>user.name=='john')); //0


// Map

let result=arr.map(item,index,array){
  //returns the new value instead of the old value
}


// Array sorting

let arra=[1,2,3,6,4];

arr.sort;

alert(arra);


// Split and join

let names='bilbo,gandalf,Nazgul';
let arr6 =names.split('.');

for (let name of arr6)
{
  alert(`A message to ${name}`);
}



// ITerables
// Strings as interables

for (let char of "test")
{
  alert(char);
} 

// Maps and sets
let map=new map();
map.set('1','str1');
map.set(2,'num1');// (key,value)


alert(map.get(1)) //num1

alert(map.get(2));

alert(map.size);

//Maps ccan also use objects as keys

let johnm={name8:john};

let visitscountmap=new Map();
visitscountmap.set(johnm,123);


// Iteration over maps
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap)  // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)

// Sets
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

// for (let user of set) {
//   alert(user.name); // John (then Pete and Mary)
// }

// destructuring assignment

let arr=["john","smith"]
//destructuring argument

let[firstname,surname]=arr;

alert(firstname);
alert(surname);


//destructuring with split

let[firstname2,surname2]="john smith".split('');
alert(firstname);
alert(surname);



let[name1,name2,...rest]=["julius","caesar","consul","of the roman empire"];

alert(rest[0]); //consul


// object destructuring
let options={
  title:"Menu",
  width:100,
  height:200,
};

let {title,width,height}=options;

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);   //200

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// only extract title as a variable
let { title } = options;

alert(title);


// Nested destructing
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2], // assign items here
  title = "Menu" // not present in the object (default value is used)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut

// smart function parameters
let options={
  title: "Menu",
  items:["item1","item2"],
};

function showmenu({
  title="untitled";
  width:w=100,
  height:h=200,
  items:[item1,item2]
})
{
  alert(`${title} ${w} ${h}`); //Menu 100 200
  alert(item1);
  alert(item2);

}
showmenu(options);



// Date and time
let now=new Date;
alert(now);

// with arguments
let jan01_1952=new Date(0);
alert(jan01_1952);

//now add 24 hours, get 02.01.1970 UTC+0
let jan02_1952=new Date(24*3600*1000);
alert(jan02_1952);

//31 dec 1969
let Dec31_1969=new Date(-24*3600*1000);
alert(Dec31_1969);


new date=new Date(2011, 0 ,1 ,2 ,3 ,4 , 567);
alert(date);

// Accessing date components
getFullYear()
getmonth()
getDate()
getHours()
getMinutes()
getDay()

let date=new Date();

alert(date.getUTCHours);

getTime()

setFullyear(year,[month],[date])

let today=new Date();
today.setHours(0);
alert(today);
today.setHours(0 , 0 , 0 , 0);
alert(today);

// Autocorrection
let date=new Date(2013, 0 ,32)
alert(date); // 1.02.2013

let date=new Date(2016,1,28);
date.setDate(date.getDate()+2);
alert(date);

let date=new Date=(2016, 1 , 28);
date.setDate(date.getDate()+2);

alert(date);


// Date to number,date diff
let start=new Date();
// do the job
for let(i=0; i< 100000 , i++)
{
  let doSomething=i*i*i;

}
let end=new Date();
alert(`the loop took ${end-start}ms`);

let start=new Date();
// do the job
for let(i=0; i< 100000 , i++)
{
  let doSomething=i*i*i;

}
let end=Date.now();
alert(`the loop took ${end-start}ms`);

// benchmarking

function diffsubtract(date1,date2){
return date2-date1;
}

//or

function diffGettime(date1,date2)
{
  return date2.getTime()-date2.getTime();
}


// JSON methods, toJSON
let user={
  name:"john",
  age:30,

  toString()
  {
    return`{name:"${this.name}}",age:${this.age}}`;
  }
};
alert(user);

// JSON.java script Object Notation
let user={
  name:john,
  age:30,

  toString()
  {
    return`{name:"${this.name}}",age:${this.age}}`;
  }
};

alert(user);


// JSON.stringify to convert objects into JSON


let student={
  name:john,
  age:30,
  isAdmin:false,
  coures:['html','cs','js'],
  spouse:null,
};

let json=JSON.stringify(student);

alert(typeof json);

alert(json);

let user={
  sayHi()
  {
    alert("hello");
  },
  [Symbol("id")]:123,
  something:undefined
};

alert(JSON.stringify(user));


//Rest parameters and srpead syntax
// rest parameters

function sum(a,b)
{
  return a+b;
}
alert(sum(1,2,3,4,5));

function sumAll(....args)

{
  let sum=0;

  for(let arg of args) sum+= arg;

  return sum;
}
alert (sumAll(1));
alert (sumAll(1,2));
alert(sumAll(1,2,3));


function showName(firstname,lastname,....titles)

{
  alert(firstname+' '+lastname);

  alert(titles[0]);

}

function showName()
{
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);
}

// spread syntax

alert(Math.max(3,5,1));

let arr=[3,5,1];
alert(Math.max(..arr));


let arr1=[1,-2,3,4];
let arr2=[8,3,-5,1];

alert(Math.max(...arr1,...arr2));


let merged=[0,...arr1,...arr2];
alert(merged);

// copy and array/object
let arr=[1,2,3];
let arrCopy=[...arr];

alert(JSON.stringify(arr)==JSON.stringify(arrCopy))//true
alert(arr=arrCopy);//false

arr.push(4)


//custom properties
function sayHi()
{
  alert("hi");
  sayHi.counter++;
}
sayHi.counter=0;//intial value

sayHi();
sayHi();

alert(`Called ${sayHi.counter} times`);

// Named function expression
let sayHi=function func(who)
{
  alert(`Hello`,${who});

};
sayHi("john");

//Scheduling: setTimeout and setInterval

let timerId=setTimeout(func|code,[delay],[arg1],[arg2],...)

//example
function sayHi(phrase,who)
{
  alert(phrase+`,`+who);
}
setTimeout(sayHi,1000,"hello","john");

setTimeout(()=>alert('hello'),1000);


let timerId=setTimeout(...);
clearTimeout(timerId);

let timerId=setTimeout(()=>alert("never happens"),1000);
alert(timerId);

clearTimeout(timerId);
alert(timerId);


let timerId=setInterval(()=>alert("never happens"),1000);

setTimeout(()=>{clearInterval(timerId);alert('stop');},5000);

//Nested Timeout

let timeId=setTimeout(function tick() 
{
  alert('tick');
  timeId=setTimeout(tick,2000);
},2000);


// Decorators and forwarding , call/apply 

function slow(x)
{
  alert('called with ${x}');
  return x;
}

function cachingDecorator(x)
{
  let cache = new Map();

  return function(x)
  {
    if(cache.has(x))
    {
      return cache.get(x);
    }
  }
  let result = func (x);
  cache.set(x,result);
  return result;
}
slow =cachingDecorator(slow);

// function binding
let user={
  firstName:"john",
  sayHi()
  {
    alert(`Hello,${this.firstName}!`);
  }
};
setTimeout(user.sayHi,1000);
//this gives an error
let f=user.sayHi;
setTimeout(f,1000);//lost user context


let user={
  firstName:"john",
  sayHi()
  {
    alert(`Hello,${this.firstnName}!`);
  }
};
setTimeout(function()
{
   user.sayHi();
},1000);


//The same but shorter
setTimeout(()=>user.sayHi(),1000);


let user={
  firstName:"john",
  sayHi()
  {
    alert(`Hello,${this.firstnName}!`);
  }
};
setTimeout(()=>user.sayHi(),1000);

user={
  sayHi()
  {
    alert("Another user in setTimeout");
  }
};

// SOlution 2 bind
let boundFunc=func.bind(context);


let user = {
  firstName: "John"
};

function func()
{
  alert(this.firstName);
}
let funcUser=func.bind(user);
funcUser();


// trying with object method

let user={
  firstName:"john",
  sayHi()
  {
    alert(`Hello,${this.firstnName}!`);
  }
};

let sayHi=user.sayHi.bind(user);
sayHi();

setTimeout(sayHi,1000);

user={
  sayHi(){alert("Another User in setTimeout");}

};

let user={
  firstname:"jonh";
  sayHi(phrase)
  {
    alert(`${phrase}, ${this.firstname}`);
  }
};
let say=user.say.bind(user);

say("hello");
say("bye");


//if An object has many methods we can bind them all in a loop
for(let key in user)
{
  if (typeof user[key] === 'function') {
    user[key]=user[key].bind(user);
}
}
//javascript also has a function to bind all
_bindAll(object,MethodNames);


//Partial binding
let bound=func.bind(context,[arg1],[arg2]);
//partial binding is used to bind some arguments to a function and return a new function with the arguments


function mul(a, b)
{
  return a*b;
}
let double=mul.bind(null,2);
//double is a function that takes one argument and returns twice that argument

alert(double(3));
alert(double(4));
alert(double(5));

function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

alert( triple(3) ); // = mul(3, 3) = 9
alert( triple(4) ); // = mul(3, 4) = 12
alert( triple(5) ); // = mul(3, 5) = 15


//Going partial without context
function partial(func,...argBound)
{
  return function(...args)
  {
    return func.call(this,...argsBound,...args);
  }
}

//usage
let user={
  firstName:"john",
  say(time,phrase)
  {
    alert(`[${time}]${this.firstName}:${phrase}!`);
  }
};
user.sayNow=partial(user.say,new Date().getHours()+':'+new Date().getMinutes());

user.sayNow("hello");

// Arrow functions revisited
let group={
  title:"our group",
  students:["john","Pete","Alice"],

showList()
{
  this.students.forEach(
    student=>alert(this.title+":"+student)
  );
}
};
group.showList();

//A regular function would give an error here
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ': ' + student);
    });
  }
};

group.showList();

//Arrows have no arguments
function defer(f,ms)
{
  return function()
  {
    setTimeout(()=>f.apply(this.arguments),ms);
  };
}
function sayHi(who)
{
  alert('Hello,'+who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds


//property flags and descriptors
// writable if true,the value can be changed 
// enumerable if true, the property will be listed in for...in loop
// configurable if true, the property can be deleted or renamed
let de
scriptors=Object.getOwnPropertyDescriptor(obj,propertyName);

let user={
  name:"John",
};
let descriptor=Object.getOwnPropertyDescriptor(user,'name');


alert(JSON.stringify(descriptor,null,2));


//to change the flags
Object.defineProperty(user,'name',{writable:false});

let user={};

Object.descriptor(user,'name',
{
  value:"john",
  enumerable:true,
  configurable:true,
});
alert(user,name);
user.name="pete";

// Non enumerable
let user={
  name:"jonh",
  toString()
  {
    return this.name;
  }
};

for(let ket in user)alert(key);


//A non-configurable property cant be deleted and its properties cannot be modified


// Object.defineProperties
object.defineProperties(obj,{
  prop1:descriptor1,
  prop2:descriptor2
});

Object.defineProperties(user,{
  name:{value:"john",writable:false},
  surname:{value:"smith",writable:false},
});


// Object.getOwnPropertyDescriptor

let clone=Object.defineProperties({},Object.getOwnPropertyDescriptors(obj));

for(let key in user)
{
  clone[key]=user[key];
}

// Sealing an object globally
Object.seal(obj);
Object.preventExtensions(obj);


// property Getter and setters
let obj={
  get propName()
  {
    //getter,the code executed on getting obj.propname
  },
  set propName(value)
  {
    //
  },
}

let user={
  name:'jonh',
  surname:"smitj",

  get fullName()
  {
    return `${this.name}${this.surname}`;
  }
};

alert(user.fullName);


let user={
  get fullName()
  {
    return"..";
  }
};

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper


// smarter getters and setters
let user={
  get name()
  {
    return this._name;
  },

set name(value)
{
  if(value.length<4)
  {
   alert("name is too Short,need at least 4 characters");
   return;
  }
  
  this._name=value;
}
};
user.name="peter";
alert(user.name);
user.name="..";



//prototypal inheritance
let animal={
  eats:true
}
let rabbit={
  jumps:true
}
rabbit._proto_=animal; //sets rabbit.[[prototype]]=animal


alert(rabbit.eats);
alert(rabbit.jumps);



let animal={
  eats:true
  walks()
  {
    alert("animal walks");
  }
}

let rabbit={
  jumps:true,
  _proto_:animal;
};

rabbit.walk();

//the protoype chain can be longer
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)


//writing doesnt use prototype
let animal={
 eats:true,
 walk()
 {}
}

let rabbit={
  _proto_=animal;
};
rabbit.walk=function()
{
  alert("rabbit bounce");
};
rabbit.walk();


// The value of 'this'
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

//Prototyping new method
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj,_proto_)

//example
let animal={
  eats:true
};
let rabbit=Object.create(animal);//same as {_proto_:animal}

alert(rabbit.eats);

alert(Objec.getPrototypeOf(rabbitt)==animal);//true

Object.setPrototypeOf(rabbit,{})

let animal={
  eats:true
}
let rabbit=Object.create(animal,{
  jumps:{
    value:true
  }
});
alert(rabbit.jumps);


//Classes
class Myclasss{
  constructor()
  {...}
  method(){}
  method2(){}
}


class user{
  constructor(name)
  {
    this.name=name;
    }
    sayHi()
    {
      alert(this.name);
    }
}
let user=new User("john");
user.sayHi();


class user{
  constructor(name){
    this.name=name;
  }
}
alert(typeof User);

// class Fields
class User{
  name:john;

  sayHi()
  {
    alert(`Hello,${this.name}`);
    }
}
new User().sayHi(); //Hello,john


class User{
  name:"john";
}
let user=new User();
alert(user.name);
alert(User.prototype);//undefined

//Making bound methods wtih class fields

class Button{
  constructor(value){
  this.value=value;
  }
}
click()
{
  alert(this.value);
}
let button=new Button("hello");
setTimeout(button.click,1000);
    
Static properties and MethodNames

class User{
  static staticMethod()
  {
    alert(this==user);
  }
}
User.staticMethod();//true

class User{}

User.staticMethod=function()
{
  alert(this== User);
};

User.staticMethod;//true

class Article{
  constructor(title,date) {
    this.title = title;
    this.date=date;
    
  }
  static compare(ArticleA.articleB)
  {
    return ArticleA.date- ArticleB.date;
  }
}
//usage
let articles={
  new Article("HTML",new Date(2019,1,1)),
  new Article("CSS",new Date(2019, 0 ,1)),
  new Article("Javascript",new Date(2019,11,1))
};
articles.sort(Article.compare);

alert(articles[0].title); //CSS


class Article{
  constructor(title,date)
  {
    this.date=date;
    this.title=title;
  }
  static createTodays()
  {
    return new this("Todays digest",new Date());
  }
}
let artile=Article.createTodays();

alert(article.title);


// Static properties
class Article{
  static publisher="Ilya kantor";
}
alert(Article.publisher);

//same as 
Article.publisher="ilya Kantor";


class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth


// private and protected properties and methods

//extending built in classes

//class checking "instanceOf"
obj instanceof Class

class Rabbit{}
let rabbit =new rabbit();
alert(rabbit instanceof Rabbit); //true

function Rabbit{}
alert(new rabbit()instanceof Rabbit);

let arr=[1, 2, 3]
alert(arr instanceof Array);//true
alert(arr instanceof object);//true



obj.__proto__==class.prototype?
obj._proto_._proto_==class.prototype?
obj._proto_._proto_.__proto__==class.prototype?

class Animal{}
clas Rabbit extends Animal{}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal);


function Rabbit(){
  let rabbit = new Rabbit();

  Rabbit.prototype={};

  alert( rabbit instanceof Rabbit);
}
//object.prototype.to string for the type

let obj ={};
alert(obj);
alert(obj.toString());


let objectTostring=object.prototype.toString;

let arr=[];

alert(objectTostring.call(arr));// [object array]


// Mixins
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!