// # 25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// Version 01 --> Passes the test
let alien_color: 'red'|'yellow'|'green' = "green"
if (alien_color === 'green'){
    console.log('You just earned 5 Points');
}

// Version 02 --> Fails the test
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

alien_color = "green"
if (alien_color === 'red'){
    console.log('You just earned 5 Points');
    // This IF statement will not run and there will be no output
}
