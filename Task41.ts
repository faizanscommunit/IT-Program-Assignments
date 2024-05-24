// # 41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians:string[] = ['Jhon', 'Doe', 'Alexander']

function show_magicians(names: string[] = []){
    names.forEach(name => {
        console.log(name);
    })
};

show_magicians(magicians)
