var body = document.querySelector("body");
/*div container holding everything*/
var container = document.querySelector("#contain");

/*div in middle holding questions*/
var centerContainer = document.querySelector("#centerContent");

/*begining title and questions h1*/
var question = document.querySelector("#mainQuestionaire");
/*direction to be removed*/
var direct = document.querySelector("#directions");
/*button to  start to be removed*/ 
var begin = document.querySelector("#begin-quiz");
/*high score*/
var highS = document.querySelector("#highScore");




function questionOne(){
    /*change the initial directions to the first question*/
    question.innerHTML = "Commonly used data types DO Not Include:";
    centerContainer.removeChild(direct);
    centerContainer.removeChild(begin);

}
function startQuiz(){
    console.log("question 1");
    var questionholder = document.createElement("div");
    var listQuestions = document.createElement("ul");
    questionholder.append(listQuestions);
    listQuestions.innerHTML="hello";
    
    body.append(questionholder);
    
    questionOne();
    /*container.remove(centerContainer);*/
}
function viewHighScore(){
    console.log("score");
}
highS.addEventListener("click", viewHighScore);
begin.addEventListener("click", startQuiz);

