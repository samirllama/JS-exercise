// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3']
const paddedNum = text => text.map(value=>value.padStart(2, "0"))
console.log(paddedNum(nums))


// 2. Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplestThings in LIFE are alwaysThe best"
const titleCase = text => text.replace(/(\w)([A-Z])/g, "$1 $2").split(/\s/).map(v=>v[0].toUpperCase()+v.slice(1)).join(' ').replace(/(\w)([A-Z])/g, "$1 $2")
console.log(titleCase(camelCase))


// 3. Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
const newCamel = text => {
  const array = text.split(/\s/)
  const newArray = []
  for(let i = 0, n = array.length; i < n; i += 2) {
    newArray.push(array[i][0].toLowerCase() + array[i].slice(1) + (array[i+1] ? array[i+1] : ''))
  }
  return newArray.join(' ')
}
console.log(newCamel(newTitle))


// 4. Passage Counter
// How many seconds will it tke to read the provided text? 
// If it goes past 60 seconds, quote in minutes!
const passage = `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`

const howMany = text => {  
  const wordsPerSecond = 5
  const wordCount = text.split(/\s/).length
  const seconds = Math.ceil(wordCount / wordsPerSecond)
  const minutes = Math.floor(seconds / 60)
  const remainSecs = seconds % 60
  const time = []
  
  if (minutes) {
    time.push(`${minutes}m`)
    if (remainSecs) {
      time.push(`${remainSecs}s`)
    }
  } else {
    time.push(`${seconds}s`)
  }
  return time.join(' ')
}
console.log(howMany(passage));


// 5. Pig Latin
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = "hamlet"
const pigLatin = text => {
  const vowels = 'aeiou'
  return vowels.indexOf(text[0]) !== -1 ? text + 'ay' : pigLatin(text.slice(1) + text[0])
}
console.log(pigLatin(word));