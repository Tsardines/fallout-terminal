# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable |
|---|---|
|Day 1: Tuesday | Game Idea|
|Day 2: Wednesday | Completed wireframes and prioritized features|
|Day 3: Thursday| Pseudocode|
|Day 4: Friday| Basic Clickable Model|
|Day 5: Saturday| Working Prototype|
|Day 6: Sunday| Game Completed / Slides|
|Day 7: Monday| Project Presentations|

## Project Description

I'm interested in recreating the hacking mini-game from the popular video game title, Fallout 3.

You're presented with four columns containing fifteen to seventeen rows each. Each row is populated by randomly generated characters and one randomly generated word, and there is one word per line. The words don't have a specific theme, but they all have the same amount of letters. For my version, each word will have six.

The computer will randomly pick one of those words to be its passcode, and you're given four attempts to click and select it. Upon making an incorrect choice you're told that: your answer was incorrect, and how many letters in your choice matched those in the right passcode. The start of the game shows the line "Four attempts remaining" with four blinking boxes next to it. By the time you're down to one more life, the line reads "One attempt remaining! Lock down pending" with one blinking box.

As an example, when the game begins the board is populated by rows, and each row contains one word. The game looks at those words and randomly selects the word "NIMBUS" as its passcode. If you select the word "RABIES", you're informed that 3/6 letters matched the answer.

After those four attempts, the computer regenerates the characters and words and has chosen a new passcode. So technically, it would be possible to play for many rounds without selecting the correct word.

In summation:

1. Win state: Select the correct word that the game chose to be the "goal word."
2. Lose state: Run out of attempts (4) to select the "goal word." 

In Fallout 3, unlocking the correct password means getting access to the computer that you're trying to hack. In my version of the mini-game, however, the only thing you can really win is the feeling of success.

Here's a screenshot from Fallout 3. The red boxes and text were not created by me, but they help illustrate the point about getting a certain amount of letters right.
![image](https://git.generalassemb.ly/storage/user/9432/files/57f9e028-1c63-11e8-8e86-7cf2f54ea161)

And here's a ![link](http://mitchellthompson.net/demos/terminal/) to a working recreation of the game. At some point in the future, I'd like my game to resemble this one.

## Priority Matrix

1. Important & urgent:
- Game logic:
  - Taking random words from words array
  - Taking random characters from chars array
  - Have program compare your selected with word to goal word
  - You select "CLEAR". The goal word is "ROACH." 
  - "Entry denied. 3/5 correct."
  - onClick event for selecting words

2. Important but not urgent:
 - Font and font size
 - Color scheme (amber)
 - User typing their first name on landing page
 - User's name reappearing on win page
 - Highlight a word/character on hover

3. Not important but urgent:
- Game logic:
  - Generate rowStarts from rowStarts array ( ["0xN0H3", "0xN0H4", "0xN0H2"] etc. )

4. Not important and not urgent:
- General CSS
  - Screen display
  - The computer monitor
  
## MVP

User will be able to:
  - Interact with the power button (start and reset game)
  - Input their name (landing page)
  - Click and select words from choices

## POST MVP

- Seeing characters between <> would either A. Replenish lives/attempts or B. Remove a bad word at random. This is not in the player instructions, so it would be up to them to stumble across it.
- Key clacks and beeping (i.e. error) sound effects
- Dictionary API
- Easy/Medium/Hard difficulty levels (hard = longer words)

## Wireframes

Include images of your wireframes.

## Game Components

### Landing Page

<img src="https://i.imgur.com/tWjUXoD.jpg" alt="alt text" width="200" height="400">


### Game Initialization

<img src="https://i.imgur.com/oIxpalm.jpg" alt="alt text" width="200" height="400">



<img src="https://i.imgur.com/O2nTwkp.jpg" alt="alt text" width="400" height="200">



### Playing The Game

1. The user will 

What will be the flow of the game, what will the user be expected to do and what will the user expect from the game

### Winning The Game
1. Win state: Select the correct word that the game chose to be the "goal word."
  - Computer clears and shows the text: "Welcome, [your name]."
2. Lose state: Run out of attempts (4) to select the "goal word." 
  - Computer clears and shows the text: "Terminal locked. Please contact your administrator."

### Game Reset
The user will be able to restart the game by clicking on the power dial at the bottom of the screen. Clicking it once turns the computer off and clicking it again will turn it back on.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

Priority Matrix: 1. Important & urgent 2. Important but not urgent 3. Not important but urgent 4. Not important and not urgent

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
