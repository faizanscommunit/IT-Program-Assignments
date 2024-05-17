// #24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
console.log('• Tests for equality and inequality with strings')
console.log('mango' == 'mango'); // true
console.log('mango' == 'Mango'); // false

// • Tests using the lower case function
console.log('• Tests using the lower case function');
console.log('corolla'.toUpperCase() == 'COROLLA'); // true

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to');
console.log(0 == 0); // true
console.log(5 > 1);  // true
console.log(5 >= 5); // true
console.log(5 <= 1); // false

// • Tests using "and" and "or" operators
console.log('• Tests using "and" and "or" operators');
console.log(5 >= 5 && 0 == 0); // true
console.log(5 >= 9 || 1 == 1); // true

// • Test whether an item is in a array
console.log('• Test whether an item is in a array');
let alphabets:string[] = ['a','b','d']
console.log(alphabets.includes('a')); // true

// • Test whether an item is not in a array
console.log('• Test whether an item is not in a array');
console.log(!alphabets.includes('c'));
