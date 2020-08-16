var maincontentid = document.querySelector("#pagecontent");
var highscoreid = document.querySelector("#highscore");
var headerwrapperid = document.querySelector("#headerwrapper");
var timerid = document.querySelector("#timer");
var qandawrapperid = document.querySelector("#qandawrapper");
var questionsid = document.querySelector("#questions");
var answersid = document.querySelector("#answers");

var timeleft = 50; // initializing time remaining for the counter
var pagenumber = 0; //  initializing page number reference .. keeps track of which questions and content to load
var highscore = 0; // global variable for high score
var endquiz = 0; // global variable to see if quiz ended or in the middle
var headerhis = 0; // Checks if we are in the highscore section and adjust header accordingly
var initialshi = []; // initializes the initials variable for high score
var highscorehi = []; // initializes the highscore 

// list of questions and answers 

var qanda = [
  { q: "What is Java", s: ["Starwars Character", "Ice Cream", "Programming Language", "Super Hero"], a: 2 },
  { q: "What is an Array", s: ["Data Structure", "Weapon", "Language", "Cartoon"], a: 0 },
  { q: "What is the MacOS", s: ["Choclate", "Operating System", "Company", "Book"], a: 1 }
];




// Starting page  
var startingpage = function () {



  //reset page
  resetpage();
  endquizb = -1;
  pagenumber = 0;
  headerhis = 0;

  // Add text for the starting page
  questionsid.innerHTML = "Code Quizing Challenge";
  var startertext = document.createElement("div");
  startertext.className = "startertext";
  startertext.id = "startertext";
  startertext.innerHTML = "To answer the following code relate quiz question" + "<br>" + "Please go ahead and press the button below" + "<br>" + "Best of luck"
  qandawrapperid.appendChild(startertext);
  //Add button text for the starting page
  var stbutton = document.createElement("button");
  stbutton.className = "buttonend";
  stbutton.id = "buttonend";
  stbutton.innerHTML = "Start Quiz";
  stbutton.style.marginTop = "2em";
  stbutton.style.marginRight = "2em";
  stbutton.style.padding = "0.75em";
  stbutton.style.color = "white";
  stbutton.style.fontSize = "1em";
  stbutton.style.background = "darkblue";
  maincontentid.appendChild(stbutton);
  displayheader();
  stbutton.addEventListener("click", quizpage);


}





// This displays the header

var displayheader = function () {

  highscoreid.textContent = "View High Score";
  highscoreid.style.color = "darkblue"

}

// This removes display of the header
var clearheader = function () {
highscoreid.textContent="";
timerid.textContent="";
}

// Loads the quiz page
var quizpage = function () {

  pagenumber = 0;
  highscore = 0;
  endquizb = 0;
  headerhis = 0;
  loadquiz(pagenumber);
  timer(); //  Starts the timer

}

// Loads the page with the right questions and responses 

var loadquiz = function (page) {

  headerhis = 0; // not the header

  displayheader(); // displays the header

  var qlist = [];


  // reset page content

  resetpage();


  // show question
  questionsid.innerHTML = qanda[page].q;

  // add and show the selections

  for (i = 0; i < qanda[page].s.length; i++) {
    qlist[i] = document.createElement("li");
    qlist[i].id = "listn";
    qlist[i].textContent = i + 1 + ". " + qanda[page].s[i];
    qlist[i].style.marginTop = "3%";
    qlist[i].style.marginLeft = "0%";
    qlist[i].style.paddingTop = "4%";
    qlist[i].style.paddingBottom = "4%";
    qlist[i].style.paddingLeft = "7%";
    qlist[i].style.backgroundColor = "darkblue";
    qlist[i].style.textAlign = "left";
    qlist[i].style.fontSize = "1.3em";
    qlist[i].style.borderRadius = "7px";
    answersid.appendChild(qlist[i]);
  }

  // add and show if response is right or wrong

  var startertext = document.createElement("div");
  startertext.className = "startertext";
  startertext.innerHTML = "";
  qandawrapperid.appendChild(startertext);
}

var hoverin = function (event) {
  // turn background purple when mouse hovers over
  var selection = event.target;
  if (selection.id == "listn") {
    selection.style.backgroundColor = "purple";
  };
  if (selection.id == "newbtn") {
    selection.style.background = "purple";
  };
  if (selection.id == "highscore") {
    selection.style.color = "purple";
  }
};

var hoverout = function (event) {
  // turn background back to blue when mouse leaves
  var selection = event.target;
  if (selection.id == "listn") {
    selection.style.backgroundColor = "darkblue";
  };
  if (selection.id == "newbtn") {
    selection.style.background = "darkblue";
  };
  if (selection.id == "highscore") {
    selection.style.color = "darkblue";
  }
};

//Resets page formatting
var resetpage = function () {
  var rems = document.getElementById("startertext");
  while (rems != null) {
    rems.remove();
    rems = document.getElementById("startertext");
  }
  var rems = document.getElementById("newbtn");
  while (rems != null) {
    rems.remove();
    rems = document.getElementById("newbtn");
  }
  var buttonendid = document.querySelector("#buttonend");
  if (buttonendid != null) { buttonendid.remove(); };
  if (questionsid != null) { questionsid.innerHTML = "" };
  while (answersid.firstChild) answersid.removeChild(answersid.firstChild);

  var rems = document.getElementById("formid");
  while (rems != null) {
    rems.remove();
    rems = document.getElementById("formid");
  }

  var rems = document.getElementById("startertext");
  while (rems != null) {
    rems.remove();
    rems = document.getElementById("startertext");
  }

}



// Once the quiz ends and all questions are answered
var endquiz = function () {

  

  resetpage(); // reset formatting
  
  displayheader(); // display header
  
  // Removes the text from previous screen missed by reset function

  var rems = document.getElementById("endtext");
  var newrems = rems;
  if (rems != null) { rems.remove(); };



// Page content 
  questionsid.innerHTML = "All Done !";
  var startertext = document.createElement("div");
  startertext.className = "startertext";
  startertext.id = "startertext";
  startertext.innerHTML = "Your score is " + highscore + ".";
  startertext.style.fontSize = "1.5em"; 

  // Creating form for submission
  var formtext = document.createElement("form");
  formtext.setAttribute("id", "formid");
  // Submits form and calls out the high score function
  formtext.setAttribute("action", "Javascript: highscorescreen(initials)");

  // Creating the form and formatting all of it
  var label = document.createElement("label");
  label.setAttribute("for", "initform");
  var initials = document.createElement("input");
  initials.setAttribute("type", "text");
  initials.setAttribute("id", "initials");
  initials.setAttribute("name", "initials");
  initials.setAttribute("placeholder", "initials");
  // create a submit button 
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");
  // Format submit button

submit.style.marginTop = "1em";
  submit.style.marginRight = "1em";
submit.style.padding = "0.75em";
  submit.style.color = "white";
  submit.style.fontSize = "1.5em";
  submit.style.background = "darkblue";
  submit.style.paddingTop = "0.1em";
  submit.style.paddingBottom = "0.1em";


initials.style.fontSize = "1.5em";
initials.style.verticalAlign = "middle";
initials.style.marginRight = "2em";

  formtext.appendChild(label);
  formtext.appendChild(initials);
  formtext.appendChild(submit);
  qandawrapperid.appendChild(startertext);
  qandawrapperid.appendChild(formtext);
  if (newrems){qandawrapperid.appendChild(newrems);};

  // reset the text at the end showing right or wrong
  var inp = document.getElementById("initials");
  inp.addEventListener("input", function () {
    var rems = document.getElementById("endtext");
    if (rems != null) { rems.remove(); };
  });

}

// Based on response adds to high score and shows the response (right or wrong)

var selected = function (event) {
  // move on to next question upon mouse click
  var selection = event.target;
  var sel = qanda[pagenumber].a;
  var iscorrect = selection.textContent == (sel + 1 + ". " + qanda[pagenumber].s[sel])
  // reset the text at the end showing right or wrong
  var rems = document.getElementById("endtext");
  if (rems != null) { rems.remove(); };

  // Add text at end showing user if response is right or wrong

  var endtext = document.createElement("div");
  endtext.style.fontStyle = "italic"
  endtext.style.borderTop = "solid"
  endtext.style.borderTopColor = "lightgrey"
  endtext.style.color = "lightgrey"
  endtext.style.marginTop = "5%";
  endtext.style.marginLeft = "25%";
  endtext.style.width = "50%";
  endtext.style.fontSize = "140%"
  endtext.className = "endtext";
  endtext.id = "endtext";
  endtext.innerHTML = "";
  qandawrapperid.appendChild(endtext);

  // adjusts high score based on response 

  if (iscorrect) {
    highscore = highscore + 1;
    endtext.innerHTML = "Correct !"
  }
  else {
    endtext.innerHTML = "Wrong !"

    // Time penalty for incorrect response
    timeleft = timeleft - 20  ;
  }

  // update the page number and load next question or end quiz

  pagenumber++;
  if (pagenumber < qanda.length) {
    loadquiz(pagenumber);
  }
  else {
    endquiz();
  };

};


// clear high scores

var clearhighscores = function () {
 
  // get initials in local storage
  window.localStorage.removeItem("initls");
  // get highscore in local storage
  window.localStorage.removeItem("highscores");
  initialshi = [];
  highscorehi = [];
  while (answersid.firstChild) answersid.removeChild(answersid.firstChild);

}

// displays the high score 

var highscorescreen = function (init) {

  
  // reset screen

  resetpage();  
  clearheader();

   headerhis = 1;   // Make sure not to count time while viewing the high score 
   
  // Add text for the starting page
  questionsid.innerHTML = "High Scores";


  console.log (init);
  console.log (initialshi);

  if (init!="") { // if init has no value it must be coming from some place apart from the initials form
   
    endquizb = 1;
    
    // store initials in local storage
   if (initialshi) {
    initialshi.push(init.value);
    localStorage.setItem("initls", JSON.stringify(initialshi));
    // store highscore in local storage
    highscorehi.push(highscore);
    localStorage.setItem("highscores", JSON.stringify(highscorehi));
   }
   else if (!initialshi){
     initialshi = [];
     highscorehi = [];
    initialshi[0] = init.value;
    highscorehi[0] = highscore;
    localStorage.setItem("initls", JSON.stringify(initialshi));
    localStorage.setItem("highscores", JSON.stringify(highscorehi));
   }
   
  }
  else {
    // load initals from local storage
    var inits = localStorage.getItem("initls")
    initialshi = JSON.parse(inits);
    // load highscores from local storage
    var hs = localStorage.getItem("highscores")
    highscorehi = JSON.parse(hs);

    var rems = document.getElementById("endtext");
    if (rems != null) { rems.remove(); };

     
  if (pagenumber == qanda.length) { endquizb=2;};

  }

  // display high scores
  var hlist = [];
  if (initialshi) { var len = initialshi.length; };

  for (i = 0; i < len; i++) {
    hlist[i] = document.createElement("li");
    hlist[i].id = "listhi";
    hlist[i].textContent = "#"+(i+1) +":   " + initialshi[i] + "'s score is " + highscorehi[i];
    hlist[i].style.color = "black";
    hlist[i].style.backgroundColor = "rgb(240,219,255";
    hlist[i].style.textAlign = "left";
    hlist[i].style.fontSize = "120%";
    hlist[i].style.width = "140%";
    hlist[i].style.marginLeft = "-35%"
    answersid.appendChild(hlist[i]);
  }

  // Create the Goback and Clear Hi Score Buttons



  var newbutton1 = document.createElement("button");
  newbutton1.className = "newbtn";
  newbutton1.id = "newbtn";
  newbutton1.innerHTML = "Go Back";
  newbutton1.style.marginTop = "2em";
  newbutton1.style.marginRight = "2em";
  newbutton1.style.padding = "0.75em";
  newbutton1.style.color = "white";
  newbutton1.style.fontSize = "1em";
  newbutton1.style.background = "darkblue";
  maincontentid.appendChild(newbutton1);

  var newbutton2 = document.createElement("button");
  newbutton2.className = "newbtn";
  newbutton2.id = "newbtn";
  newbutton2.innerHTML = "Clear Hi-Score";
  newbutton2.style.marginTop = "2em";
  newbutton2.style.padding = "0.75em";
  newbutton2.style.color = "white";
  newbutton2.style.fontSize = "1em";
  newbutton2.style.background = "darkblue";
  maincontentid.appendChild(newbutton2);


  newbutton1.addEventListener("mouseover", hoverin);
  newbutton1.addEventListener("mouseout", hoverout);
  newbutton2.addEventListener("mouseover", hoverin);
  newbutton2.addEventListener("mouseout", hoverout);


  
    newbutton1.addEventListener("click", function() {

      // end of quiz and gone through all questions or time ran out
      if (pagenumber <= (qanda.length) && (endquizb == 1)) {
       
        startingpage();
        return;
    };  

    // not end of quiz, went to high score from question
    
    if (pagenumber < (qanda.length) && (endquizb == 0)) {
    
       loadquiz(pagenumber);
       return;
  };  

  // not end of quiz, went to high score from starting page

  if (pagenumber < (qanda.length) && (endquizb == -1)) {
    
    startingpage();
    return; 
};

// not end of quiz but went to high scores from submit page

  if (pagenumber == (qanda.length) && (endquizb == 2)) {
    
    endquiz();
    return;
  
}; 


});

  newbutton2.addEventListener("click", clearhighscores);

}


// Timer function that will stop if viewing the high score 

var timer = function () {
  var timeInterval = setInterval(function(){
   
    if (timeleft >0 && pagenumber<qanda.length && headerhis == 0) {
    timeleft--;
    timerid.textContent = "Time: " + timeleft;
    }

    else if (timeleft >0 && pagenumber==qanda.length){
      clearInterval(timeInterval);
      timerid.textContent = "";
      timeleft = 50;
      endquiz ();
    }

    else if (headerhis!=1) {
      // Display no more time if we have run out of time
        clearInterval(timeInterval);
        timerid.textContent = "No more time";
        timeleft = 50;
        endquiz ();
      };
      
    }
    ,1000);
}



startingpage();


// event listeners for responses

answersid.addEventListener("mouseover", hoverin);
answersid.addEventListener("mouseout", hoverout);
answersid.addEventListener("click", selected);

// event listerens for header to view high score

highscoreid.addEventListener("mouseover", hoverin);
highscoreid.addEventListener("mouseout", hoverout);
highscoreid.addEventListener("click", function() {
  highscorescreen("");
});
