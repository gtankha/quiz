var maincontentclass = document.querySelector("#pagecontent");
var highscoreclass = document.querySelector("#highscore");
var timerclass = document.querySelector("#timer");
var qandawrapperclass = document.querySelector("#qandawrapper");
var questionsclass = document.querySelector("#questions");
var answersclass = document.querySelector("#answers");
var buttonendclass = document.querySelector("#buttonend");


var startingpage= function() {

  // Add text for the starting page
  questionsclass.innerHTML = "Code Quizing Challenge";
  console.log(qandawrapperclass);
  var startertext = document.createElement("div");
  startertext.innerHTML = "To answer the following code relate quiz question"+"<br>"+ "Please go ahead and press the button below"+"<br>"+"Best of luck"
  console.log(startertext);
  qandawrapperclass.appendChild(startertext);

  //Add button text for the starting page
  buttonendclass.textContent = "Start Quiz";
}

startingpage();