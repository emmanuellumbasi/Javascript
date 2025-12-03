const data = [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 8, 9];
const frequencyOf = new Array(10).fill(0);
let maxFrequency = 0;
for (let i = 0; i < data.length; i++) {
    const number = data[i];
    frequencyOf[number]++;
    if(frequencyOf[number] > maxFrequency)
        maxFrequency = frequencyOf[number];
}
for (let row = maxFrequency; row > 0; row--) {
    let line = row;
    for (let col = 0; col <= 9; col++) {
        if(frequencyOf[col] >= row)
            line += '*';
        else
            line += ' ';
    }
    console.log(line);
}
console.log(" 0123456789");