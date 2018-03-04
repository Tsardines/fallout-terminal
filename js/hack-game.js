var garbage = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", ";", "<", ">", "/", "?", "~",
",", ".", "|", "¡", "¢", "£", "¥", "§", "©", "®", "µ", "¶", "¿", "Ж", "Ʌ", "Г", "Д", "Ѱ", "ה",
"ॴ", "ᇸ", "ᛒ", "ᚼ"]; // fun fact: ᛒ(Bjarkan) + ᚼ(Hagall) = Bluetooth

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
"VERNIX","VORTEX","WAGONS","WHEEZE","WHISKY","WIRING","XYLEMS","SYLOID","WYVERN","YODELS","ZEBRAS","ZAPPER","ZEROES","ZEPHYR","ZOMBIE","HERNIA","HITMAN","GAOLER","CONGEE","FOGBOW"
];


var giantArray = []; // combination of var garbage and var words

var goalWord = ""; // word that the computer chose to be the "goal"  // STRING

var userWord = ""; // the current word that the user selected // STRING

var playerAttempts = 0; // how many past attempts the user has made


///// ======== ////// COMPUTER SCREEN ///// ======== //////




///// ======== ////// LANDING PAGES 1 AND 2 ///// ======== //////
var form = document.querySelector('.form')
form.addEventListener('submit', function(evt) {
  evt.preventDefault(); // will prevent the refresh from happening---form won't submit to another page
  var nameInputDOMElem = document.querySelector('.name');
  console.log(nameInputDOMElem.value);
});



///// ======== ////// GARBAGE CHARACTERS to GIANT ARRAY ///// ======== //////
let createGarbageElems = function() {
  var shuffledGarbage = shuffle(garbage);

  for (var i = 0; i <= 18; i++) {
    var singleTrash = document.createElement('span') // creating 'p' element, calling it singleTrash
    singleTrash.innerHTML = " " + shuffledGarbage[i]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElems();


var shuffledWords = shuffle(words); // randomly pick an index between 0 and 23

document.addEventListener("DOMContentLoaded", function(event) {
  createAttempt();

});


///// ======== ////// RANDOM WORDS, GIANT ARRAY ///// ======== //////
function createWordElems() {
  for (var i = 0; i <= 17; i++) {
    var singleWord = document.createElement('span') // creating 'p' element, calling it singleWord
    singleWord.innerHTML = " " + shuffledWords[i]; // setting the content of the first word

    singleWord.addEventListener("click", clickFunc); // set onClick event for word

    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleWord); // appending singleWord to giantArrayElement
  }
}
createWordElems();


///// ======== ////// GARBAGE CHARACTERS to GIANT ARRAY 2 ///// ======== //////
let createGarbageElemsTwo = function() {
  var shuffledGarbage = shuffle(garbage);
  for (var i = 12; i <= 31; i++) {
    var singleTrash = document.createElement('span') // creating 'p' element, calling it singleTrash
    singleTrash.innerHTML = " " + shuffledGarbage[i]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElemsTwo();


///// ======== ////// RANDOM WORDS, GIANT ARRAY 2 ///// ======== //////
function createWordElemsTwo() {
  for (var j = 12; j <= 29; j++) {
    var singleWord = document.createElement('span') // creating element, calling it singleWord
    singleWord.innerHTML = " " + shuffledWords[j]; // setting the content of the first word

    singleWord.addEventListener("click", clickFunc); // set onClick event for word

    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleWord); // appending singleWord to giantArrayElement
  }
}
createWordElemsTwo();


///// ======== ////// GARBAGE CHARACTERS to GIANT ARRAY 3 ///// ======== //////
let createGarbageElemsThree = function() {
  var shuffledGarbage = shuffle(garbage);

  for (var i = 18; i <= 36; i++) {
    var singleTrash = document.createElement('span') // creating element, calling it singleTrash
    singleTrash.innerHTML = " " + shuffledGarbage[i]; // setting the content of the first word
    var giantArrayElement = document.querySelector('.giant-array') // selecting .giant-array and storing it in var
    giantArrayElement.appendChild(singleTrash); // appending singleWord to giantArrayElement
  }
}
createGarbageElemsThree();


///// ======== ////// GOAL WORD ///// ======== //////
var giantArray;
var computerChoice = function() {
  goalWord = shuffledWords[Math.floor(Math.random() * 29)]; // use Math.random to get goal word
};

computerChoice();




///// ======== ////// USER WORD SELECTED and LETTERS CORRECT ///// ======== //////
function userWordHover() {
    var entryWord = document.createElement('span') // creating 'span' element
    entryWord.innerHTML = "test"; // setting the content of the first word

    entryWord.addEventListener("click", clickFunc); // set onClick event for word

    var panels = document.querySelector('.panels')
    screen.appendChild(entryWord);

}
userWordHover();

// create div, set id to word-entry
// have div reference goalWord
// call compare func to append result to div




///// ======== ////// COMPARING GOALWORD TO USERWORD ///// ======== //////
function clickFunc(evt) {
  if (evt.target.innerText.slice(1) === goalWord) { // need .slice method to eliminate space character
  alert('Welcome back' + '. ');
  } else {
  console.log('try again');
  createAttempt();
  }
}
clickFunc();



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
      attempts.innerHTML = "This terminal has been locked. Please contact your administrator.";
      break;
  }
  playerAttempts++;
}
