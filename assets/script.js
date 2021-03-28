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
var final = document.createElement("div");

var questionholder = document.createElement("div");
var wrongDiv = document.createElement("div");
var wrongIndicator = document.createElement("h3");
var questionOne = document.createElement("button");
var questionTwo = document.createElement("button");
var questionThree = document.createElement("button");
var questionFour = document.createElement("button");
var questionFive = document.createElement("button");
var list = [];
/*order of questions*/
var order = 0;
var time = 5;
wrong = false;
function beginTimer(){
    setInterval (function(){timeKeeper.innerHTML = "Time:" + " " + time --;},1000);
    console.log(time);
   if(time <= 0){
       clearInterval(intervalId);
   }
   }
    
function wrongPick(){
    if(wrong != true){
        wrong = true;
    console.log("wrongPick");
    
    wrongIndicator.setAttribute("class", "wrong");
    wrongDiv.setAttribute("id", "wrongD");

    centerContainer.append(wrongDiv);
    wrongDiv.appendChild(wrongIndicator);
    wrongIndicator.innerHTML = "Wrong!"
}
}
function rightPick(){
    console.log("right pick");
    if(wrong = true){
    var gotItRight = document.querySelector("#wrongD");
    wrongDiv.remove("h3");
    wrong = false;
    }
    questionOne.removeAttribute("id");
    questionTwo.removeAttribute("id");
    questionThree.removeAttribute("id");
    questionFour.removeAttribute("id");
    questionFive.removeAttribute("id");
    
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
        console.log(centerContainer.attributes);
        centerContainer.removeAttribute("class" , "centerMain");
        centerContainer.setAttribute("class", "centerMainAligner");
        /*create elements*/
        /*delete questionholder div for next question*/
        
        var listQuestions = document.createElement("ol");
        listQuestions.setAttribute("class", "questionsDiv")
    
        questionOne.innerHTML="1. alerts";
        questionOne.setAttribute("class", "qBtn");
        list.push(questionOne);
        
        questionTwo.innerHTML="2. strings";
        questionTwo.setAttribute("class", "qBtn");
        list.push(questionTwo);

        questionThree.innerHTML="3. booleans";
        questionThree.setAttribute("class", "qBtn");
        list.push(questionThree);

        questionFour.innerHTML="4. numbers";
        questionFour.setAttribute("class", "qBtn");
        list.push(questionFour);

        /*questionFive.innerHTML="5. e";
        questionFive.setAttribute("class", "qBtn");
        list.push(questionFive);*/

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
    
    questionTwo.setAttribute("id", "wrongPickA");
    questionThree.setAttribute("id", "wrongPickB");
    questionFour.setAttribute("id", "wrongPickC");
    /*questionFive.setAttribute("id", "wrongPickD");*/
            
   
    var wrongAnswereA = document.querySelector("#wrongPickA");
    wrongAnswereA.addEventListener("click", wrongPick);
    
    var wrongAnswereB= document.querySelector("#wrongPickB");
    wrongAnswereB.addEventListener("click", wrongPick);
    
    var wrongAnswereC = document.querySelector("#wrongPickC");
    wrongAnswereC.addEventListener("click", wrongPick);
    
    /*var wrongAnswereD = document.querySelector("#wrongPickD");
    wrongAnswereD.addEventListener("click", wrongPick);*/
    
    }
    else if(order === 2){
        questionOne.removeEventListener("click",rightPick);
        questionTwo.removeEventListener("click", wrongPick);
        questionThree.removeEventListener("click", wrongPick);
        questionFour.removeEventListener("click", wrongPick);
        /**************/
        question.innerHTML = "The condition in an if / else statement is enclosed with<span>blank</span>.";
        questionOne.innerHTML="1. quotes";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2. parenthesis";
        questionTwo.setAttribute("id","correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        questionThree.innerHTML="3. curly brackets";
        questionThree.setAttribute("id", "wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB");
        wrongAnswereB.addEventListener("click", wrongPick);

        questionFour.innerHTML="4. sqaure brackets";
        questionFour.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        /*questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);*/
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        /*list.push(questionFive);*/
    }
    else if(order === 3){
        questionOne.removeEventListener("click",wrongPick);
        questionTwo.removeEventListener("click", rightPick);
        questionThree.removeEventListener("click", wrongPick);
        questionFour.removeEventListener("click", wrongPick);
        /*****************/
        question.innerHTML = "Arrays in JavaScript can be used to store.";
        questionOne.innerHTML="1. numbers and strings";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2. other arrays";
        questionTwo.setAttribute("id","wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB");
        wrongAnswereB.addEventListener("click", wrongPick);

        questionThree.innerHTML="3. booleans";
        questionThree.setAttribute("id","wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFour.innerHTML="4. all of the above";
        questionFour.setAttribute("id", "correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        /*questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);*/
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        /*list.push(questionFive);*/
    }
    else if(order === 4){
        questionOne.removeEventListener("click",wrongPick);
        questionTwo.removeEventListener("click", wrongPick);
        questionThree.removeEventListener("click", wrongPick);
        questionFour.removeEventListener("click", rightPick);
        /**********************/
        question.innerHTML = "String values must be enclosed within<span>blank</span>when being assigned to variables.";
        questionOne.innerHTML="1. commas";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2. curly brackets";
        questionTwo.setAttribute("id","wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB"); 
        wrongAnswereB.addEventListener("click", wrongPick);

        questionThree.innerHTML="3. parenthesis";
        questionThree.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFour.innerHTML="4. quotes";
        questionFour.setAttribute("id","correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        /*questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);*/
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        /*list.push(questionFive);*/
        
    }
    else if(order === 5){
        questionOne.removeEventListener("click",wrongPick);
        questionTwo.removeEventListener("click", wrongPick);
        questionThree.removeEventListener("click", wrongPick);
        questionFour.removeEventListener("click", rightPick);
        /****************/
        question.innerHTML = "A very used tool used during development and debugging for printing content to the debugger is:";
        questionOne.innerHTML="1. JavaScript";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2.terminal/bash";
        questionTwo.setAttribute("id","wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB"); 
        wrongAnswereB.addEventListener("click", wrongPick);

        questionThree.innerHTML="3.for loops";
        questionThree.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFour.innerHTML="4.console.log";
        questionFour.setAttribute("id", "correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        /*questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);*/
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        /*list.push(questionFive);*/

    }
    else if(order === 6){
        questionOne.removeEventListener("click",wrongPick);
        questionTwo.removeEventListener("click", wrongPick);
        questionThree.removeEventListener("click", wrongPick);
        questionFour.removeEventListener("click", rightPick);
        /****************/
        order = 0;
        console.log("go to highscore");
        question.innerHTML = "All done!"
        centerContainer.removeChild(questionholder);
        var finalP = document.createElement("p");
        centerContainer.append(final);
        finalP.innerHTML = "your final score is."
        question.append(finalP);
        
        
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



