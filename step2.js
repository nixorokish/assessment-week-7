let br = '------------------'

console.log(br)
console.log(br)

console.log(`1) SUM ZERO`)

const addToZero = (arr) => {
    let x = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            x = (arr[i] + arr[j] === 0 ? true : false)
            if (x === true) return x
        }
    } return x
}

console.log([1, 2, 3, -2])
console.log(addToZero([1, 2, 3, -2]))
console.log(`runtime: O(n)**2`)

console.log(br)

console.log(`2) UNIQ CHAR`)

const hasUniqChars = (string) => {
    newArr = []
    string = string.split(``)
    x = 'characters are unique'
    for (let i = 0; i < string.length; i++) {
        if (!newArr.includes(string[i])) {
            newArr.push(string[i])
        } else {
            x = false
            return x
        }
    } return x
}

variable = 'hello'
console.log(variable)
console.log(hasUniqChars(variable))
console.log('runtime: O(n)')

console.log(br)

console.log(`3) PANGRAM SENTENCE`)

const pangram = (sentence) => {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    alphabetArr = alphabet.split('')
    for (let i = 0; i < sentence.length; i++) {
        if (alphabetArr.includes((sentence[i]).toLowerCase())) {
            x = alphabetArr.indexOf(sentence[i])
            // console.log(`On loop ${i}, we're looking at ${sentence[i]} from the sentence and found that letter in alphabetArr at ${alphabetArr.indexOf(sentence[i])}, which is the letter ${alphabetArr[x]}`)
            alphabetArr.splice(x,1)
            // console.log(alphabetArr)
        }
    } if (alphabetArr.length === 0) {
        return `it's a pangram`
    } else {
        return `not a pangram`
    }
    
}

let sentence = 'The quick brown fox jumps over the lazy dog!'
console.log('sentence: ', sentence)
console.log(pangram(sentence))

console.log(br)

console.log(`4) LONGEST WORD`)

const find_longest_word = (arr) => {
    longestWord = ''
    for (let i = 0; i < arr.length; i++) if (arr[i].length > longestWord.length) longestWord = arr[i]
    return longestWord.length
}

console.log(find_longest_word(["hi", "hello"]))

console.log(br)
console.log(br)