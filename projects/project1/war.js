var fullDeck;
var p1Deck;
var p2Deck;
var p1Active;
var p2Active;

var deck = [];
assignValue(); //first assign values and images
shuffle(deck); //shuffle the deck (create button later)
initialDeal(); //deals 26 to each player
draw();

function assignValue(){ // assign value and images to cards (while still ordered)
            var value = 0;
            for (i = 1; i < 53; i++){
            var card = {}
            card.value = value; //how to create object property for value
            if (i%4 === 0){
                value++;
            }
            card.img = "cards/" +i+ ".png";
            deck.push(card);
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

function initialDeal(){
    // when the deck is clicked, it will shuffle and  deal 26 cards to each player
    p1Deck = deck.slice(0, 26);
    p2Deck = deck.slice(26, 52);
    return [p1Deck, p2Deck];
}

function draw(){
    // when player1 clicks on his deck, the top card from both decks will draw
    while (p1Deck.length > 0 || p2Deck.length > 0){ //WRONG SYNTAX
        p1Active = p1Deck[0];
        p2Active = p2Deck[0];
        console.log("p1 card is "+ p1Active.value +" and p2 card is "+ p2Active.value +".");
        return p1Active, p2Active;
    }
}

function battle(){
    // will evaluate whoevers drawn card is higher and take both cards and put it in the winner's deadpile
    if (p1Active.value === p2Active.value){
        tieBreaker();
    }
    if (p1Active.value > p2Active.value){ //p1 wins
        console.log("p1 wins");
    }
    else if (p1Active.value < p2Active.value){ //p2 wins
        console.log("p2 wins");
    }
}

function deadPileDeal(){
    //deal the deadpile into hand
}

function tieBreaker(){
    // occurs when the value of the cards are the same, both players draw 3 cards and then flips the 4th one over and that is the playing cards
    //function can repeat itself if the 4th card is a draw
}
