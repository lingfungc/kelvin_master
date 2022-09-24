// create a const variable of temperature in kelvin
const kelvin = 0;

// convert temp from kelvin to celsius, by minus 273
let celsius = kelvin - 273;

// convert temp from celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// print the statement for the temp in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
