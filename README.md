<h1>Tic-Tac-Toe</h1>

<p>For this project, we were tasked with creating a tic-tac-toe game from scratch using the technologies we have learned so far at the Web Development Immersive at General Assembly through three weeks. The goal for me was to achieve MVP (minimum viable product), and that was to have a gameboard play the game (rules stated below), with information sent from the client to the server using APIs to communicate back and forth. The games would be saved, and the rules of tic tac toe would be included in the game logic. Other items like page design/layout/themes, keeping track of wins and losses for each player, responsive design and possible AI based levels would be considered for later iterations of this game.</p>

<p>I have created a gameboard using Bootstrap, HTML and SASS, and made API calls to the Heroku server using both curl scripts and Ajax. The board itself plays with the use of Jquery, and the page is a single page application that does not necessitate refreshing to play a new game. Throughout the process, Git and GitHub were used for version control.</p>

<p>My planning process was to figure out the game logic first and to try and plan out the steps needed. We had six days to complete this project; with this knowledge I took two hours before I even started to code to plan how I wanted to work on the logic and address the steps that the game would need to take to work. At the conclusion of the work day, since I had no code, I decided to work on the API calls and complete the user authentication process  so I could see tangible results after the first day to gain some momentum.</p>

<p>The next few days were spent working on making sure the game board was created, and really working through the game APIs and how I could use that data to form the logic that was created on the first day. After what felt like thousands of games (it was only 268!) created on the dev server just to log what information was being sent back at each step, I was ready to put everything together. The entire process felt like it took a really long time for what I produced, but being methodical really helped me to understand what each step was doing. When it came time to troubleshoot and make changes, the timing was extremely quick - I knew exactly where everything that needed to be changed was. That final day putting everything together was exhilariting. Putting things together and having them work on the first or second try and chaining that success together was well worth the time spent making this game. I can't wait to work further to refactor code, add functionality and to make the page look aesthetically pleasing.
</p>

<p><em>Rules and specifications:</em>
<br>
Per <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">Wikipedia</a>, the rules of the game of tic-tac-toe is as follows:
<br>
"Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game."</p>

<p>Furthermore, for the purposes of our project, the following are the rules that the app had to adhere to:
  <ul>
  <li>game must be a single page application and not use refresh to make any actions or updates</li>
  <li>game starts with player x, and rotates between player x and o after each move.</li>
  <li>players cannot choose or alter already occupied spots.</li>
  <li>once the game is over, players cannot mark any additional spots.</li>
  <li>messaging needs to occur when turns change notifying each player it is their turn.</li>
  <li>messaging needs to occur when a user clicks on an invalid space.</li>
  <li>messaging needs to occur the delcare when the game is over, and the result at its conclusion.</li>
  <li>adhering to the user stories set forth below.</li>
  </ul>
</p>

<h3>List of technologies used:</h3>
<ul>
  <li>Jquery</li>
  <li>AJAX</li>
  <li>JavaScript</li>
  <li>HTML</li>
  <li>SASS</li>
  <li>Bootstrap</li>
  <li>curl</li>
  <li>Git</li>
  <li>GitHub</li>
</ul>

<h3>User stories, version 1:</h3>
<ol>
  <li>As a user, I should be able to sign up for the game, and when I sign up, the option to do so should disappear.</li>
  <li>As a user, I should be able to sign in to the game after I have signed up for the game, and when I sign in to the game, options to sign up and sign in should disappear.</li>
  <li>As a user, I should be able to change my password, and log out successfully.</li>
  <li>As a user, if, after the play has been made and no one has been declared a winner, the player should switch and I should be notified whose turn it is.</li>
  <li>As a user, when I click on a square that's already been played, it should not be altered in any way and I should be notified that there was an error.</li>
  <li>As a user, I should know when the game is over, and which player has won, if a victory is to be declared.</li>
</ol>

<h3>Wireframes</h3>
<p>Below is the version 1 wireframe created for MVP game play on tic-tac-toe</p>
<img src="/assets/images/ttt_wireframe_1.JPG">
