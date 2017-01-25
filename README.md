# Address Book

#### Epicodus Intro Week 4 Lab

#### By Andrew Devlin, Carlos Munoz Kampff

## Description

Follow Bank Account lab with business logic using classes and multiple object data entry

## Setup/Installation Requirements
* Clone project
* Open index.html

## See this page on GitHub.io
[https://bseaver.github.io/pig-dice/](https://bseaver.github.io/pig-dice/)
[https://elmunoz42.github.io/pig-dice/](https://elmunoz42.github.io/pig-dice/)

## Known Bugs
* No known bugs

## Support and contact details
* No support

## Technologies Used
* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap
* git

## Copyright (c)
* 2017  Andrew Devlin, Carlos Munoz Kampff

## License
* MIT

## Specifications
Objective: Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

|Desired Behaviour | Input Example | Output Example |
|:---------------|:-----------:|---------------:|
|1)When "roll" button is pressed by Player One or Player Two, it will produce a random number 1  and the score of O is displayed in the respective score board.| press "roll" | diceRoll=1 turnTally=0 |
|2)When PlayerOne rolls 1 and 6 the score gets updated and they get to play gain or loose their turn and the turnTally gets updated.| roll: 3 | turnTally = 3 |
|3)When PlayerOne rolls again it updates the tally. | roll: 3 and a 6 | turnTally = 9|
|4)When player presses hold the turnTally is added the gameScore. | roll: 3 and a 6 press: hold | gameScore = 9.|

* End specifications
