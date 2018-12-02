<h1>Tic-Tac-Toe</h1>

<p>For this project, we were tasked with creating a tic-tac-toe game from scratch using the technologies we have learned so far at the Web Development Immersive at General Assembly through three weeks. The goal for me was to achieve MVP (minimum viable product), and that was to have a gameboard play the game (rules stated below), with information sent from the client to the server using APIs to communicate back and forth. The games would be saved, and the rules of tic tac toe would be included in the game logic. Other items like page design/layout/themes, keeping track of wins and losses for each player, responsive design and possible AI based levels would be considered for later iterations of this game.</p>

<p>I have created a gameboard using Bootstrap, HTML and SASS, and made API calls to the Heroku server using both Curl scripts and Ajax. The board itself plays with the use of Jquery, and the page is a single page application that does not necessitate refreshing to play a new game. Throughout the process, Git and GitHub were used for version control.</p>

<p><em>Rules and specifications:</em>
<br>
Per <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank">Wikipedia</a>, the rules of the game of tic-tac-toe is as follows:
<br>
"Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game."</p>

<p>Furthermore, for the purposes of our project, the following is the rules that the app had to adhere to:
  <ul>
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
  <li>Ajax</li>
  <li>Javascript</li>
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
