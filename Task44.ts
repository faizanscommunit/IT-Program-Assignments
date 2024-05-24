
// # 44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Sandwiches(...items: string[]){
    console.log(`Summary of Items: ${items.join(', ')}.`);

}

Sandwiches('bread', 'ketchup', 'tomato', 'mayonise')
Sandwiches('cheese', 'chocolate', 'tomato', 'mayonise')
Sandwiches('bread', 'ketchup', 'chilli', 'breadcrums')
