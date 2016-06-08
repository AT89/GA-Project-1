var fullDeck;
var p1Deck = [];
var p2Deck = [];
var p1Active;
var p2Active;
var gameInProgress = true;

var deck = [];
assignValue(); //first assign values and images
shuffle(deck); //shuffle the deck (create button later)
initialDeal(); //deals 26 to each player
// stackedDeal(deck); //intiate stackedDeal (alt deal), turn off initial deal and shuffle for this to work

function play(){
    draw();
    battle();
}

function assignValue(){ // assign value and images to cards (while still ordered)
            var value = 0;
            for (i = 1; i < 53; i++){
            var card = {} //build an object to store value
            card.value = value; //how to create object property for value
            if (i%4 === 0){
                value++;
            }
            card.img = "cards/" +i+ ".png";
            deck.push(card); //push the card objects (value and image )to the deck
            console.log(card);
        }
}

function shuffle(array) { //credits to Fisher Yates shuffle https://bost.ocks.org/mike/shuffle/
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function stackedDeal(array){ //function to test out 2 even decks (to test out tiebreaker) use every 2n to deal 2 to p1 and 2 to p2 alernating
    var m = array.length;
    counter = 0;
    while (counter < m){
        if (counter%2 === 0){
            p1Deck.push(array[counter]); //says p1Deck.append is not a function
            counter++;
        }
        else {
            p2Deck.push(array[counter]);
            counter++;
        }
    }
    return [p1Deck, p2Deck]
}



function initialDeal(){
    // when the deck is clicked, it will shuffle and  deal 26 cards to each player
    p1Deck = deck.slice(0, 26);
    p2Deck = deck.slice(26, 52);
    return [p1Deck, p2Deck];
}

function draw(){
    // when player1 clicks on his deck, the top card from both decks will draw
    if (p1Deck.length === 0){ //if p1 has no cards, p2 lose
        console.log("p1 Wins the game")
        gameInProgress = false;
    }
    if (p2Deck.length === 0){ //if p2 has no cards p2 lose
        console.log("p2 Wins the game")
        gameInProgress = false;
    }
    while (gameInProgress && (p1Deck.length > 0 || p2Deck.length > 0)){
        p1Active = p1Deck[0];
        p2Active = p2Deck[0];
        console.log("p1 card is "+ p1Active.value +" and p2 card is "+ p2Active.value +".");
        $("#p1CardImg").attr("src", p1Active.img); //show p1Active card
        $("#p2CardImg").attr("src", p2Active.img); 
        return [p1Active, p2Active];
    }
}

function battle(){
    // will evaluate whoevers drawn card is higher and take both cards and put it in the winner's deadpile
    if (p1Active.value === p2Active.value){
        tieBreaker();
    }
    if (p1Active.value > p2Active.value){ //p1 wins
        console.log("p1 wins round");
        // empty out active card slots and place it at end of p1Deck
        p1Deck = p1Deck.concat(p1Active, p2Active);
        p1Deck.splice(0,1);
        p2Deck.splice(0,1);
    }
    else if (p1Active.value < p2Active.value){ //p2 wins
        console.log("p2 wins round");
        // same thing as above but for p2Deck
        p2Deck = p2Deck.concat(p2Active, p1Active);
        p1Deck.splice(0,1);
        p2Deck.splice(0,1);
    }
}

function tieBreaker(){
    console.log("WAR!!!!!!!!")
    tieRound = 1; // this variable represents the number of tie rounds.. in case it goes into tie again
    cardNum = 4;
    var maxNumberOfRounds = 13; // fail safe to stop it from infinite looping
        while(tieRound < maxNumberOfRounds){
                if (p1Deck.length < 4) { //whoever has less than 4 cards on tie breaker loses
                    console.log("P1 is defeated");
                    gameInProgress = false;
                    break
                }
                if (p2Deck.length < 4)  {
                    console.log("P2 is defeated");
                    gameInProgress = false;
                    break
                }

                i = tieRound * cardNum; //i will be 4th card position first tie, 8th next tie. Kept it as i variable so we can keep track of how much to splice
                var p1 = p1Deck[i-1].value; //i-1 to acount for position 1 being 0. still the 4th card.
                var p2 = p2Deck[i-1].value;
                if (p1 === p2){ //tie in a tie breaker..
                    tieRound++; //tie rounds counter
                // occurs when the value of the cards are the same, both players draw 3 cards and then flips the 4th one over and that is the playing cards
                //function can repeat itself if the 4th card is a draw
                    if (p1.value > p2.value){ //p1 wins tie breaker
                        var winCards = [];
                        winCards.push(p1Deck.splice(0,i));
                        wincards.push(p2Deck.splice(0,i));
                        p1Deck.push(winCards);
                        break
                    }
                    if (p1.value < p2.value){ //p2 wins tie breaker
                        var winCards = [];
                        winCards.push(p1Deck.splice(0,i));
                        wincards.push(p2Deck.splice(0,i));
                        p2Deck.push(winCards);
                        break //code hangs atm, trace where its stuck, by placing console.logs
                    }
            }
        }
    }
function p1CreateHand(){
    i = 0;
    while (i < p1Deck.length){
    $("#p1Holder").append("<div id='p1Hand'></div>")
    i++;
    }
}
function p2CreateHand(){
    i = 0;
    while (i < p2Deck.length){
    $("#p2Holder").append("<div id='p2Hand'></div>")
    i++;
    }
}

$("#p1Deck").on("click", function(){
    $('#p1Holder div').html(''); //clears the hand viewer
    $('#p2Holder div').html('');
    draw();
    battle();
    p1CreateHand();
    p2CreateHand();
    console.log("PLAY");
});
