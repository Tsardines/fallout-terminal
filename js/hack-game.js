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

var rowStarts = [];

var giantArray = [];

var goalWord = [];

var playerAttempts = "";

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
// spread out objects amongst garbage chars in newArr
// have user be able to highlight words
// make words clickable
// if object/word is clicked, then push it to playerAttempts array



// var words = ["NIMBUS", "CLEARS", "CHURCH", "WRITES", ]...etc

// Math.floor(Math.random()

// Push from var words into newArr (mixed with garbage words)

// onClick

// user will be able to click on all words




///// ======== ////// GARBAGE CHARACTERS ///// ======== //////

// access objects in garbage array
// push those objects at random into newArr
// Note: Not clickable! (at least, not yet)



// var garbage = ["!", "%", "<", ")", ]...etc
// Math.floor(Math.random()
// Push from var garbage into newArr (mixed with random words)





///// ======== ////// GIANT ARRAY ///// ======== //////





///// ======== ////// TARGET WORD ///// ======== //////




///// ======== ////// PLAYER SELECT & COMPARE ///// ======== //////
