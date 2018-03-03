var garbage = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", ";", "<", ">", "/", "?", "~",
",", "."];

var words = ["REAPER","TRYING","VERMIN","MISERY","CRISPY","TRUANT","ARGUES","THINKS","KILLER","LESSON","JUMPER","HOLLOW","WILLOW","MOTHER","FATHER","WRENCH","NIMBUS","RABIES","TOASTY",
"PULLER","TIMBER","VULGAR","BENDER","KITTEN","NAPPER","DAPPER","CHANGE","BEAKER","APPLES","ORANGE","BUILDS","FALCON","LOGGER","IDIOTS","ABROAD","ACCEPT","ACTION","MERGER","MIDDLE",
"MEMORY","SALARY","SCREEN","SCHEME","ROBUST","SYMBOL","TALENT","WINDOW","WIDOWS","WORKER","WRITER","YELLOW","GREENS","TENDER","TENNIS","RECORD","REMOVE","REMAIN","NEARLY","NOBODY",
"NOTICE","NOTION","STYLES","TRICKY","HAVING","DANCER","LAMBDA","KOSHER","KNEELS","KNOBBY","LAUGHS","LEGION","HUMANS","LEMONS","LYCHEE","COOKIE","PROVEN","POTTER","QUOHOQ","QUIRKY",
"PURPLE","QUAINT","QWERTY","PREFIX","SHOJIS","SEESAW","SEAMAN","SUBWAY","SICKLE","SIGNET","SIRENS","SEIZED","SINEWY","VIKING","WAFFLE","VELOUR","VIABLE","WHINGE","VIOLET","WIDELY",
"VELVET","WEAKEN","WIZARD","WINERY","ZEALOT","MUDCAP","MUSING","MUSICS","NEATEN","NOISES","NOGGIN","NOMADS","MOSQUE","MONGOL","HOLLER","ILLEST","ICONIC","IMPISH","INBRED","INFLUX",
"INTAKE","INHALE","IMPOSE","CROWNS","CRUMBS","CREEPS","CRADLE","CRACKS","CRAMPY","ENIGMA","ETHYNE","EPONYM","EXPATS","FLAMES","FLAMBE","FOSSIL","FUNKER","FLORAL","GRINCH","GYOZAS",
"NORMAL","MURDER","MARINE","FAMOUS","EXTENT","FACING","FINISH","FABRIC","CASTLE","CENTER","CARBON","FRIEND","GARDEN","GOLDEN","GERMAN","POLISH","IMPACT","IMPORT","HEALTH","REDUCE",
"REASON","REGIME","RELIEF","READER","REMOTE","SECRET","SECTOR","SECOND","SCHOOL","SURVEY","THEORY","TWELVE","WINTER","SUMMER","AUTUMN","WONDER","PRETTY","PROVEN","PRINCE","PUBLIC",
"PLANET","PLENTY","PLAYER","BEAUTY","BISHOP","BOTTLE","BREATH","BRANCH","CAMERA","BUTTON","BELONG","BETTER","CANOPY","CARAFE","GLIDER","YEOMAN","JAGGED","ORGANS","VERMIN","CYPHER",
"ARCHER","FILTER","TAIKOS","TREATS","DUDUKS","VIOLIN","STAVES","BRACED","CLASSY","POTATO","BANANA","ENERGY","NINETY","AFRICA","TWELVE","AUGUST","FATHER","BROKEN","SUNDAY","MONDAY",
"FRIDAY","PERSON","MONKEY","CHANGE","SYSTEM","SNITCH","SPRING","SCARCE","BREATH","ANALOG","ANKLES","ANIMAS","ANGINA","ANOINT","BADASS","BADGER","BACONS","BALDED","BADDIE","BALLAD",
"BEZELS","BOXCAR","BOUNCY","CAMPER","CANTER","CHEWER","CHITIN","CHILLS","COUGAR","DEFIES","DEFOAM","DHARMA","DINGUS","DOMINO","DRACHM","DUGONG","EERILY","ECZEMA","EXPERT","FEDORA",
"FIDGET","FOLKSY","FOODIE","FOLEYS","GAGAKU","GIGOLO","GLUTES","HAWKEY","HAUNCH","HEEHAW","HELIUM","HIJACK","HONEYS","HORROR","ISSUER","ISOBAR","IPECAC","INTERN","INTOMB","JAGUAR",
"JUNKET","KABUKI","KAHUNA","KAYAKS","KARATS","KARATE","KICKER","KIMONO","LANCER","LAWYER","LAZULI","LIMBIC","LOCKET","LOAVES","LUSTRE","MACULA","MADAMS","MACAWS","MAMLUK","MARACA",
"MARBLE","MEDUSA","MIASMA","MILDLY","MIMOSA","MOCAPS","MUFFIN","DONUTS","NARCOS","NERVES","NEURON","NUTMEG","NYMPHA","OCULUS","ONYXES","OSMICS","PACING","PAGODA","PAPERY","PEGBOX",
"PEWTER","PHYLUM","PLANET","POBOYS","POINTY","PSEUDO","PIXIES","QUARTZ","QUIETS","QUENCH","QUOKKA","QUIVER","RADARS","RAIDER","RARITY","RAZZED","REGGAE","RESCUE","RHINOS","RIPOST",
"SALUKI","SALOON","SENSEI","SCOOPS","SHRIMP","SENILE","SHALOM","SHERPA","SHOVEL","SILVER","SLACKS","SLUDGE","SMELLY","SPECKS","STALKS","STEAMY","TABLAS","TAMALE","TAPIRS","TATTOO",
"TAWNEY","TEMPEH","TONICS","TORCHY","TURTLE","UNARMS","UMLAUT","UMBRAE","UNEASY","UNPAID","UNWISE","UPHELD","UPHILL","UPLAND","UPLINK","UTMOST","UPPERS","VALVES","VERBAL","VERITY",
"VERNIX","VORTEX","WAGONS","WHEEZE","WHISKY","WIRING","XYLEMS","SYLOID","WYVERN","YODELS","ZEBRAS","ZAPPER","ZEROES","ZEPHYR","ZOMBIE","HERNIA","HITMAN"
];


// var zeroOneCode = ["0xN0H1", "0xN0H2", "0xN0H3", "0xN0H4", "0xN0H5", "0xN0H6", "0xN0H7", "0xN0H8", "0xN0H9", "0xN0H0", "1xN0H1", "1xN0H2", "1xN0H3", "1xN0H4", "1xN0H5", "1xN0H6", "1xN0H7", "1xN0H8", "1xN0H9",
//   "1xN0H0"
// ];

// var rowStarts = []; // where zeroOneCode will get pushed to (Landing 3)

var giantArray = []; // combination of var garbage and var words

var goalWord = ""; // word that the computer chose to be the "goal"  // STRING

var userWord = ""; // the current word that the user selected // STRING

// var discardedWords = []; // incorrect words that the player previously chose

var playerAttempts = []; // how many past attempts the user has made


///// ======== ////// LANDING PAGES 1 AND 2 ///// ======== //////

var form = document.querySelector('.form')
form.addEventListener('submit', function(evt) {
  evt.preventDefault(); // will prevent the refresh from happening---form won't submit to another page
  var nameInputDOMElem = document.querySelector('.name');
  console.log(nameInputDOMElem.value);
});

// click on power dial
// Landing 2 appears
// user submit form
// GO button:
  // activate onClick event only when the submit form contains something


///// ======== ////// ATTEMPTS ///// ======== //////

// this shows how many attempts the player has left

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




///// ======== ////// RANDOM WORDS and GIANT ARRAY  ///// ======== //////

var shuffledWords = shuffle(words);
// randomly pick an index between 0 and 54


function clickFunc(evt) {
  // console.warn(evt.target, evt.target.innerText)
  // console.warn(evt.target.innerText.slice(1) === goalWord) // need .slice method to eliminate space character
  // console.warn('goal word =====>', goalWord)
if (evt.target.innerText.slice(1) == goalWord) {

console.log('you win');
} else {
console.log('try again')
}

// update user word (or else it'll be an empty string)

// on click, compare user word to goalWord

}









///// ======== ////// COMPARE ///// ======== //////

// this function will compare j & k (goalWord & userWord)
// loop through each letter in each string
// if/else

// for (var j = 0; j < goalWord.length; j++) {
//   for (var k = 0; k < userWord.length; k++) {
//     if (goalWord[j] == userWord[k]) {
//     console.log("is equal");
//   } else (goalWord[j] !== userWord[k]) {
//     playerAttempts.push(userWord);
//     // console.log("not equal");
//   }
// }
// }





let createWordElems = function() {


  for (var i = 0; i <= 54; i++) {
    var singleWord = document.createElement('span') // creating 'p' element, calling it singleWord
    singleWord.innerHTML = " " + shuffledWords[i]; // setting the content of the first word

    singleWord.addEventListener("click", clickFunc);
    // set onClick event for word

    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleWord); // appending singleWord to giantArrayElement
  }
}
createWordElems();



///// ======== ////// HIGHLIGHT ///// ======== //////

function highlight() {

  var selectSpan = document.querySelector('span')

  selectSpan.addEventListener("mouseover", function(evt) {
    evt.target.style.backgroundColor = "#ebce8e";
  });

  selectSpan.addEventListener("mouseout", function(evt) {
    evt.target.style.backgroundColor = "#473611";
  });
}

highlight();


///// ======== ////// GARBAGE CHARACTERS and GIANT ARRAY ///// ======== //////

let createGarbageElems = function() {
  var shuffledGarbage = shuffle(garbage);

  for (var i = 0; i <= 20; i++) {
    var singleTrash = document.createElement('span') // creating 'p' element, calling it singleTrash
    singleTrash.innerHTML = shuffledGarbage[i]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElems();






// var garbageAndWords = function() {
//   let giantArray = garbageAndWords[Math.floor(Math.random() * 60)]; // use Math.random to choose words for that round
//   giantArray.push(words); // words that get pushed into giantArray
//   // return goalWord;
// };

// console.log(garbageAndWords(giantArray, "this will be the giant array"));

// a combination of garbage array and words array
// user will be able to click on all words
// if object/word is clicked, then push it to userWord array



///// ======== ////// GOAL WORD ///// ======== //////

var giantArray;
var computerChoice = function() {
  goalWord = shuffledWords[Math.floor(Math.random() * 54)]; // use Math.random to get goal word
  // return goalWord;
};

computerChoice();



///// ======== ////// PLAYER SELECTS WORD ///// ======== //////

// player hovers over words
  // causes word to be highlighted
  // hover event listener
// player clicks on word
// onClick pushes this word to userWord array



// player clicks on word from giantArray
// word is pushed to userWord array
// this word will be compared to the object in the computer's goalWord array


// Note: The code below came from stack overflow.
// var userWord = a;
// var goalWord = b;
// function equality(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length != b.length) return false;
//
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] !== b[i] return false)
//   }
//   return true;
// }

// console.log(a, b);





// let compare = 0;
// function goalAndUserWord(x, y) {
//   for (var i = 0; i = compare.length; i++) { // not sure about ++
//     if (goalWord === userWord) {
//       /// win state screen
// //      return winState;
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


///// ======== ////// COMPUTER SCREEN ///// ======== //////
