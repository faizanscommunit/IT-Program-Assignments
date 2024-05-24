// # 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:string[] = ['Jhon', 'Doe', 'Alexander']

function show_magicians(names: string[] = []){
    names.forEach(name => {
        console.log(name);
    })
};

show_magicians(magicians)

function make_great(magicianList:string[]){
    for (let i=0; i< magicianList.length; i++){
        magicianList[i] = 'Great '+ magicianList[i]
    }    
}
make_great(magicians)
show_magicians(magicians)

