// console.log('Your PC is booting to life')
// console.log('Master')

//Variables

name = 'Moulesh Choudhury'
console.log(name)

goals = 'I want to become a Frontend Developer and Build Beautiful UIs'
console.log(goals)
console.log('  ')

//operators

//fruit = prompt('What is your fav fruit?')
// console.log(fruit)


// User Input
/*
food = Number(prompt('Enter bill amount'))
tipPercentage = Number(prompt('tip %?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount


console.log("Tip Amount:", tipAmount)
console.log('Total Amount: ' + total)
//alert('tip amount: ' + tipAmount)
*/


//Math Functions

// console.log(Math.floor(110.25))
// console.log(Math.ceil(110.25))
// console.log(Math.floor(Math.random() * 4))


// Baby weather app

/*let weather = prompt('How is the weather?')
if (weather == 'rainy') {
  console.log('Grab your umbrella')
} else {
  console.log('Wear your sunglasses')
}*/


//Functions

function sayMyName(name) {

  console.log(name)
}

//sayMyName('Mike')
//sayMyName('Oliver')

function greeting(name) {
  //console.log('Hi', name, ', nice to meet you')

  //greet = 'Hi ' + name + ', nice to meet you'
  //console.log(greet)

  // Template Literals
  greet = `Hi ${name}, nice to meet you!`
  //console.log(greet)
}

greeting('Mike');

function sum(a, b) {
  return a + b
}

//console.log(sum(40, 30))
result = sum(40, 40)
//console.log(result)


// Tip Calculator using function
function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  const total = sum(food, tipAmount)

  return total
}

console.log(calculateFoodTotal(100, 20))


//ES6
//Arrow Functions

// Arrow functions with explicit retun
const sumArrow = (a, b) => {
  return a + b
}

// OR

// Arrow functions with implicit return
// IMPORTANT: For implicit return, remove curly braces and 'return' keyword
const sumArrow2 = (a, b) => a + b

console.log(sumArrow2(5, 5))