// #16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

let relatives = [
    'Hassan',
    'Shees',
    'Fatima',
]
for (let relative of relatives){
    console.log(`Hi, ${relative} You are invited to today's Dinner at my Home!`)
}
console.log(`${relatives[2]}, can't come to dinner!`)
relatives[2] = 'Muhammad Rayyan'
for (let name of relatives){
    console.log('Hi, '+name+" You are invited to today's Dinner at my Home!")
}
console.log('I got a big table, so get ready for big dinner party!')


// • Add one new guest to the beginning of your array.
relatives.unshift('Amir Saleem') // Start
// • Add one new guest to the middle of your array. 
relatives.splice(2,0,'Saleem') // Middle
// • Use append() to add one new guest to the end of your list. 
relatives.push('Muhammad Nouman') // End
// • Print a new set of invitation messages, one for each person in your list.
for (let name of relatives){
    console.log(`Hi, ${name} You are invited to today's Dinner at my Home!`)
}

export{}
