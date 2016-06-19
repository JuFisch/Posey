/* 

"Noun" pose
"Direction"-facing "noun"
"Verbing" "noun" pose
"Adjective" "noun" 


Random prefixes: "Extended" Reclined" "Half"
Random suffixes: "I" "II" "III"

*/


var nouns = [ 
  "chocolate",
  "asparagus",
  "teacup pig", 
  "cuttlefish",
  "firetruck",
  "beer bottle",
  "hipster",
  "centipede",
  "Republican",
  "Bernie Sanders",
  "puppy",
  "cheese",
  "starfish",
  "fish",
  "firefly",
  "drop bear",
  "cane toad",
  "kangaroo",
  "Australian",
  "plank"
];

var prefixes = [
  "extended",
  "half",
  "reclined",
  "one-legged",
  "head-to-knee",
  "revolved"
];

var suffixes = [
  "I",
  "II",
  "III",
];

var adjectives = [
  "chocolatey",
  "artisanal",
  "organic",
  "comatose",
  "supine",
  "buzzed",
  "bound",
  "planking",
  "naked",
  "fragrant",
  "windy",
  "trembling",
  "salty",
  "candy-coated",
  "tipsy",
  "sunburned",
  "overpaid",
  "disenfranchised",
];

var directions = [
  "downward",
  "upward",
  "eastward",
  "westward",
  "northward",
  "southward",
 ];


var words = {
	"noun": nouns,
	"prefix": prefixes,
	"suffix": suffixes,
	"adjective": adjectives,
	"verb": ["flying", "coding"],
};

var templates = [
	["noun"], 
	["adjective", "noun"],
	["verb", "noun"],
];

function getRandom(length) {
	var rando = Math.floor(Math.random() * 1000);
	return rando % length;
};

var sentence = [];

var templateindex = getRandom(templates.length);

var template = templates[templateindex];

if (Math.random() < 0.1) {
	//add to sentence one of the random prefix
	sentence.push(prefixes[getRandom(prefixes.length)]);
}

if (Math.random() < 0.1) {
	//add to sentence one of the random prefix
	sentence.push(directions[getRandom(directions.length)] + "-facing");
}
//iterate through template to make a random sentence
for (var i = 0; i < template.length; i++) {
	
	//figure out word type in template (randomly generated)
	var wordtype = template[i];

	//gets the list of corresponding types of words from words hash
	var wordlist = words[wordtype];

	//pick a random index to get a random word
	var wordindex = getRandom(wordlist.length);

	//get the random word
	sentence.push(wordlist[wordindex]);

}

if (sentence.length < 4 && Math.random() < 0.1) {
	//add to sentence one of the random prefix
	sentence.push("pose");
}

if (sentence.length == 1) {
	sentence.push("pose");
} 

console.log(sentence.join(" "));



