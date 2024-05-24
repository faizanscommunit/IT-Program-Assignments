
// # 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians:string[] = ['Jhon', 'Doe', 'Alexander']

function show_magicians(names: string[] = []){
    names.forEach(name => {
        console.log(name);
    })
};

let great_magicians:string[] = []
function make_great(magicianList:string[]){
    magicianList.forEach(magician => {
        great_magicians.push(`Great ${magician}`)
    });   
};
make_great(magicians)
show_magicians(magicians) // Original Array
show_magicians(great_magicians) // Changed Array
