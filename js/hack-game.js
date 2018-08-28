const garbage = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", ";", "<", ">", "/", "?", "~",
",", ".", "|", "¡", "¢", "£", "¥", "§", "©", "®", "µ", "¶", "¿", "Ж", "Г", "Д", "Ѱ", "ה", "ᛒ", "ᚼ"];
// fun fact: ᛒ(Bjarkan) + ᚼ(Hagall) = Bluetooth

// I selected the following words from various dictionaries.
// In the near future I plan on implementing a dictionary API
// that'll have access to thousands of words rather than a few hundred.

const words = ["REAPER","TRYING","VERMIN","MISERY","CRISPY","TRUANT","ARGUES","THINKS","KILLER","LESSON","JUMPER","HOLLOW","WILLOW","MOTHER","FATHER","WRENCH","NIMBUS","RABIES","TOASTY","PULLER","TIMBER","VULGAR","BENDER",
"DAPPER","CHANGE","BEAKER","APPLES","ORANGE","BUILDS","FALCON","LOGGER","IDIOTS","ABROAD","ACCEPT","ACTION","MERGER","MEMORY","SALARY","SCHEME","ROBUST","SYMBOL","TALENT","WINDOW","WIDOWS","WORKER","WRITER","YELLOW","GREENS",
"TENDER","TENNIS","RECORD","REMOVE","REMAIN","NOTICE","NOTION","STYLES","TRICKY","HAVING","DANCER","LAMBDA","KOSHER","KNEELS","KNOBBY","LAUGHS","LEGION","HUMANS","LEMONS","LYCHEE","COOKIE","PROVEN","POTTER","QUAHOQ","QUIRKY",
"PURPLE","QUAINT","QWERTY","PREFIX","SHOJIS","SEESAW","SUBWAY","SICKLE","SIGNET","SIRENS","SEIZED","SINEWY","VIKING","WAFFLE","VELOUR","VIABLE","VIOLET","WIDELY","VELVET","WEAKEN","WIZARD","WINERY","ZEALOT","MUDCAP","MUSING",
"MUSICS","NOMADS","MOSQUE","MONGOL","ICONIC","IMPISH","INBRED","INFLUX","INTAKE","INHALE","IMPOSE","CROWNS","CRUMBS","CREEPS","CRADLE","CRAMPY","ENIGMA","ETHYNE","EPONYM","EXPATS","FLAMES","FLAMBE","FOSSIL","FUNKER","FLORAL",
"GRINCH","GYOZAS","NORMAL","MURDER","MARINE","FAMOUS","EXTENT","FACING","FINISH","FABRIC","CASTLE","CENTER","CARBON","FRIEND","GARDEN","GOLDEN","IMPACT","IMPORT","HEALTH","REDUCE","REASON","REGIME","RELIEF","READER","REMOTE",
"SECRET","SECTOR","SECOND","SCHOOL","SURVEY","THEORY","TWELVE","WINTER","SUMMER","AUTUMN","WONDER","PRETTY","PROVEN","PRINCE","PUBLIC",
"PLANET","PLENTY","PLAYER","BEAUTY","BISHOP","BOTTLE","BREATH","BRANCH","CAMERA","CARAFE","GLIDER","YEOMAN","JAGGED","ORGANS","VERMIN","CYPHER","ARCHER","FILTER","TAIKOS","TREATS","DUDUKS","VIOLIN","STAVES","BRACED","CLASSY",
"POTATO","BANANA","ENERGY","NINETY","AFRICA","TWELVE","AUGUST","FATHER","BROKEN","SUNDAY",
"FRIDAY","PERSON","MONKEY","CHANGE","SYSTEM","SNITCH","SPRING","SCARCE","BREATH","ANALOG","ANKLES","ANIMAS","ANGINA","ANOINT","BADASS","BADGER","BACONS","BALDED","BADDIE","BALLAD","BEZELS","BOXCAR","BOUNCY","CAMPER","CANTER",
"CHEWER","CHITIN","CHILLS","COUGAR","DEFIES","DEFOAM","DHARMA","DOMINO","DRACHM","DUGONG","EERILY","ECZEMA","EXPERT","FEDORA",
"FIDGET","FOLKSY","FOODIE","FOLEYS","GAGAKU","GIGOLO","GLUTES","HAWKEY","HAUNCH","HEEHAW","HELIUM","HIJACK","HONEYS","HORROR","ISSUER","ISOBAR","IPECAC","INTERN","INTOMB","JAGUAR","JUNKET","KABUKI","KAHUNA","KAYAKS","CARATS",
"KARATE","KICKER","KIMONO","LANCER","LAWYER","LAZULI","LIMBIC","LOCKET","LOAVES","LUSTRE","MACULA","MADAMS","MACAWS","MAMLUK","MARACA",
"MARBLE","MEDUSA","MIASMA","MILDLY","MIMOSA","MOCAPS","MUFFIN","DONUTS","NARCOS","NERVES","NEURON","NUTMEG","NYMPHA","OCULUS","ONYXES","OSMICS","PACING","PAGODA","PAPERY","PEGBOX","PEWTER","PHYLUM","PLANET","POBOYS","POINTY",
"PSEUDO","PIXIES","QUARTZ","QUIETS","QUENCH","QUOKKA","QUIVER","RADARS","RAIDER","RARITY","RAZZED","REGGAE","RIPOST","SALUKI","SALOON","SENSEI","SENILE","SHALOM","SHERPA","SILVER","SLACKS","SLUDGE","SMELLY","SPECKS","STALKS",
"STEAMY","TABLAS","TAMALE","TAPIRS","TATTOO","TAWNEY","TEMPEH","TONICS","TORCHY","TURTLE","UNARMS","UMLAUT","UMBRAE","UNEASY","UNPAID","UNWISE","UPHELD","UPHILL","UPLAND","UPLINK","UTMOST","VALVES","VERBAL","VERITY",
"VORTEX","WHEEZE","WHISKY","WIRING","XYLEMS","WYVERN","YODELS","ZAPPER","ZEROES","ZEPHYR","ZOMBIE","HERNIA","HITMAN","GAOLER","CONGEE","FOGBOW",
"HANGAR","ABACUS","ABBEYS","ACACIA","ADOBES","AFGHAN","ALLOYS","AUBURN","BABKAS","BAMBOO","BINARY","CAMELS","CHICAS","CITRUS","COCCYX","COHOST","DEBUNK","DENTAL","DINERO","DJINNI","ECHOED","EPOCHS","EXUDES","FAERIE"
];

var giantArray = []; // combination of garbage and words
var goalWord = ""; // word that the computer chose to be the "goal"
var userWord = ""; // the current word that the user selected
var playerAttempts = 0; // how many past attempts the user has made
var shuffledWords = shuffle(words);

document.addEventListener("DOMContentLoaded", function(event) {
  createAttempt();
});

// The following segments are displayed like this onscreen:

///// GARBAGE CHARACTERS /////
       ///// random words /////
///// GARBAGE CHARACTERS /////
       ///// random words /////
///// GARBAGE CHARACTERS /////

// Simply put, there are three rows of garbage chars and two row of random words

///// ======== ////// GARBAGE CHARACTERS to GIANT ARRAY ///// ======== //////
var createGarbageElems = function() {
  var shuffledGarbage = shuffle(garbage);
  for (var i = 0; i <= 16; i++) {
    var singleTrash = document.createElement('span') // creating 'p' element, calling it singleTrash
    singleTrash.innerHTML = " " + shuffledGarbage[i]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElems();

///// ======== ////// RANDOM WORDS, GIANT ARRAY ///// ======== //////
function createWordElems() {
  for (var j = 0; j <= 14; j++) {
    var singleWord = document.createElement('span')
    singleWord.innerHTML = " " + shuffledWords[j]; // setting the content of the first word
    singleWord.addEventListener("click", clickFunc); // set onClick event for word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleWord); // appending singleWord to giantArrayElement
  }
}
createWordElems();

///// ======== ////// GARBAGE CHARACTERS to GIANT ARRAY 2 ///// ======== //////
var createGarbageElemsTwo = function() {
  var shuffledGarbage = shuffle(garbage);
  for (var k = 12; k <= 27; k++) {
    var singleTrash = document.createElement('span')
    singleTrash.innerHTML = " " + shuffledGarbage[k]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElemsTwo();

///// ======== ////// RANDOM WORDS, GIANT ARRAY 2 ///// ======== //////
function createWordElemsTwo() {
  for (var m = 15; m <= 29; m++) {
    var singleWord = document.createElement('span')
    singleWord.innerHTML = " " + shuffledWords[m]; // setting the content of the first word
    singleWord.addEventListener("click", clickFunc); // set onClick event for word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleWord); // appending singleWord to giantArrayElement
  }
}
createWordElemsTwo();

///// ======== ////// GARBAGE CHARACTERS to GIANT ARRAY 3 ///// ======== //////
var createGarbageElemsThree = function() {
  var shuffledGarbage = shuffle(garbage);
  for (var n = 18; n <= 33; n++) {
    var singleTrash = document.createElement('span')
    singleTrash.innerHTML = " " + shuffledGarbage[n]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElemsThree();

///// ======== ////// GOAL WORD ///// ======== //////
var giantArray;
  var computerChoice = function() {
    goalWord = shuffledWords[Math.floor(Math.random() * 29)];
  };

computerChoice();

///// ======== ////// CORRECT LETTERS ///// ======== //////
function showResult(result) {
  var bottomText = document.querySelector('.bottomText');
  bottomText.setAttribute('id', 'bottomID');
}

function countCommonCharacters() {
  var count = 0;
  for (var i = 0; i <= userWord.length; i++) {
    if (goalWord.includes(userWord[i]))
    count++;
  }
  return count;
}

countCommonCharacters();
showResult();

///// ======== ////// COMPARING GOALWORD TO USERWORD ///// ======== //////
function clickFunc(evt) {
  userWord = evt.target.innerText.slice(1); // need .slice method to eliminate space character
  if (userWord === goalWord) {
    alert('Welcome back' + '. ');
  } else {
    console.log('try again');
    createAttempt();
  }
  console.log(countCommonCharacters());
}

///// ======== ////// ATTEMPTS ///// ======== //////
function createAttempt() {
  switch (playerAttempts) {
    case 0:
      attempts.innerHTML = "Four attempts remaining. █ █ █ █";
      break;
    case 1:
      attempts.innerHTML = "Three attempts remaining. █ █ █<br>";
      break;
    case 2:
      attempts.innerHTML = "Two attempts remaining. █ █<br>";
      break;
    case 3:
      attempts.innerHTML = "!! Warning: Lock out pending !! █<br>";
      break;
    default:
      attempts.innerHTML = "This terminal has been locked.<br>Please contact your administrator.";
      break;
  }
  playerAttempts++;
}
