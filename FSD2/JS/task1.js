// const a= {

//     	"Datastructures":

//  	   [

//         	{

//              	"Name": "tree",

//                 "course":"Intro",

//                 "content":["1","B","C"]

//         	},

//         	{

//             	"Name": "tree1",

//                 "course":"Intro1",

//                 "content":["1","B","C","d"]

//         	}

//     	],

//     	"xyz":

//     	{

//             "Name":"Graphics",

//             "Topic":["BFS","CDF","Sorting"],

//     	}

//   	}
//     console.log(a.Datastructures[1].Name)
//      console.log(a.Datastructures[0].Name)
//      console.log(a.xyz.Name)
//      console.log(a.xyz.Topic)
//      console.log(a.xyz.Topic[0])
//     //  console.log(`{ Name: ${a.Datastructures[1].Name} course :${a.Datastructures[1].course} content:${a.Datastructures[1].content} }`)
//     console.log(a.Datastructures[1])



//Task 2

// myObj= {"name" : "John",

//            	"age" : 30,

//            	"cars" : [

//                        	{ "name" : "Ford",  "models":[ "Fiesta", "Focus", "Mustang" ] },

//                        	{ "name" : "BMW", "models" : [ "320", "X3", "X5" ] },

//                        	{ "name" : "Fiat", "models" : [ "500", "Panda" ] }

//          	] }

// console.log(`${myObj.name} has ${myObj.cars[1].name} ${myObj.cars[1].models[1]} at the age of ${myObj.age}`)    
// console.log(myObj.name)


// TASK 5

// Example input:
// [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

// Function's return value (output):
// {
// make : 'Ford'
// model : 'Mustang',
// year : 1964
// }

// Do not change the input string. Assume that all elements in the array will be of type 'string'.

// Note that the input may have a different number of elements than the given sample.
// For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

// Starter Code:
// function fromListToObject(array) {

// function fromListToObject(array) {
//     var obj={}
//     for(let i=0;i<array.length;i++){
//         obj[array[i][0]]=array[i][1]
//     }
//     return obj
// }
// console.log(fromListToObject( [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]))


// task 6
// function transformFirstAndLast(array){
//     var obj={}
//     obj[array[0]]=array[array.length-1]
//     return obj

// }
// console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']))
// Task 7
// const person =

// [

// {

// name: "PQR", age: 38

// },

// {

// name: "ABC", age: 35

// },

// {

// name: "XYZ", age: 47

// }

// ]
// person.sort((a,b)=>b.age-a.age)
// console.log(`${person[0].name} age is ${person[0].age}`)


//Task 8


var test = { "division1": {

"name":["Z","B","H"]

},

"division2": {

"name" :["Y","A","G"]

}

}
test.division1.name.sort()
test.division2.name.sort()
console.log(test)










