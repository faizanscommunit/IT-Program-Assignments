// # 28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let persons_age = 17
// • If the person is less than 2 years old, print a message that the person is a baby.
if (persons_age < 2){
    console.log('You are a baby!');
}else if(persons_age >= 2 && persons_age < 4){
    // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    console.log('You are a toddler');
}else if(persons_age >= 4 && persons_age < 13){
    // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    console.log('You are a Kid!');
}else if(persons_age >= 13 && persons_age < 20){
    // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    console.log('You are a Teenager!');
}else if(persons_age >= 20 && persons_age < 65){
    // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    console.log('You are an Adult!');
}else{
    // • If the person is age 65 or older, print a message that the person is an elder.
    console.log('You are an Elder!');
}
