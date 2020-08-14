var maincontentid= document.querySelector("#pagecontent");
var highscoreid = document.querySelector("#highscore");
var timerid = document.querySelector("#timer");
var qandawrapperid = document.querySelector("#qandawrapper");
var questionsid = document.querySelector("#questions");
var answersid = document.querySelector("#answers");
var buttonendid = document.querySelector("#buttonend");
var pagenumber = 0;
var qanda = [
{q: "What is xyz", s: ["asas", "qewqwqw", "1212","3asdasd"], a: 3},
{q: "What is vbvbvbv", s: ["1323123", "asdasds", "Asdasd", "cascas"], a:4},
{q: "What is the world", s: ["asdasd", "qwqweqe", "zxczxc", "32red"], a: 1}
];


var startingpage = function() {
  // Add text for the starting page
  questionsid.innerHTML = "Code Quizing Challenge";
  var startertext = document.createElement("div");
  startertext.className = "startertext";
  startertext.id = "startertext";
  startertext.innerHTML = "To answer the following code relate quiz question"+"<br>"+ "Please go ahead and press the button below"+"<br>"+"Best of luck"
  qandawrapperid.appendChild(startertext);
  //Add button text for the starting page
  buttonendid.textContent = "Start Quiz";
}

var quizpage= function (){
  loadquiz(pagenumber); 

  
}

var loadquiz= function(page){

var qlist = [];

// reset page content
var rem = document.getElementById("startertext");
if (rem!=null) {rem.remove();};
if (buttonendid!=null) {buttonendid.remove();};

// show question
questionsid.innerHTML = qanda[page].q;

// add and show the selections

for (i=0;i<qanda[page].s.length; i++){
qlist[i] = document.createElement("li");
qlist[i].id= "listn";
qlist[i].textContent = i+1 + ". "+ qanda[page].s[i];
qlist[i].style.marginTop= "3%";
qlist[i].style.marginLeft= "0%";
qlist[i].style.paddingTop="4%";
qlist[i].style.paddingBottom="4%";
qlist[i].style.paddingLeft="7%";
qlist[i].style.backgroundColor="darkblue";
qlist[i].style.textAlign="left";
qlist[i].style.fontSize="1.3em";
qlist[i].style.borderRadius="7px"; 
answersid.appendChild(qlist[i]);
}

// add and show if response is right or wrong

var startertext = document.createElement("div");
startertext.className = "startertext";
startertext.innerHTML = "";
qandawrapperid.appendChild(startertext);
}

var hoverin = function(event) {
  // turn background purple when mouse hovers over
  var selection = event.target;
  if (selection.id == "listn"){
  selection.style.backgroundColor="purple"; 
  };
};

var hoverout = function(event) {
  // turn background back to blue when mouse leaves
  var selection = event.target;
  if (selection.id == "listn"){
  selection.style.backgroundColor="darkblue"; 
  };
  };


startingpage();
buttonendid.addEventListener("click", quizpage);
answersid.addEventListener("mouseover", hoverin);
answersid.addEventListener("mouseout", hoverout);