var gotWords= ['luffy','zoro', 'sanji','ussopp','robin','franky','brook','chopper','nami','carrot','jinbei','vivi'];


 // Creating variables to hold the number of wins, losses. They start at 0.
    var wins = 0;
    var losses = 0;
    var numGuesses = 8;
    var wordLength = [];
    var numBlanks = 0;
	var blanksAndSuccesses = [];
	var wrongGuesses = [];
	var chosenWord = "";
	var startImage = "";



// The start game function will take the variables set and RESET them when starting a new game
function startGame(){ 
	// reset the value of numGuesses to 8 on the start of a new game
	numGuesses = 8;

	// taking the chosenWord and getting the length 
	chosenWord = gotWords[Math.floor(Math.random()*gotWords.length)];
	console.log(chosenWord); 

	// Spliting the chosen work into individual letters
	wordLength = chosenWord.split("");
	console.log(wordLength);

	// counting the number of letters in the word 
	numBlanks = wordLength.length;
	console.log(wordLength);

	// resetting the blanksAndSuccesses
	blanksAndSuccesses = [];

	// resetting the wrongGuesses
	wrongGuesses = [];

	startImage = document.getElementById("screenshot").src="Assets/Images/strawhatlogo.png";

	// filling the blanksAndSucesses list with the appropriate number of blanks
	for(var i=0; i<numBlanks;i++){
		blanksAndSuccesses.push("_");
	}

	// writing the items we reset in this function to your HTML
	document.getElementById("lives").innerHTML = numGuesses;
	document.getElementById("underlines").innerHTML = blanksAndSuccesses.join("");
	document.getElementById("wrongletters").innerHTML = wrongGuesses.join("");
}


// 
function checkLetters(letters){
	var lettersInWord = false;
	for(var i=0; i<numBlanks;i++){
		if (chosenWord[i]===letters){
			lettersInWord = true;
		}
	}
	if (lettersInWord) {
		for (var j = 0; j < numBlanks; j++) {
    		if (chosenWord[j] === letters) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
     	 	blanksAndSuccesses[j] = letters;
    			}
  		}
// start here 
console.log(blanksAndSuccesses);

	}
	else {
   
    wrongGuesses.push(letters);
    numGuesses--;
  }
} 

function roundComplete(){
	document.getElementById("lives").innerHTML = numGuesses;
	document.getElementById("underlines").innerHTML = blanksAndSuccesses.join("");
	document.getElementById("wrongletters").innerHTML = wrongGuesses.join("");

	if (wordLength.toString() === blanksAndSuccesses.toString()){
		wins++;
		document.getElementById("wins").innerHTML = wins;
		startGame();
	}
	else if (numGuesses===0){
		losses++;
		document.getElementById("losses").innerHTML = losses;
		startGame();
}
}
startGame();

//*record the keys the user pressed. THE VAR "USERGUESS" IS A LOCAL VARIABLE NOT A GLOBAL!!!) 

startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};




document.onkeypress = function(images){ 
    if(numGuesses===1){
		alert("BlackBeard and his crew have arrived. You've Been Defeated.");
		startGame();
		}
}