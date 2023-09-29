/*
const var1 = 2;
const var2 = "Hello";
const var3 = true;
const var4 = null;
const var5 = null;
const pi = 3.14;
var2 = 3;
*/


function isIt2022(year)
{
    if (year == 2022)
    {
        let text = "Yes"
        // Use var if you want the variable to be outside the scope and use let to keep the scope to within the brackets
        console.log(text + " Yes!")
        console.log("Yes!")
    }
    else
    {
        var text = "No"
    }
    console.log(text + " Yes!")
}

isIt2022(2022)

const obj = {name: "Jayanth", age: 18, major: "ECE", student: true};
console.log(obj.name)
obj.name = "JJ"

const arr = [1, 2, 3, 4, 5]
const ar2 = [1, "2", true, 4, 5]
ar2[2] = 2 // this throws no error. you can change anything

console.log(arr[0])

const ar3 = [1, 2, 3, 4, 5]
console.log(ar3.slice(1, 3))

const var1 = 4;
const var2 = "4"
console.log(var1 == var2) // true
console.log(var1 === var2) // false. always compare with === because sometimes the the type might change

const func = (a, b) => {
    console.log(a + b)
    a += b;
    console.log(a + b)
}

const func2 = (a, b) => console.log(b*5)

func(1, 2)
func2(5,6)

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);

const ages = [32, 33, 16, 40];

ages.filter(checkAdult)
// takes every index in ages and checks it across checkAdult and only returns the values for which its true
function checkAdult(age) {
  return age >= 18;
}

// for each only returns the specific values of the arrays but map modifies the orignal array
const array5 = ['a', 'b', 'c'];

array1.forEach(el => console.log(el)); 

const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne'
  };
  const { name, realName } = hero;
  console.log(name);
  console.log(realName); 

  
  let array7 = [3, 4, 5]
  let array = [0, 1]
  let array2 = [...array, ...array7]
  console.log(array2)   // prints [0, 1, 3,4,5]
  let obj1 = { foo: 'bar', x: 42 };
  let obj2 = { foo: 'baz', y: 13 };
  console.log({ ...obj1, ...obj2 }) 
  //prints { foo: "baz", x: 42, y: 13 }
  
return value === true ? "i am true" : "i am false" // Ternary operators are shorthand for if statements

online && getData() // Short circuiting allows you to write more concise JavaScript code by forgoing the use of if statements and ternary operators

