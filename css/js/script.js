var maincontentid= document.querySelector("#pagecontent");
var highscoreid = document.querySelector("#highscore");
var timerid = document.querySelector("#timer");
var qandawrapperid = document.querySelector("#qandawrapper");
var questionsid = document.querySelector("#questions");
var answersid = document.querySelector("#answers");

var pagenumber = 0;
var highscore = 0;
var initialshi = [];
var highscorehi =[];
var qanda = [
{q: "What is xyz", s: ["asas", "qewqwqw", "1212","3asdasd"], a: 2},
{q: "What is vbvbvbv", s: ["1323123", "asdasds", "Asdasd", "cascas"], a:0},
{q: "What is the world", s: ["asdasd", "qwqweqe", "zxczxc", "32red"], a: 1}
];



var startingpage = function() {

  //reset page


  // Add text for the starting page
  questionsid.innerHTML = "Code Quizing Challenge";
  var startertext = document.createElement("div");
  startertext.className = "startertext";
  startertext.id = "startertext";
  startertext.innerHTML = "To answer the following code relate quiz question"+"<br>"+ "Please go ahead and press the button below"+"<br>"+"Best of luck"
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
  stbutton.style.fontSize ="1em";
  stbutton.style.background = "darkblue";
  maincontentid.appendChild(stbutton);
  stbutton.addEventListener("click", quizpage);
}

var quizpage= function (){
  
  pagenumber = 0;
  loadquiz(pagenumber); 
  
  
}

var loadquiz= function(page){



var qlist = [];


// reset page content

resetpage();


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
  if (selection.id == "newbtn"){
    selection.style.background="purple"; 
    };
};

var hoverout = function(event) {
  // turn background back to blue when mouse leaves
  var selection = event.target;
  if (selection.id == "listn" ){
  selection.style.backgroundColor="darkblue"; 
  };
  if (selection.id == "newbtn" ){
    selection.style.background="darkblue"; 
    };
  };

  var resetpage = function (){
    var rems = document.getElementById("startertext");
    if (rems!=null) {rems.remove();};
    var buttonendid = document.querySelector("#buttonend");
    if (buttonendid!=null) {buttonendid.remove();};
    if (questionsid!=null) {questionsid.innerHTML = ""};
    while(answersid.firstChild) answersid.removeChild(answersid.firstChild);
    
  }
  var resetpageend = function (){
    
    var rems = document.getElementById("newbtn");
   while(rems!=null){
     rems.remove();
     rems = document.getElementById("newbtn");
   }
    resetpage();
    startingpage();
    
  }


  var endquiz = function() {
    
    console.log("I am in endquiz");
    resetpage();
    // reset the text at the end showing right or wrong
    var rems = document.getElementById("endtext");
    if (rems!=null) {rems.remove();}; 

  questionsid.innerHTML = "All Done !";
  var startertext = document.createElement("div");
  startertext.className = "startertext";
  startertext.id = "startertext";
  startertext.innerHTML = "Your score is " + highscore + ".";

  var formtext = document.createElement("form");
  formtext.setAttribute("id","formid");
  formtext.setAttribute("action", "Javascript: highscorescreen(initials)");
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

  formtext.appendChild(label);
  formtext.appendChild(initials);
  formtext.appendChild(submit);
  qandawrapperid.appendChild(startertext);
  qandawrapperid.appendChild(formtext);
 


  }

  var selected = function(event) {
    // move on to next question upon mouse click
    var selection = event.target;
    var sel = qanda[pagenumber].a;
    var iscorrect = selection.textContent == (sel+1 + ". "+ qanda[pagenumber].s[sel])
    // reset the text at the end showing right or wrong
    var rems = document.getElementById("endtext");
    if (rems!=null) {rems.remove();};   
   
    // Add text at end showing user if response is right or wrong

    var endtext = document.createElement("div");
    endtext.style.fontStyle = "italic"
    endtext.style.borderTop = "solid"
    endtext.style.borderTopColor = "lightgrey"
    endtext.style.color = "lightgrey"
    endtext.style.marginTop= "5%";
    endtext.style.marginLeft = "25%";
    endtext.style.width = "50%";
    endtext.style.fontSize = "140%"
    endtext.className = "endtext";
    endtext.id= "endtext";
    endtext.innerHTML = "";
    qandawrapperid.appendChild(endtext);  

    if (iscorrect) {
      highscore = highscore + 1;
      endtext.innerHTML = "Correct !"
    }
    else {
      endtext.innerHTML = "Wrong !"
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
 var highscorescreen = function(init) {
  
  // reset screen
  var rems = document.getElementById("formid");
  if (rems!=null) {rems.remove();};
  var rems = document.getElementById("startertext");
  if (rems!=null) {rems.remove();};
  
   // Add text for the starting page
   questionsid.innerHTML = "High Scores";

  // store initials in local storage
      initialshi.push(init.value);
      localStorage.setItem("initls", JSON.stringify(initialshi));

// store highscore in local storage
      highscorehi.push(highscore);
      localStorage.setItem("highscores",JSON.stringify(highscorehi));

// display high scores
var hlist = [];
var len = initialshi.length;



for (i=0;i<len; i++){
  hlist[i] = document.createElement("li");
  hlist[i].id= "listhi";
  hlist[i].textContent = "1. " + initialshi[i] + ":  " + highscorehi;
  hlist[i].style.color = "black";
  hlist[i].style.backgroundColor = "rgb(240,219,255";
  hlist[i].style.textAlign = "left";
  hlist[i].style.fontSize = "120%";
  hlist[i].style.width = "140%";
  hlist[i].style.marginLeft = "-35%"  
  answersid.appendChild(hlist[i]);
}

// Create the Gobak and Clear Hi Score Buttons



var newbutton1 = document.createElement("button");
newbutton1.className = "newbtn";
newbutton1.id = "newbtn";
newbutton1.innerHTML = "Go Back";
newbutton1.style.marginTop = "2em";
newbutton1.style.marginRight = "2em";
newbutton1.style.padding = "0.75em";
newbutton1.style.color = "white";
newbutton1.style.fontSize ="1em";
newbutton1.style.background = "darkblue";
maincontentid.appendChild(newbutton1);

var newbutton2 = document.createElement("button");
newbutton2.className = "newbtn";
newbutton2.id = "newbtn";
newbutton2.innerHTML = "Clear Hi-Score";
newbutton2.style.marginTop = "2em";
newbutton2.style.padding = "0.75em";
newbutton2.style.color = "white";
newbutton2.style.fontSize ="1em";
newbutton2.style.background = "darkblue";
maincontentid.appendChild(newbutton2);


newbutton1.addEventListener("mouseover", hoverin);
newbutton1.addEventListener("mouseout", hoverout);
newbutton2.addEventListener("mouseover", hoverin);
newbutton2.addEventListener("mouseout", hoverout);
newbutton1.addEventListener("click", resetpageend);



    //  var retrieve = localStorage.getItem("initls");
     // var initials = JSON.parse(retrieve);
       
      


    }


startingpage();

answersid.addEventListener("mouseover", hoverin);
answersid.addEventListener("mouseout", hoverout);
answersid.addEventListener("click", selected);