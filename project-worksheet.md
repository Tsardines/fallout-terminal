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

I'm interested in recreating the hacking mini-game from the popular video game Fallout 3.

You're presented with four columns containing fifteen to seventeen rows each. **Each row is populated by randomly generated characters** and **randomly generated words,** and the latter are are displayed in various places (not limited to one per line). The words don't have a specific theme, but **they all have the same amount of letters**. For my version, each word will have six.

The computer will **randomly pick one of those words to be its passcode,** and you're given **four attempts to guess which one it is.** Upon making an incorrect choice you're told that: your answer was incorrect, and **how many letters in your choice matched those in the right passcode** (x/y, with x being how many letters matched the goal word and y being the word length). The **start of the game** shows the line **"Four attempts remaining"** with four blinking boxes next to it. By the time you're down to one more life, the line reads "One attempt remaining! Lock down pending" with one blinking box.

After those four attempts, aka game over, the computer **regenerates the characters and words** and has **chosen a new passcode.** So technically, it would be possible to play for many rounds without winning.

In summation:

1. **Win state:** Select the correct word that the game chose to be the "goal word."
2. **Lose state:** Run out of attempts (4) to select the "goal word." 

In Fallout 3, unlocking the correct password means getting access to the computer that you're trying to hack. In my version of the mini-game, however, the only thing you can really win is the feeling of success.

Here's a screenshot from Fallout 3.
<img src="https://i.ytimg.com/vi/1iM12XyQPJE/maxresdefault.jpg" alt="alt text">

And here's a ![link](http://mitchellthompson.net/demos/terminal/) to a working recreation of the game. At some point in the future, I'd like my game to resemble and behave like this one.

## Priority Matrix

**1. Important & urgent:**
- Game logic:
  - Taking random words from words array
  - Taking random characters from chars array
  - Selecting a word
  - Have program compare your selected with word to its goal word
  - You select "CLEAR". The goal word is "ROACH." 
  -   "Entry denied. 3/5 correct."
  - onClick event for selecting words

**2. Important but not urgent:**
 - Font and font size
 - Color scheme (amber)
 - User typing their first name on landing page
 - User's name reappearing on win page
 - Highlight a word/character on hover

**3. Not important but urgent:**
- Game logic:
  - Generate rowStarts from rowStarts array ( ["0xN0H3", "0xN0H4", "0xN0H2"] etc. )

**4. Not important and not urgent:**
- General CSS
  - Screen display
  - The computer monitor
  - Power dial appearance
  - Screen illuminates bottom of computer area
  
## MVP

- User will be able to:
  - **Interact with the power button (start and reset game)**
  - **Input their name (landing page)**
- Second button on TV that pop ups information:
  - Created by: Me
  - GitHub link
  - Bethesda Softworks license

## POST MVP

- Seeing characters between <> (such as <$%-.@> ) would either A. Replenish lives/attempts or B. Remove a bad word at random. This is not in the player instructions, so it would be up to them to stumble across it.
- Key clacks and beeping (i.e. error) sound effects
- Dictionary API
- Easy/Medium/Hard difficulty levels (hard = longer words)

## Wireframes

I've inserted the wireframes below.

## Game Components

### Landing Page

<img src="https://i.imgur.com/tWjUXoD.jpg" alt="alt text" width="200" height="400">

1. Shows a blank computer screen.
2. User clicks on the "power dial" 
3. Landing 2 appears.
4. Prompt: **"Please enter your first name"** with an input box below.
5. User types their first name and clicks on the "GO" button adjacent to it
6. Taken to Landing 3.

### Game Initialization

<img src="https://i.imgur.com/oIxpalm.jpg" alt="alt text" width="200" height="400">

7. User is presented with rows containing randomly generated characters and randomly generated words. The words are accessed from a words array and are randomly spread out amongst the characters. More specifically, none of the words are separated---you won't see anything like this: SP*~!IRAL.
8. Close to the top of the screen there's the text "4 attempts left" with four boxes next to it ( [] [] [] [] )
9. The game has chosen one of these words to be the "goal word." **Clicking on this word wins the game.**
10. The user picks a word that they think might be the passcode.

The **image below** is a more **accurate representation of the game screen** compared to the image above. Something to note---and this will be fixed---is that in the picture every line contains a word. This will **not happen** during the final game. I'd originally considered one per line but realized it complicates things.
<img src="https://i.imgur.com/O2nTwkp.jpg" alt="alt text" width="400" height="200">

11. If the word is incorrect, the follow message appears on the right side: "Entry denied. x/6 correct." 
    - With x being the amount of letters from your word that match the computer's goal word. 
    - If the computer's goal word is NIMBUS and you select the word SINGED, you'll be presented with "1/6 correct."
 12. When you have three lives left, the text at the top will say "3 attempts left" and three boxes will be present.
 13. When you get **down to one life,** the text changes a bit: **"1 attempt left! Lock down pending."**
 14. Depending on whether the user **selects correctly or incorrectly,** they will either see a **"Win Screen"** or a **"Lose Screen."** For more information, please scroll down and go to ### Winning the Game.

### Playing The Game

For a more detailed list, please see ## Game Components.

98% of the input will involve the user clicking their mouse. The other 2% is using their keyboard to type their first name on Landing 1.

### Winning The Game
1. **Win state:** Select the correct word that the game chose to be the "goal word."
  - Computer clears and shows the text: **"Welcome, [your name]."**
2. **Lose state:** Run out of attempts (4) to select the "goal word." 
  - Computer clears and shows the text: **"Terminal locked. Please contact your administrator."**

### Game Reset
The user will be able to **restart the game** by **clicking on the power dial at the bottom of the screen.** Clicking it once turns the computer off and clicking it again will turn it back on.

## Functional Components

/// Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

/// Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

## Game Logic Areas

**I divided the logic of the game into five areas:**

**1. Attempts left**
- **Case/switch** for different options (5 options: 4 for the attempts and 1 for game over)

**2. zeroOneCode and rowStarts**
- var zeroOneCode = ["0xN0H4", "0xN0H6", "0xN0H1"]...etc
  - Will be **pushed** into blank array rowStarts
- **Math.floor(Math.random()**

**3. Random chars**
- var garbage = ["!", "%", "<", ")", ]...etc
- **Math.floor(Math.random()**
- **Push** from var garbage into newArr (mixed with random words)

**4. Random words**
- var words = ["NIMBUS", "CLEARS", "CHURCH", "WRITES", ]...etc
- **Math.floor(Math.random()**
- **Push** from var words into newArr (mixed with garbage words)
- **onClick**
  - user will be able to click on all words

**5. User guesses and correct letters**
- Need to check:
  1. That they're the **same object type**
  2. They have the **same # of items**
- **Object.is(value1, value2)**
  - Determines equality of two values
- **string.split()** then compare, OR **forEach** (loop over each letter)



Priority Matrix: 1. Important & urgent  |  2. Important but not urgent  |  3. Not important but urgent  |  4. Not important and not urgent

| **Component | Priority | Estimated Time | Time Invested | Actual Time** |
| :---: | :---: |  :---: | :---: | :---: |
| **Object.is()** | 1 | 2H | :---: | :---: |


## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| **Function | Description | Game Logic Area** |
|  :---: | :---: | :---: |  
| Math.floor | Returns the largest integer less than or equal to a given number | 2, 3, 4 |
| Math.random | Return a random number between 0 (inclusive) and 1 (exclusive) | 2, 3, 4 |


## Additional Libraries
/// Use this section to list all supporting libraries and thier role in the project.
- **Still deciding on using jQuery or vanilla**
  - Leaning toward jQuery, but not sure

## jQuery Discoveries
/// Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
/// Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
/// Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
