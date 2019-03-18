// document .ready to start the functions after the DOM is ready
$(document).ready(function(){

    // Variables for Game
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    var magicnumber;
    var crystal1num;
    var crystal2num;
    var crystal3num;
    var crystal4num;

    //Random # Generator for each crystal and the magic number

    function newNumbers(){
        magicnumber = Math.floor (Math.random() * 120) + 19;
        crystal1num = Math.ceil (Math.random() * 12);
        crystal2num = Math.ceil (Math.random() * 12);
        crystal3num = Math.ceil (Math.random() * 12);
        crystal4num = Math.ceil (Math.random() * 12);
        
    };
    
    //Function New Game that generates the numbers and total score is set to 0

    function newGame(){
        newNumbers();
        totalScore=0;
        $("#magicNumber").text(magicnumber);
        $("#totalscore").text(totalScore);
        $("#crystal1").attr("data-crystalvalue", crystal1num);
        $("#crystal2").attr("data-crystalvalue", crystal2num);
        $("#crystal3").attr("data-crystalvalue", crystal3num);
        $("#crystal4").attr("data-crystalvalue", crystal4num);
        $("#wins").text(wins);
		$("#losses").text(losses);
        $("#winOrLose").text("");

        //console log to check for functionality
        console.log (crystal1num, crystal2num, crystal3num, crystal4num);
    };
    
    //Function if You Win
    function youWin() {
       $("#winorlose").text("You WIN!");
        wins++;
        $("#wins").text(wins);
    }    

    // Function if You Lose
    function youLose(){
        $("#winorlose").text("You LOSE!");
        losses++;
        $("#losses").text(losses);
    }
 
    //call new game
    newGame();

    //Create a hover effect over the crystals, making them buttons

    $(".crystalimage").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

    //Function adds the values of the crystals together and creates an on.click for the crystals to be selected

    $(".crystalimage").on("click", function(){
        if (totalScore >= magicnumber){
            return;
        }

        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        totalScore+= crystalValue;
        $("#totalscore").text(totalScore);

        if (totalScore===magicnumber){
            youWin();
        }
        else if(totalScore>magicnumber){
            youLose();
        }
    });

    //Function on.click for the play again button and resets the game. 

    $(".btn").on("click", function(){
        newGame();
    });
    

    
});










