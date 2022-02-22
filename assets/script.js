// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Natasha Riley" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total

// Total in table would be to add qty list by length??Google

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const orderSummary = document.querySelectorAll('#total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(){
   gb++
    const gbQuantity = document.querySelector('#qty-gb')
   gbQuantity.textContent = gb
})

// TODO: Hook up event listeners for the rest of the buttons

ccPlusBtn.addEventListener('click', function(){
    cc++
     const ccQuantity = document.querySelector('#qty-cc')
    ccQuantity.textContent = cc
 })

 sugarPlusBtn.addEventListener('click', function(){
    sugar++
     const sugarQuantity = document.querySelector('#qty-sugar')
    sugarQuantity.textContent = sugar
 })
 gbMinusBtn.addEventListener('click', function(){
    gb--
     const gbQuantity = document.querySelector('#qty-gb')
    gbQuantity.textContent = gb
 })
 
 // TODO: Hook up event listeners for the rest of the buttons
 
 ccMinusBtn.addEventListener('click', function(){
     cc--
      const ccQuantity = document.querySelector('#qty-cc')
     ccQuantity.textContent = cc
  })
 
  sugarMinusBtn.addEventListener('click', function(){
     sugar--
      const sugarQuantity = document.querySelector('#qty-sugar')
     sugarQuantity.textContent = sugar
  })
