const data = [0.00, 0.10, 0.11, 2.00, -2.01, 2.00, 3.00, -3.14, 4.00, 4.00, -4.05, -4.05, 5.00, 5.00, 5.01, 5.01, 5.01, 6.00, 6.00, 6.00, 8.00, 9.00];
const min = -9.00;
const max = 9.00;
const range = (max - min) * 100 + 1;
const frequencyOf = new Array(range).fill(0);
for (let i = 0; i < data.length; i++) {
    const number = data[i];
    const index = (number - min) * 100;
    frequencyOf[index]++;
}
//console.log(frequencyOf);
let number = min;
while (number <= max+0.01) {
    const index = Math.floor((number - min) * 100);
    console.log(Math.floor(number*100)/100 + ": " + frequencyOf[index]);
    number += 0.01;
}