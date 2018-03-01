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

var usersWord = []; // the current word that the user selected

var discardedWords = []; // incorrect words that the player previously chose

var playerAttempts = ""; // pretty straight forward

///// ======== ////// LANDING PAGES 1 AND 2 ///// ======== //////




///// ======== ////// ATTEMPTS ///// ======== //////

// case/switch || if/else

for (var i = 0; i <= 4; i++) {
  if (playerAttempts.length === 4) {
    console.log("Four attempts remaining. [] [] [] []");
  } else if
    (playerAttempts.length === 3) {
      console.log("Three attempts remaining. [] [] []");
    } else if
    (playerAttempts.length === 2) {
      console.log("Two attempts remaining! [] []");
    } else if
      (playerAttempts.length === 1) {
      console.log("One attempt remaining! Lock out pending []");
    } else {
      console.log("This terminal has been locked. Please contact your administrator.");
      break;
    }
}

console.log(playerAttempts); // testing








///// ======== ////// ROW START ///// ======== //////

//



///// ======== ////// RANDOM WORDS ///// ======== //////

// access objects in words array
// push those objects at random into newArr
// spread out objects amongst garbage chars in giantArray
// have user be able to highlight words




// var words = ["NIMBUS", "CLEARS", "CHURCH", "WRITES", ]...etc

// Math.floor(Math.random()

// Push from var words into giantArray (mixed with garbage words)

// onClick






///// ======== ////// GARBAGE CHARACTERS ///// ======== //////

// access objects in garbage array
// push those objects at random into giantArray
// Note: Not clickable! (at least, not yet)



// var garbage = ["!", "%", "<", ")", ]...etc
// Math.floor(Math.random()
// Push from var garbage into giantArray (mixed with random words)




///// ======== ////// GIANT ARRAY ///// ======== //////

// a combination of garbage array and words array
// user will be able to click on all words
// if object/word is clicked, then push it to usersWord array





///// ======== ////// GOAL WORD ///// ======== //////

// the game takes a word, at random, from giantArray
// this target word gets pushed into goalWord




///// ======== ////// PLAYER SELECT & COMPARE ///// ======== //////

// player clicks on word from giantArray
// word is pushed to usersWord array
// this word will be compared to the object in the computer's goalWord array
  // if usersWord === goalWord
    // win state screen

  // assume the player selects an incorrect word
    // the computer will look at the usersWord
    // usersWord !== goalWord
