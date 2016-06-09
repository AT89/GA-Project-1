Notes
    This is representation of the War card game. I picked this game solely to get better with arrays since that is s
    foreign and new to me. I did get a little better with it but my HTML and CSS got a lot better (expect changes to the website soon!). User stories and wireframes are below. Most of my comments were made in the war.js. I found out that transitions were too much of a pain and I did not hae time for it; so instead I thought of a really cool and fun idea that will happen once you get into a tie or "War".

Technologies used:
    Fisher Yates shuffle https://bost.ocks.org/mike/shuffle/
    -This shuffle function allows simultaneously shuffling of the array inside the array. Making it faster to shuffle since it does not need to rearrange into another array.


User stories for War
    Basics:
    Deck consists of normal deck, 2-A, with suites H, D, C, S.
    Ace is the highest, suits dont matter
    each player (2 player) is dealt half of the deck, 26 cards
    As a player, I want to be able to click on the card and the card draws the top card
    When a player draws a higher card, they take the other players card and theirs and puts it at the bottom of their deck
    A player loses when they have no more cards
    When a draw occurs, each player deals 3 cards face down and flips over the 4th card, the winner takes all the cards
        When a player has less than 4 cards, they will have their showing card the last card
    Animations for all the actions
    Winner/Loser declarations animated in the middle
    DEAD/Discard pile and LIVE pile of cards or have it shuffle everytime?

    Cool:
    I want to see really cool animations
    Reset button
    Add a life bar
    Add announcements like "KILLING SPREE" for 3 kills

    VERY COOL:
    Make the anime style cross epic explosion stuff (button that toggles it off or only on draws)
    Add functionality for 3+ players.
    Fire on the cards after KILLING SPREE is triggered


    SUPER FRICKIN COOL:
    Add character classes, special abilities like "No draws, 2 wins, each victory take 2 but each loss lose 2"
    Pokemon suprise mode


Wireframe:
App uses full window
Deck in the middle
fast animation or make it look like the cards are being dealt.
Can have the picture of the card on the lower right (can have cool pics), opponent on top left
