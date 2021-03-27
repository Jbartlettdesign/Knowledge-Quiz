var body = document.querySelector("body");
/*div container holding everything*/
var container = document.querySelector("#contain");

/*most important div in middle holding questions*/
var centerContainer = document.querySelector("#centerContent");

/*begining title and questions h1*/
var question = document.querySelector("#mainQuestionaire");
/*direction to be removed*/
var direct = document.querySelector("#directions");
/*button to  start to be removed*/ 
var begin = document.querySelector("#begin-quiz");
/*high score*/
var highS = document.querySelector("#highScore");

var timeKeeper = document.querySelector("#timer");
/*order of questions*/
var order = 0;
var time = 60;
wrong = false;
function beginTimer(){
    setInterval (function(){timeKeeper.innerHTML = "Time:" + " " + time --;},1000);
   if(time <= 0){
       clearInterval();
   }
   }
    
function wrongPick(){
    if(wrong != true){
        wrong = true;
    console.log("wrongPick");
    var wrongIndicator = document.createElement("h3");
    wrongIndicator.setAttribute("class", "wrong");
    centerContainer.append(wrongIndicator);
    wrongIndicator.innerHTML = "Wrong!"
}
}
function rightPick(){
    console.log("right pick");
    questioner();
}

function questioner(){
    order ++;
    console.log(order);
    if(order === 1){
        /*change the initial directions to the first question*/
        question.innerHTML = "Commonly used data types DO Not Include:";
        centerContainer.removeChild(direct);
        centerContainer.removeChild(begin);
        var trufer = centerContainer.hasAttribute("class" , "centerMain");
        console.log(centerContainer.attributes);
        centerContainer.removeAttribute("class" , "centerMain");
        centerContainer.setAttribute("class", "centerMainAligner");
        /*create elements*/
        /*delete questionholder div for next question*/
        var questionholder = document.createElement("div");
        var listQuestions = document.createElement("ol");
        listQuestions.setAttribute("class", "questionsDiv")
        var list = [];
    
        var questionOne = document.createElement("button");
        questionOne.innerHTML="1.a";
        questionOne.setAttribute("class", "qBtn");
        list.push(questionOne);
        
        var questionTwo = document.createElement("button");
        questionTwo.innerHTML="2. b";
        questionTwo.setAttribute("class", "qBtn");
        list.push(questionTwo);

        var questionThree = document.createElement("button");
        questionThree.innerHTML="3. c";
        questionThree.setAttribute("class", "qBtn");
        list.push(questionThree);

        var questionFour = document.createElement("button");
        questionFour.innerHTML="4. d";
        questionFour.setAttribute("class", "qBtn");
        list.push(questionFour);

        var questionFive = document.createElement("button");
        questionFive.innerHTML="5. e";
        questionFive.setAttribute("class", "qBtn");
        list.push(questionFive);

        console.log(list);
        /*append elements*/ 
        questionholder.append(listQuestions);
        centerContainer.append(questionholder);
        for(var i = 0;i < list.length; i ++){
        listQuestions.append(list[i]);
    }
    
    /*correct*/
    questionOne.setAttribute("id","correctPick");
    /*button with correct id attached*/
    
    var correctAnswere = document.querySelector("#correctPick");
    correctAnswere.addEventListener("click", rightPick);
    
    questionTwo.setAttribute("id", "wrongPickTwo");
    questionThree.setAttribute("id", "wrongPickThree");
    questionFour.setAttribute("id", "wrongPickFour");
    questionFive.setAttribute("id", "wrongPickFive");
            
   
    var wrongAnswereTwo = document.querySelector("#wrongPickTwo");
    wrongAnswereTwo.addEventListener("click", wrongPick);
    
    var wrongAnswereThree= document.querySelector("#wrongPickThree");
    wrongAnswereThree.addEventListener("click", wrongPick);
    
    var wrongAnswereFour = document.querySelector("#wrongPickFour");
    wrongAnswereFour.addEventListener("click", wrongPick);
    
    var wrongAnswereFive = document.querySelector("#wrongPickFive");
    wrongAnswereFive.addEventListener("click", wrongPick);
    
        
        
    
    
    }
    else if(order === 2){

    }
    else if(order === 3){

    }
    else if(order === 4){

    }
    else if(order === 5){

    }
    
    
}

function startQuiz(){
     beginTimer()   
    questioner();
}
function viewHighScore(){
    console.log("score");
}




highS.addEventListener("click", viewHighScore);
begin.addEventListener("click", startQuiz);



