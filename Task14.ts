// #14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let relatives = [
    'Hassan',
    'Shees',
    'Fatima',
]

console.log('Method 01');
for (let relative of relatives){
    console.log(`Hi ${relative},  You are invited to today's Dinner at my Home!`)
}
console.log('Method 02');
for (let relative=0; relative<relatives.length; relative++){
    console.log('Hi ', relatives[relative], ", You are invited to today's Dinner at my Home!")
}

