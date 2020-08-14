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
console.log(rem);
if (rem!=null) {rem.remove();};
if (buttonendid!=null) {buttonendid.remove();};

// show question
questionsid.innerHTML = qanda[page].q;

// add and show the selections

for (i=0;i<qanda[page].s.length; i++){
qlist[i] = document.createElement("li");
qlist[i].textContent = i+1 + ". "+ qanda[page].s[i];
qlist[i].style.marginTop= "3%";
qlist[i].style.marginLeft= "0%";
qlist[i].style.paddingTop="1%";
qlist[i].style.paddingBottom="1%";
qlist[i].style.backgroundColor="purple";
qlist[i].style.textAlign="left";
qlist[i].style.fontSize="1.5em";
answersid.appendChild(qlist[i]);
}

// add and show if response is right or wrong

var startertext = document.createElement("div");
startertext.className = "startertext";
startertext.innerHTML = "";
qandawrapperid.appendChild(startertext);
}


startingpage();
buttonendid.addEventListener("click", quizpage);