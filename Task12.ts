// #12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let msg_for_friends = 'Please meet me at 7:00'
// 01 -- > Loop Method 
for (let name of friends) {
    console.log(name+', '+msg_for_friends)
}
// 02 -- > Manual Print Method
console.log(friends[0]+', '+msg_for_friends)
console.log(friends[1]+', '+msg_for_friends)
console.log(friends[2]+', '+msg_for_friends)
console.log(friends[3]+', '+msg_for_friends)
