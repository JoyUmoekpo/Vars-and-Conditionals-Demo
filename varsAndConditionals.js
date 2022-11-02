/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

// 1. 

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has a better attack than Jamie Lannister")
} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log("Jamie Lannister has a better attack than Jon Snow")
} else {
    console.log("It's a tie")
}

// 2. 
let jonSnowHealth = 100;
let jonSnowDefense = 0;

// Jon Snow gets attacked by Jamie
if (jonSnowHealth < jamieLannisterAttack) {
    console.log("Jon Snow has been slain!")
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`);
}

// 3.
let healthKit = 50;

// if (jonSnowHealth > healthKit) {
//     jonSnowHealth = 100;
// } else {
//     jonSnowHealth += healthKit;
// }

// OR

if ((jonSnowHealth + healthKit) > 100) {
    jonSnowHealth = 100;
} else {
    jonSnowHealth += healthKit
}

console.log(jonSnowHealth)

// 4. 

let coinLandsHeads = false;

// if (coinLandsHeads === true) {
//     console.log('They continue to fight and Jamie takes Jons head')
// } else {
//     console.log('Jon is allowed to run away')
// }

if (coinLandsHeads !== true) {
    console.log('Jon is allowed to run away')
} else {
    console.log('They continue to fight and Jamie takes Jons head')
}

// 5.

// // Shows negative value
// for (let i = 1; i <= 5; i++) {
//     jonSnowHealth -= jamieLannisterAttack;
//     console.log(`Jon Snow health is ${jonSnowHealth}`)

//     if (jonSnowHealth <= 0) {
//         console.log("Jon Snow has been slain")
//         break;
//     } else {}
// }

// // Doesn't show negatie value
// for (let i = 1; i <= 5; i++) {
//     jonSnowHealth -= jamieLannisterAttack;
//     console.log(`Jon Snow health is ${jonSnowHealth}`)

//     if (jonSnowHealth <= 35) {
//         console.log("Jon Snow has been slain")
//         break;
//     } else {}
// }

// Makes health zero
for (let i = 1; i <= 5; i++) {
    jonSnowHealth -= jamieLannisterAttack;

    if (jonSnowHealth <= 0) {
        jonSnowHealth =0;
    }

    console.log(`Jon Snow health is ${jonSnowHealth}`)

    if (jonSnowHealth <= 0) {
        console.log("Jon Snow has been slain")
        break;
    } else {}
}