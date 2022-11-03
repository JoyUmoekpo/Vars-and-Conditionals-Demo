// 1.

let backpack = [];

//lets add sword, shield, food

backpack.push('sword', 'shield', 'food');
console.log(backpack);

console.log("------------------------");

// 2.

backpack.shift();

// returns an array
// let sword = backpack.splice(0,1);
// console.log(sword);

// returns a string
// let sword = backpack.shift();
// console.log(sword);

// backpack = backpack.slice(1)

console.log(backpack);

console.log("------------------------");

// 3.

let furCoat = 'fur Coat';
backpack.push(furCoat);
console.log(backpack);

console.log("------------------------");

// 4.

backpack.pop();
console.log(backpack);

console.log("------------------------");

// 5.

let itemCount = backpack.length;
console.log(`Backpack count: ${itemCount}`);
console.log(backpack);

console.log("------------------------");

// 6.

backpack.push('flint');
backpack.push('blanket');
backpack.push('knife');
backpack.push('toothbrush');

let backpack2 = backpack.splice(2, 4);

console.log(`Backpack: ${backpack}`);
console.log(`Backpack2: ${backpack2}`);

console.log("------------------------");

// 7. 

// Bracket notation
console.log(backpack2[0]);

// Spread operator
console.log(...backpack2);

for (let i = 1; i <= backpack.length; i++) {
    console.log(backpack[i]);
}

console.log("------------------------");

for (let i = 1; i <= backpack2.length; i++) {
    console.log(backpack2[i]);
}

console.log("------------------------");

// 8.
let guessMe = 54;

while (guessMe < 100) {
    console.log("------------------------");
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5.  Added 25.');
        guessMe += 25;
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.');
        guessMe -= 27;
    } else {
        console.log('Added 3.');
        guessMe += 3;
    }
    guessMe += 22;
    console.log(`guessMe is now ${guessMe}.`);
}
console.log(guessMe)