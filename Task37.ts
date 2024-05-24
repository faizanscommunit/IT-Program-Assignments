// # 37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:string = 'large', msg:string = "I love TypeScript"){
    console.log(`I have a ${size} size shirt with "${msg}" printed on it.`);
}

make_shirt();
make_shirt('medium', 'Faizanscommunit');
make_shirt('small', 'Hello World');
