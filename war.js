var fullDeck;
var p1Deck = [];
var p2Deck = [];
var p1Active;
var p2Active;
var gameInProgress = true;
var prize = [];
var deck = [];
var p1Spree = 0;
var p2Spree = 0;
var pokeIcons = [];
// var p1Name = prompt("Player 1 (red, bottom) Name?");
// var p2Name = prompt("Player 2 (blue, top) Name?"); //will revisit this when i can save to cookies, then make a reset button
p2Name = "Blue";
p1Name = "Red";
var pokemonMode = true;
var PokeActive1;
var PokeActive2;
var pokeFirst = true;


assignValue(); //first assign values and images
pokeImage(); //generate the image of the pokemon
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
    }
}
function pokeImage(){
    //makes an array with object of images corresponding to the filenames
    for (i = 1; i < 650; i++){
        var poke = {}
        poke.img = "pokemon/icons/"+i+".png";
        pokeIcons.push(poke);
    }
    return pokeIcons;
};

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
            p1Deck.push(array[counter]);
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
    if (p1Deck.length === 0){ //if p1 has no cards, p2 wins
        alert(p2Name+" Wins the game")
        return gameInProgress = false;
    }
    if (p2Deck.length === 0){ //if p2 has no cards p2 lose
        alert(p1Name+" Wins the game")
        return gameInProgress = false;
    }
    while (gameInProgress && (p1Deck.length > 0 || p2Deck.length > 0)){
        p1Active = p1Deck[0];
        p2Active = p2Deck[0];

                t = Math.random(1);
                y = Math.floor(t * 649);

                t2 = Math.random(1);
                y2 = Math.floor(t2 * 649);

            PokeActive1 = pokeIcons[y];
            PokeActive2 = pokeIcons[y2];

        console.log("p1 card.value is "+ p1Active.value +" and p2 card.value is "+ p2Active.value +".");
        $("#p1CardImg").attr("src", p1Active.img); //show p1Active card
        $("#p2CardImg").attr("src", p2Active.img);
        $("#p2PokeIcon").attr("src", PokeActive2.img )
        $("#p1PokeIcon").attr("src", PokeActive1.img )
        return [p1Active, p2Active];
    }
}

function battle(){
        // will evaluate whoevers drawn card is higher and take both cards and put it in the winner"s deadpile
        if (p1Active.value === p2Active.value){
            tieBreaker();
            if (pokemonMode === true){
                pokeMode(); //GOTTA CATCH EM ALL
            }
        }
        if (p1Active.value > p2Active.value){ //p1 wins
            console.log("p1 wins round");
            showWinner(p1Name); //splash win p1
            // empty out active card slots and place it at end of p1Deck
            p1Deck = p1Deck.concat(p1Active, p2Active);
            p1Deck.splice(0,1);
            p2Deck.splice(0,1);
            p1Spree++;
            p2Spree = 0;
                if (prize.length > 0){ //if there is an array in the prize, give it to winner!
                    p1Deck = p1Deck.concat(prize);
                    prize.splice(0,52); //splice the whole array to account for multiple war scenarios
                    createPrize();
                    p1Spree++;
                    p2Spree = 0;
                }
        }
        else if (p1Active.value < p2Active.value){ //p2 wins
            console.log("p2 wins round");
            showWinner(p2Name); //splash win p2
            // same thing as above but for p2Deck
            p2Deck = p2Deck.concat(p2Active, p1Active);
            p1Deck.splice(0,1);
            p2Deck.splice(0,1);
            p2Spree++;
            p1Spree = 0;
                if (prize.length > 0){
                    p2Deck = p2Deck.concat(prize);
                    prize.splice(0,52);
                    createPrize();
                    p2Spree++;
                    p1Spree = 0;
                }
        }

}
function tieBreaker(){
    console.log("WAR!!!!!!!!")
    WarAnnounce();
    var p1Prize = [];
    var p2Prize = [];
    prize = prize.concat(p2Active, p1Active);
    p1Deck.splice(0,1);
    p2Deck.splice(0,1);
    p1Prize = p1Deck.splice(0,3);
    p2Prize = p2Deck.splice(0,3);
    prize = prize.concat(p1Prize, p2Prize);
    shuffle(prize); //shuffle prize pile (turned this off to check if correct arrays stored/given)
    createPrize();
    return prize;
}

function p1CreateHand(){ //create the hand on the bottom rows (for each respective), use a different image on pokemonMode.. could have been a DRY
    i = 0;
    while (i < p1Deck.length){
        if (pokemonMode === false){
            $("#p1Holder").append("<div class='p1Hand'> <img class='card' src='pokemon/pokeball.png'/></div>");
            i++;
        }
        else{
            $("#p1Holder").append("<div class='p1Hand'> <img class='card' src='Zredback.png'/></div>");
            i++;
        }
    }
}
function p2CreateHand(){
    i = 0;
    while (i < p2Deck.length){
        if (pokemonMode === false){
            $("#p2Holder").append("<div class='p2Hand'> <img class='card' src='pokemon/pokeball.png'/></div>");
            i++;
        }
        else{
            $("#p2Holder").append("<div class='p2Hand'> <img class='card' src='Zblueback.png'/></div>");
            i++;
        }
    }
}

function createPrize(){
    i = 0;
    $("#prizeHolder").html("");
    while (i < prize.length){
        if (pokemonMode === false){
            $("#prizeHolder").append("<div class='prize'><img class='cardP' src='pokemon/pokeball.png'/></div>");
            i++
        }
        else{
            $("#prizeHolder").append("<div class='prize'><img class='cardP' src='Zredback.png'/></div>");
            i++
        }
    }
}

function spreeCheck(){ //win combos announcements...To do later when I learn cooler transition effects (plan to take animations from pokemon moves and randomize which ones come out)
    if (p1Spree > 3){
        // P1 IS ON A SPREE
        console.log("P1 IS ON A SPREE");
    }
    if (p2Spree > 3){
        // P2 IS ON A SPREE
        console.log("P2 IS ON A SPREE");
    }
}

function pokeMode(){
    $("#p1Holder").html(""); //clears the hand viewer so it can rebuild based off current length
    $("#p2Holder").html("");
    console.log("hand cleared");
    //PLAY POKEMON BATTLE THEME
    //play pokemonbattletheme mp3
    var audio = new Audio("pokemon/battle.mp3");
    audio.play();
        //use a fade (marquee whole page scroll?) for 3 seconds
    setTimeout(function(){
        $("body").addClass("color");
    }, 500);
     setTimeout(function(){
        $("body").removeClass("color");
    }, 1000);
    setTimeout(function(){
        $("body").addClass("color");
    }, 2000);
    setTimeout(function(){
        $("body").removeClass("color");
    }, 3000);



    setTimeout(function(){
    //do replacing functions
        //replace h1 with logo
        $("div.header1").replaceWith("<div class='header1'><img src='pokemon/logo.gif'/></div>");
        //Pokemon icons pokemon class remove hidden or remove opacity
        //below doesnt work.. due to the nature of how these cards are created
        $("#p1PokeIcon").removeClass("hidden");
        $("#p2PokeIcon").removeClass("hidden");
        //pokemon class replace cardback with pokeball
        $("img.pokemon").replaceWith("<img src='pokemon/pokeball.png'/>");
        $("img.cardP").replaceWith("<img class='cardP' src='pokemon/pokeball.png'/>");
    }, 3500);
    setTimeout(function(){
        $("body").addClass("image");
   }, 3500);
    pokemonMode = false;
}
function showWinner(nameOfWinner){
    $("#winAnnounce").html(nameOfWinner + " wins!").addClass("showAnnounce");
    setTimeout(function(){
        $("#winAnnounce").removeClass("showAnnounce");
    }, 2000);
}
function WarAnnounce(){
    $("#winAnnounce").html("Gotta Catch em all!").addClass("showAnnounce");
    setTimeout(function(){
        $("#winAnnounce").removeClass("showAnnounce");
    }, 4000);
}

$("#p1Deck, #p2Deck").on("click", function(){ //just thought about using 2 selectors using a comma..
    if (gameInProgress === true){
        $("#p1Holder").html(""); //clears the hand viewer so it can rebuild
        $("#p2Holder").html("");
        draw();
        battle();
        p1CreateHand();
        p2CreateHand();
        spreeCheck();
        $("#scoreHolder").html(p2Name+": "+p2Deck.length+"</br>"+p1Name+": "+p1Deck.length+"</br> Prizes: "+prize.length);
    }
    else{
        alert("Game Over, Refresh (alt+r) to play again!");
    }
});
