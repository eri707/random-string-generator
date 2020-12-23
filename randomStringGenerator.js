let resultString = '';
for (i = 0; i < 6; i += 1) {
    let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomLetters = letters[Math.floor(Math.random() * letters.length)];
    resultString += randomLetters;
}
console.log(resultString);
