$(document).ready(function(){

var fullDeck;
var p1Deck;
var p2Deck;
var p1DeadPile;
var p2DeadPile;


function initialDeal(){
    // when the deck is clicked, it will shuffle and  deal 26 cards to each player
}

function draw(){
    // when player1 clicks on his deck, the top card from both decks will draw
}

function battle(){
    // will evaluate whoevers drawn card is higher and take both cards and put it in the winner's deadpile
}

function tieBreaker(){
    // occurs when the value of the cards are the same, both players draw 3 cards and then flips the 4th one over and that is the playing cards
    //function can repeat itself if the 4th card is a draw
}

var deck =[
    "2C", "2D", "2H", "2S",
    "3C", "3D", "3H", "3S",
    "4C", "4D", "4H", "4S",
    "5C", "5D", "5H", "5S",
    "6C", "6D", "6H", "6S",
    "7C", "7D", "7H", "7S",
    "8C", "8D", "8H", "8S",
    "9C", "9D", "9H", "9S",
    "9C", "9D", "9H", "9S",
    "10C", "10D", "10H", "10S",
    "JC", "JD", "JH", "JS", //JACK
    "QC", "QD", "QH", "QS", //QUEEN
    "KC", "KD", "KH", "KS", //KING
    "AC", "AD", "AH", "AS", //ACE
];

function assignValue(){ // assign value and images to cards (while still ordered)
        var i = 0;
        var value = 1;
        while (i < deck.length) {
            if (i%4 == 0){ //assigns a Card number value, making sure its every 4th
            value++;
            }
        deck[i].value = value;
        i++;
        }
}

function assignImg(){ // assigns images
        var i = 0;
        while (i < deck.length) {
        deck[i].img = img[i];
        i++;
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
}; // last one from doc rdy
