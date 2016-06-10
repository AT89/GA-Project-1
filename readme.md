##Notes
     Play at Full screen
     Play this game until you get a 'tie'
     start by clicking on the "active card" for blue (the card near top) or red (the card near bottom)

     This is representation of the War card game. I picked this game solely to get better with arrays since that is s
     foreign and new to me. I did get a little better with it but my HTML and CSS got a lot better (expect changes to the website soon!). User stories and wireframes are below. Most of my comments were made in the war.js. I found out that transitions were too much of a pain and I did not hae time for it; so instead I thought of a really cool and fun idea that will happen once you get into a tie or "War".

#Aproaches/Milestones:
##M1 - Logic and javascript

     Get the logic in order and do the basic javascript. I broke down basic functions of the game in pseudo-code and then built the code to finish the function, then connect the functions. I used console.log to test out the functions and looked into the array.
        These were my Psuedo-code comments:
              - How to make the deck of cards
              - How to randomize the arrays
              - How to deal the cards
              - How to store the suiteless value of the card
              - How to store the image or make the representation of the card
              - How to evaluate the card values of Player 1 and Player 2
                  - how to add won cards into the each players deck
                  - Do I want to use a discard pile and shuffle and then add it back in once hand is empty?
              - How to handle ties (WAR)
                    - How to handle ties within a ties
                          - How to handle ties within a tie when Player 1 or 2 has less than 4 cards
              - How to end the game

##M2 - Basic CSS and html
     - I wanted to display the cards in a nice symmetrical fashion
     - HP bar-esque hands, wanted the cards to stack
     - Flex boxes
     - Click the 'card' to draw and evaluate the card.values
     - Wanted to show the prize cards after "War"
     - Active cards of p1 and p2 in the middle

##M3 - Goodies
     - Wanted to add a fun mode
     - I like surprises
      - Time the surprises on the drop of the mp3 (~3seconds)
      - Change classes on a certain event such as: the first War but not repeating it again
     - Basic animations/transitions
     - Theme music and extra hidden (then unhidden after event) pictures
     - Add transitions

#SO MUCH I WANT TO DO.
##Up to now, my proudest moment was being able to realize that I can do anything as long as I put my mind to it. My War game went pretty well. I want to continue to develop and add more features. These are my thoughts.

#Future Plans..
##Make it one player.
	-Add Bosses as Opponents
	-They can have Types/Gyms
	-Shops

##specifically to Poke mode
	-all changes on the page to hit all at once, preferably 3500ms. 		-Seems to be Good. I can probably add to it by making sure:
		-Turn off mouse click after WAR event, so players can’t draw 			again
	-object elements to be Types. Type weaknesses evaluate winner

##stretch goals
	-Make my own fonts
	-Make my own BG
	-Work PHP into it, login, cookies
	-Evolving or other games (Overwatch sketches?) or whatever
	incorporated
	-Work on mobile
	-Holiday theme (July 4th, eagles with sunglasses?) // levels?
	-Make it set to only Pokemon that are evolving as wins	progresses.
##Autoplay Button, with speed increment slider
##Infinite
	-counts wins rather than cards
	-just shuffle the win pile array, add more cards, build another array

Can learning how to make the site save to cookies (from what you guys recommended) or have a login (ruby on rails, php) ?

##Web Developer Goals..
		-SASS
		-Mobile

#Technologies used:

      - Fisher Yates shuffle https://bost.ocks.org/mike/shuffle/
        - This shuffle function allows simultaneously shuffling of the array inside the array. Making it faster to shuffle since it does not need to rearrange into another array.

      - JQuery <3

      - ALOT of stackoverflow

      - Pokemon, Pocket Monsters, Nintendo, Game Freak

      - my amazing WDI instructors: Adrian, Jesse, Robin - for being available on Slack, in person


#User stories for War
////////////////////////// initial writeup below //////////////////////
##Basics:
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
    DEAD/Discard pile and LIVE pile of cards or have it shuffle everytime? (maybe)

##Cool:
    I want to see really cool animations
    Reset button
    Add a life bar
    Add announcements like "KILLING SPREE" for 3 kills

##VERY COOL:
    Make the anime style cross epic explosion stuff (button that toggles it off or only on draws)
    Add functionality for 3+ players.
    Fire on the cards after KILLING SPREE is triggered


#SUPER FRICKIN COOL:
    Add character classes, special abilities like "No draws, 2 wins, each victory take 2 but each loss lose 2"
    Pokemon suprise mode


#Wireframe:
App uses full window
Deck in the middle
fast animation or make it look like the cards are being dealt.
Can have the picture of the card on the lower right (can have cool pics), opponent on top left
