var fullDeck;
var p1Deck = [];
var p2Deck = [];
var p1Active;
var p2Active;
var gameInProgress = true;
var prize = [];
var deck = [];
var p1Spree;
var p2Spree;

assignValue(); //first assign values and images
shuffle(deck); //shuffle the deck (create button later)
initialDeal(); //deals 26 to each player
// stackedDeal(deck); //intiate stackedDeal (alt deal), turn off initial deal and shuffle for this to work


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
    p1Deck = deck.slice(0, 26);
    p2Deck = deck.slice(26, 52);
    return [p1Deck, p2Deck];
}

function draw(){
    // when player1 clicks on his deck, the top card from both decks will draw
    if (p1Deck.length === 0){ //if p1 has no cards, p2 lose
        console.log("p2 Wins the game")
        gameInProgress = false;
    }
    if (p2Deck.length === 0){ //if p2 has no cards p2 lose
        console.log("p1 Wins the game")
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
    if (gameInProgress = true){
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
                if (prize.length > 0){
                    p1Deck = p1Deck.concat(prize);
                    prize.splice(0,52);
                    createPrize();
                    p1Spree++;
                    p2Spree = 0;
                }
        }

        else if (p1Active.value < p2Active.value){ //p2 wins
            console.log("p2 wins round");
            // same thing as above but for p2Deck
            p2Deck = p2Deck.concat(p2Active, p1Active);
            p1Deck.splice(0,1);
            p2Deck.splice(0,1);
                if (prize.length > 0){
                    p2Deck = p2Deck.concat(prize);
                    prize.splice(0,52);
                    createPrize();
                    p2Spree++;
                    p1Spree = 0;
                }
        }

    }
}


function tieBreaker(){
    console.log("WAR!!!!!!!!")
    var p1Prize = [];
    var p2Prize = [];
    prize = prize.concat(p2Active, p1Active);
    p1Deck.splice(0,1);
    p2Deck.splice(0,1);
    p1Prize = p1Deck.splice(0,3);
    p2Prize = p1Deck.splice(0,3);
    prize = prize.concat(p1Prize, p2Prize);
    shuffle(prize); //shuffle prize pile (turned this off to check if correct arrays stored/given)
    createPrize();
    return prize;
}

function p1CreateHand(){
    i = 0;
    while (i < p1Deck.length){
        $("#p1Holder").append("<div class='p1Hand'></div>")
        i++;
        }
}
function p2CreateHand(){
    i = 0;
    while (i < p2Deck.length){
        $("#p2Holder").append("<div class='p2Hand'></div>")
        i++;
        }
}
function createPrize(){
    i = 0;
    if (i < prize.length){
        $("#prizeHolder").append("<div class='prize'></div>")
        i++
    }
    else{
        $("#prizeHolder").html('');
    }
}

function spreeCheck(){ //win combos announcements
    if (p1Spree > 3){
        // P1 IS ON A SPREE
        console.log("P1 IS ON A SPREE")
    }
    if (p2Spree > 3){
        // P2 IS ON A SPREE
        console.log("P2 IS ON A SPREE")
    }
}


$("#p1Deck").on("click", function(){
    $('#p1Holder').html(''); //clears the hand viewer
    $('#p2Holder').html('');
    draw();
    battle();
    p1CreateHand();
    p2CreateHand();
    spreeCheck();
    console.log("PLAY");

});
