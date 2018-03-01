var garbage = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", ";", "<", ">", "/", "?", "~",
",", "."];

var words = ["REAPER", "TRYING", "VERMIN", "MISERY", "CRISPY", "TRUANT", "ARGUES", "THINKS", "KILLER", "LESSON", "JUMPER", "HOLLOW", "WILLOW", "MOTHER", "FATHER", "WRENCH", "NIMBUS", "RABIES", "TOASTY",
  "PULLER", "TIMBER", "VULGAR", "BENDER", "KITTEN", "NAPPER", "DAPPER", "CHANGER", "BEAKER", "APPLES", "ORANGE", "BUILDER", "FALCON", "LOGGER", "ABROAD", "ACCEPT", "ACTION", "MERGER", "MIDDLE", "MEMORY",
  "SALARY", "SCREEN", "SCHEME", "ROBUST", "SYMBOL", "TALENT", "WINDOW", "WORKER", "WRITER", "YELLOW", "GREENS", "TENDER", "TENNIS", "RECORD", "REMOVE", "REMAIN", "NEARLY", "NOBODY", "NOTICE", "NOTION",
  "NORMAL", "MURDER", "MARINE", "FAMOUS", "EXTENT", "FACING", "FINISH", "FABRIC", "CASTLE", "CENTER", "CARBON", "FRIEND", "GARDEN", "GOLDEN", "GERMAN", "POLISH", "IMPACT", "IMPORT", "HEALTH", "REDUCE",
  "REASON", "REGIME", "RELIEF", "READER", "REMOTE", "SECRET", "SECTOR", "SECOND", "SCHOOL", "SURVEY", "THEORY", "TWELVE", "WINTER", "SUMMER", "AUTUMN", "WONDER", "PRETTY", "PROVEN", "PRINCE", "PUBLIC",
  "PLANET", "PLENTY", "PLAYER", "BEAUTY", "BISHOP", "BOTTLE", "BREATH", "BRANCH", "CAMERA", "BUTTON", "BELONG", "BETTER"
];

var zeroOneCode = ["0xN0H1", "0xN0H2", "0xN0H3", "0xN0H4", "0xN0H5", "0xN0H6", "0xN0H7", "0xN0H8", "0xN0H9", "0xN0H0", "1xN0H1", "1xN0H2", "1xN0H3", "1xN0H4", "1xN0H5", "1xN0H6", "1xN0H7", "1xN0H8", "1xN0H9",
  "1xN0H0"
];

var rowStarts = []; // where zeroOneCode will get pushed to (Landing 3)

var giantArray = []; // combination of var garbage and var words

var goalWord = []; // word that the computer chose to be the "goal"

var userWord = []; // the current word that the user selected

var discardedWords = []; // incorrect words that the player previously chose

var playerAttempts = []; // how many past attempts the user has made---to be populated with incorrect words

///// ======== ////// LANDING PAGES 1 AND 2 ///// ======== //////

// click on power dial
// Landing 2 appears
// user submit form
// GO button:
  // activate onClick event only when the submit form contains something


///// ======== ////// ATTEMPTS ///// ======== //////

// case/switch || if/else
// this shows how many attempts the player has left
// this is updated after incorrect user words get pushed into the discardedWords array

for (var i = 0; i < 1; i++) {
  if (playerAttempts.length === 4) {
    console.log("Four attempts remaining. [] [] [] []");
    } else if
    (playerAttempts.length === 3) {
      console.log("Three attempts remaining. [] [] []");
    } else if
    (playerAttempts.length === 2) {
      console.log("Two attempts remaining. [] []");
    } else if
      (playerAttempts.length === 1) {
      console.log("One attempt remaining. Lock out pending []");
    } else {
      console.log("This terminal has been locked. Please contact your administrator.");
      break;
    }
}



///// ======== ////// ROW START ///// ======== //////

// hardcoded in html for now, might change




///// ======== ////// RANDOM WORDS ///// ======== //////

// spread out objects amongst garbage chars in giantArray
// have user be able to highlight words



var wordsInThisRound = function(w) {
  var words = wordsInThisRound[Math.floor(Math.random() * 10)];
  giantArray.push(words);
};

wordsInThisRound();






// var words = ["NIMBUS", "CLEARS", "CHURCH", "WRITES", ]...etc

// Math.floor(Math.random()

// Push from var words into giantArray (mixed with garbage words)






///// ======== ////// GARBAGE CHARACTERS ///// ======== //////


let moveGarbage = function(g) {
  var garbage = moveGarbage[Math.floor(Math.random() * 60)];
  giantArray.push(garbage);
};

moveGarbage();

// access objects in garbage array
// use Math.random to chose garbage objects
// push those objects at random into giantArray
// Note: Not clickable! (at least, not yet)







///// ======== ////// GIANT ARRAY ///// ======== //////

// let words;
// let garbage;
let garbageAndWords = function() {
  let giantArray = garbageAndWords[Math.floor(Math.random() * 10)]; // use Math.random to get goal word
  giantArray.push(words); // words that get pushed into goalWord array
  // return goalWord;
};

console.log(giantArray, "this will be the giant array");

// a combination of garbage array and words array
// user will be able to click on all words
// if object/word is clicked, then push it to userWord array



///// ======== ////// GOAL WORD ///// ======== //////

var giantArray;
var computerChoice = function() {
  var goalWord = computerChoice[Math.floor(Math.random() * 1)]; // use Math.random to get goal word
  goalWord.push(giantArray); // new goal word gets pushed into goalWord array
  // return goalWord;
};

console.log(goalWord, "this is where the goal word will be"); // shows up as [] in dev tools. This appears to be a good sign.


///// ======== ////// PLAYER SELECTS WORD ///// ======== //////

// player hovers over words
  // causes word to be highlighted
  // hover event listener
// player clicks on word
// onClick pushes this word to userWord array



///// ======== ////// COMPARE ///// ======== //////



// player clicks on word from giantArray
// word is pushed to userWord array
// this word will be compared to the object in the computer's goalWord array


// let compare = 0;
// function goalAndUserWord(x, y) {
//   for (var i = 0; i = compare.length; i++) { // not sure about ++
//     if (goalWord === userWord) {
//       /// win state screen
//       return winState;
//     } else {
//       playerAttempts.push(goalWord);
//
//     }
//   }
// };
//
// console.log(goalAndUserWord(goalWord, userWord));
  // if userWord === goalWord
    // win state screen

  // assume the player selects an incorrect word
    // the computer will look at the userWord
    // if userWord !== goalWord
