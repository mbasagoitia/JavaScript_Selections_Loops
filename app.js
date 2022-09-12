console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    } 
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i}: FIZZBUZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i}: BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i}: FIZZ`);
    }
}

//another solution using a nested conditional (I like my first one better just because it looks a little cleaner and uses fewer lines of code)

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        if (i % 3 === 0) {
            console.log(`${i}: FIZZBUZZ`);
        } else {
            console.log(`${i}: BUZZ`);
        }
    } else if (i % 3 === 0) {
        console.log(`${i}: FIZZ`);
    }
}

//another solution with only two conditionals

let phrase;

for (let i = 1; i <= 100; i++) {
    phrase = "";
    if (i % 3 === 0) {
        phrase = "FIZZ";
    }
    if (i % 5 === 0) {
        phrase += "BUZZ";
    }
    console.log(`${i}: ${phrase}`);
}

//Exercise 3
let j = 1;
while (j <= 100) {
    if (j % 2 === 1) {
        console.log(j);
    }
    j++;
}

let k = 1;

do {
    if (k % 2 === 1) {
        console.log(k);
    }
    k++;
} while (k <= 100);

let l = 1;

while (l <= 100) {
    if (l % 5 === 0 && l % 3 === 0) {
        console.log(`${l}: FIZZBUZZ`);
    } else if (l % 5 === 0) {
        console.log(`${l}: BUZZ`);
    } else if (l % 3 === 0) {
        console.log(`${l}: FIZZ`);
    }
    l++;
}

let m = 1;

do {
    if (m % 5 === 0 && m % 3 === 0) {
        console.log(`${m}: FIZZBUZZ`);
    } else if (m % 5 === 0) {
        console.log(`${m}: BUZZ`);
    } else if (m % 3 === 0) {
        console.log(`${m}: FIZZ`);
    }
    m++;
} while (m <= 100)

//Exercise 4

let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let i = 0;

for ( ; i <= n; i++) {
    if (i === value) {
        console.log(`${value}: Found value!`);
        break;
    } 
}

if (i !== value) {
    console.log("Did not find value");
}

//Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`Start: ${start}, Range limit: ${n}, Fizz: ${fizzDivisor}, Buzz: ${buzzDivisor}`);

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log(`${i}: FIZZBUZZ`);
    } else if (i % buzzDivisor === 0) {
        console.log(`${i}: BUZZ`);
    } else if (i % fizzDivisor === 0) {
        console.log(`${i}: FIZZ`);
    }
}

