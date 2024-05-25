// #15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

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
    console.log('Hi, '+name+" You are invited to today's Dinner at my Home!")
}
