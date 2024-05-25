// #17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

let relatives = [
    'Hassan',
    'Shees',
    'Fatima',
]

for (let relative of relatives){
    console.log(`Hi, ${relative} You are invited to today's Dinner at my Home!`)
}
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let cantCome = 'Hassan';
console.log(`${cantCome}, can't come to dinner!`)
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest:string = 'Muhammad Rayyan'
relatives[relatives.indexOf(cantCome)] = newGuest;
// • Print a second set of invitation messages, one for each person who is still in your list.
for (let name of relatives){
    console.log(`Hi ${name}, You are invited to today's Dinner at my Home!`)
}
console.log(relatives);

console.log('I got a big table, so get ready for big dinner party!')
// • Add one new guest to the beginning of your array.
relatives.unshift('Amir Saleem') // Start
// • Add one new guest to the middle of your array. 
relatives.splice(relatives.length/2,0,'Saleem') // Middle
// • Use append() to add one new guest to the end of your list. 
relatives.push('Muhammad Nouman') // End
// • Print a new set of invitation messages, one for each person in your list.
for (let name of relatives){
    console.log(`Hi, ${name} You are invited to today's Dinner at my Home!`)
}
console.log('I can invite only two people for dinner now !')


// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (relatives.length > 2){
    let removed_guest = relatives.pop()
    if (removed_guest){
        console.log(removed_guest+", Sorry I can't invite you due to unavailabity of table!")
    }
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let name of relatives){
    console.log(name,"You are still invited!")
}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// ---> Method 01 (TO REMOVE REMAINING ELEMENTS)
relatives.splice(0, relatives.length) 
// ---> Method 02 (TO REMOVE REMAINING ELEMENTS)
// while (relatives.length = 0){
//     relatives.pop()
// }
console.log(relatives)
