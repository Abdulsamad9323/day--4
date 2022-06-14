// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// code goes here :

// number 1
// let age = prompt('How old are you')

// if (age >= 18){
//         console.log('youre old enough to drive')
//     } else if (age < 18) {
//         console.log(`you are left with ${18-age} year(s) to drive`)
//     } else {
//         console.log('you can never drive')
//     }

// Number 2
// let yourAge = prompt('Enter your age')
// let myAge = 21

// if (yourAge == myAge){
//     console.log('we\'re age mate')
// } else if (yourAge > myAge) {
//     console.log('youre older than me')
// } else {
//     console.log('im older than you')
// }

// Number 3
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else


// let a = 4
// let b = 7

// using if else method
// if (a > b) {
//     console.log('a is greater that b')
// } else {
//     console.log('b is greater than a')
// }

// using ternary operator.
// a > b ? console.log('yes a is greater than b') : console.log('no b is greater than a');

// Number 4
// let number = prompt('Enter a number')

// if (number % 2 == 0) {
//     console.log(`${number} is an even number`)
// } else {
//     console.log(`${number} is an odd number`)
// }

// Exercises: Level 2

// Number 1

// let a = prompt('Enter your score')
// if (a >= 80) {
//     console.log('A')
// } else if (a >= 70) {
//     console.log('B')
// } else if (a >= 60) {
//     console.log('C')
// } else if (a >= 50){
//     console.log('D')
// } else {
//     console.log('F')
// }

// Number 2
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt('Enter the month')
// switch (month) {
//     case 'September':
//         console.log('the season is Autumn')
//         break
//     case 'October':
//         console.log('the season is Autumn')
//         break
//     case 'November':
//         console.log('the season is Autumn')
//         break
//     case 'December':
//         console.log('the season is Winter')
//         break
//     case 'January':
//         console.log('the season is Winter')
//         break
//     case 'February':
//         console.log('the season is Winter')
//         break
//     case 'March':
//         console.log('the season is Spring')
//         break
//     case 'April':
//         console.log('the season is Spring')
//         break
//     case 'May':
//         console.log('the season is Spring')
//         break
//     case 'June':
//         console.log('the season is Summer')
//         break
//     case 'July':
//         console.log('the season is Summer')
//         break
//     case 'August':
//         console.log('the season is Summer')
//         break
//         default: 
//         console.log('this is not a month')
// }

// Number 3
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

// let day = prompt('Please enter the day')

// if (day == 'Saturday' | day == 'Sunday'){
//     console.log(`${day} is a weekend`)
// } else if (day == 'Monday' | day == 'Tuesday' | day == 'Wednesday' | day == 'Thursday' | day == 'Friday') {
//     console.log(`${day} is a working day`)
// } else {
//     console.log( `${day} is not a day or it is not written well`)
// }

// Number 4
// months with 28 days => feb
// months with 30 days => apr,jun,sep,nov
// months with 31 days => jan,march,may,jul,aug,oct,dec

// const twentyEightDaysMonth = ['february']
// const thirtyDaysMonths = ['april','june', 'september', 'november']
// const thirtyOneDaysMonths = ['january', 'march', 'may', 'july', 'august', 'october', 'december']

// let inputMonth = prompt('Enter month')

// if (twentyEightDaysMonth.includes(inputMonth)){
//     console.log('this month has 28days')
// } else if (thirtyDaysMonths.includes(inputMonth)){
//     console.log('this month has 30days')
// } else if (thirtyOneDaysMonths.includes(inputMonth)){
//     console.log('this month has 31days')
// } else {
//     console.log('this is not a month')
// }

