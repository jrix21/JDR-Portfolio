var jewelOne = 0
var jewelTwo = 0
var jewelThree  = 0
var jewelFour = 0
var randomNumber = ""
var yourTotal = 0
var wins = 0
var losses = 0


function startGame(){
	randomNumber = Math.floor(Math.random()*100);
	$(".random").html(randomNumber);
	
	$(".jewel").each(function(){
		$(this).attr("data-value", Math.floor(Math.random()*10+1));
	})
}

	$(".jewel").on("click", function(){
		console.log(this)
		var thisValue = $(this).attr("data-value");
		yourTotal = yourTotal + parseInt(thisValue);

		$(".totalscorenumber").html(yourTotal);


		if(yourTotal > randomNumber){
		losses++;
		alert("you lose");

		$(".losses").text("Losses: "+" "+losses);
		reset()
	}
		else if (yourTotal===randomNumber){
		wins++;
		alert("you win");
		$(".wins").text("Wins: "+" "+wins);
		reset();
		}
	});

	
function reset(){
	yourTotal=0;
$(".totalscorenumber").html(yourTotal);
console.log(yourTotal);
startGame()
}
startGame()