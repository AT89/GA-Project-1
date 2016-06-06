var fullDeck;
var p1Deck;
var p2Deck;
var p1DeadPile;
var p2DeadPile;

var deck = [];
assignValue(); //first assign values and images
shuffle(deck); //shuffle the deck (create button later)
initialDeal(); //deals 26 to each player


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
    var p1Deck = deck.slice(0, 26);
    var p2Deck = deck.slice(26, 52);
    return [p1Deck, p2Deck];
}

function draw(){
    // when player1 clicks on his deck, the top card from both decks will draw
    while (p1Deck.length > 0 || p2Deck.length > 0){ //WRONG SYNTAX
        var p1Active = p1Deck[0];
        var p2Active = p2Deck[0];
        return p1Active, p2Active;
    }
}

function battle(){
    // will evaluate whoevers drawn card is higher and take both cards and put it in the winner's deadpile
    if (p1Deck.value[0] === p2deck.value[0]){
        tieBreaker();
    }
    if (p1Deck.value[0] > p2deck.value[0]){ //p1 wins

    }
    else if (p1Deck.value[0] < p2deck.value[0]){ //p2 wins
    }
}

function deadPileDeal(){
    //deal the deadpile into hand
}

function tieBreaker(){
    // occurs when the value of the cards are the same, both players draw 3 cards and then flips the 4th one over and that is the playing cards
    //function can repeat itself if the 4th card is a draw
}
