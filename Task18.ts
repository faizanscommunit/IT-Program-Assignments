// #18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
console.log(" Store the locations in a array. Make sure the array is not in alphabetical order.")
let favourite_places = ["KSA", "Turkey", "Japan", "India", "Palestine"]
// • Print your array in its original order.
console.log("Print your array in its original order.")
console.log(favourite_places)
// • Print your array in alphabetical order without modifying the actual list.
console.log("Print your array in alphabetical order without modifying the actual list.")
console.log([...favourite_places].sort());
// • Show that your array is still in its original order by printing it.
console.log("Show that your array is still in its original order by printing it.")
console.log(favourite_places)
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Print your array in reverse alphabetical order without changing the order of the original list.")
console.log([...favourite_places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Show that your array is still in its original order by printing it again.")
console.log(favourite_places)
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order of your list. Print the array to show that its order has changed.")
console.log(favourite_places.reverse())

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Reverse the order of your list again. Print the list to show it’s back to its original order.")
console.log(favourite_places.reverse())

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.")
console.log(favourite_places.sort())
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.")
console.log(favourite_places.reverse())
