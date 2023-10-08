function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = [];
    
    for (let word of words) {
        let reversedWord = word.split('').reverse().join('');
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(' ');
}

let sentence = "This is a sunny day";
console.log(reverseWords(sentence));
