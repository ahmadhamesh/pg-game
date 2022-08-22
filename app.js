/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 20 points on GLOBAL score wins the game

*/




var score, roundScore, activePlayer, gameplaying;


init();


 document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gameplaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
    //2.display the result 
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


    //3. Update the round score IF the rolled number was not a 1
        if (dice !== 1) {   //type cohersion !==
            //add the number
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
           nextPlayer();
            
        }
 	}

 });




 document.querySelector('.btn-hold').addEventListener('click', function() {

   
    if (gameplaying) {
        //add current score to the GLOBAL score
    score[activePlayer] += roundScore;


    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    //check if the player win the game
    if (score[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
        gameplaying = false;        
    } else{
        nextPlayer();
         }          
    } 
    
 });



    //Impelement the function for next player to use upside
    function nextPlayer() {
        //next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;   //ternary operator 
            roundScore = 0;


            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            // document.querySelector('player-0-panel').classList.remove('active');
            // document.querySelector('player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display = "none";

    }

    document.querySelector('.btn-new').addEventListener('click', init);

    function init() {
        score = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gameplaying = true;


        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //to remove the player win and start from plalyer 1 again
        document.getElementById('name-0').textContent = 'player-1';
        document.getElementById('name-1').textContent = 'player-2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

    }











