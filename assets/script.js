
playerList = [];
var updateValue;
var score = 0;
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
var time = 180;
stopTime = false;
wrong = false;
function clear(){
    console.log("clear");
}

function startOver(){
    order = 0;
    time = 180;
    /*location.reload();*/
    centerContainer.setAttribute("class", "centerMain");
    question.innerHTML = "Coding Quiz Challenge"
    centerContainer.append(direct);
    centerContainer.append(begin);
    timer();
    console.log("reloaded");
}
function timer(){
    timeKeeper.innerHTML = "Time:" + " " + time --;
    if(time<0){
       clearInterval(myVar);
   }
   else if(stopTime){
    clearInterval(myVar);
   }
   }

function beginTimer(){
    myVar = setInterval (function(){timer()},1000);
    
    
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
score -= 5;
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
    score += 10;
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

        questionFour.innerHTML="4. square brackets";
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
        /*order = 0;*/
        console.log("go to highscore");
        question.innerHTML = "All done!"
        centerContainer.removeChild(questionholder);
        var finalP = document.createElement("p");
        centerContainer.append(final);
        finalP.innerHTML = "your final score is " + score + ".";
        question.append(finalP);
        var inputDiv = document.createElement("form");
        inputDiv.setAttribute("class", "inputDiv");
        inputDiv.setAttribute("label", "name");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("class", "input");
        input.setAttribute("id", "yourName")
        input.setAttribute("name", "initial");
        input.setAttribute("label", "initialSubmit");
        var btn = document.createElement("button");
        var inputP = document.createElement("p");
        inputP.innerHTML = "Enter initials:";
        inputDiv.append(inputP)
        inputDiv.append(input);
        inputDiv.append(btn);
        question.append(inputDiv);
        btn.innerHTML = "submit";
        btn.setAttribute("class", "btnSub");
        btn.setAttribute("type", "submit");
        btn.setAttribute("name", "initial");
        btn.setAttribute("label", "initialSubmit");
        stopTime = true;
        timer();
        
        inputDiv.addEventListener('submit', function (e){
            e.preventDefault();
            var tempValue = document.getElementById("yourName").value;
            console.log(tempValue.length);
            if(tempValue.length != 2){
                window.alert("must be two characters");
            }
            else{
            updateValue = tempValue
            console.log(updateValue);
            console.log(updateValue.length);
            playerList.push(updateValue + " " + "-" + " " + score);
            console.log(playerList);
            localStorage.setItem("scoreVal", playerList);
            questioner();}
        });
        

        
    }
    else if(order ===7){
        question.innerHTML = "High scores";
        var yourName = document.createElement("h4");
        yourName.setAttribute("class", "nameScore");
        yourName.innerHTML = localStorage.getItem("scoreVal");
        /*yourName.innerHTML = (updateValue + " " + "-" + " " + score);*/
        question.append(yourName);
        var goBack = document.createElement("button");
        var clearHighScore = document.createElement("button");
        var options = document.createElement("div");
        goBack.addEventListener("click",startOver);
        clearHighScore.addEventListener("click",clear);
        goBack.setAttribute("class","btnOpt");
        goBack.innerHTML = "goBack";
        clearHighScore.setAttribute("class","btnOpt");
        clearHighScore.innerHTML = "Clear high score";
        options.append(goBack);
        options.append(clearHighScore);
        question.append(options);

        
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



