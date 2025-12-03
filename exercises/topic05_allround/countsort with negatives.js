const data = [0, 1, 1, 2, -2, 2, 3, -3, 4, 4, -4, -4, 5, 5, 5, 5, 5, 6, 6, 6, 8, 9];
const min = -9;
const max = 9;
const frequencyOf = new Array(max - min + 1).fill(0);
for (let i = 0; i < data.length; i++) {
    const number = data[i];
    const index = number - min;
    frequencyOf[index]++;
}
for (let number = min; number <= max; number++) {
    const index = number - min;
    console.log(number + ": " + frequencyOf[index]);
}