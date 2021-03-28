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
    var wrongIndicator = document.createElement("h3");
    var wrongDiv = document.createElement("div");
    wrongIndicator.setAttribute("class", "wrong");
    wrongDiv.setAttribute("class", "wrongD");

    centerContainer.append(wrongDiv);
    wrongDiv.appendChild(wrongIndicator);
    wrongIndicator.innerHTML = "Wrong!"
}
}
function rightPick(){
    console.log("right pick");
    var gotItRight = document.querySelector("wrongD");

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
        var questionholder = document.createElement("div");
        var listQuestions = document.createElement("ol");
        listQuestions.setAttribute("class", "questionsDiv")
    
        questionOne.innerHTML="1.a";
        questionOne.setAttribute("class", "qBtn");
        list.push(questionOne);
        
        questionTwo.innerHTML="2. b";
        questionTwo.setAttribute("class", "qBtn");
        list.push(questionTwo);

        questionThree.innerHTML="3. c";
        questionThree.setAttribute("class", "qBtn");
        list.push(questionThree);

        questionFour.innerHTML="4. d";
        questionFour.setAttribute("class", "qBtn");
        list.push(questionFour);

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
    
    questionTwo.setAttribute("id", "wrongPickA");
    questionThree.setAttribute("id", "wrongPickB");
    questionFour.setAttribute("id", "wrongPickC");
    questionFive.setAttribute("id", "wrongPickD");
            
   
    var wrongAnswereA = document.querySelector("#wrongPickA");
    wrongAnswereA.addEventListener("click", wrongPick);
    
    var wrongAnswereB= document.querySelector("#wrongPickB");
    wrongAnswereB.addEventListener("click", wrongPick);
    
    var wrongAnswereC = document.querySelector("#wrongPickC");
    wrongAnswereC.addEventListener("click", wrongPick);
    
    var wrongAnswereD = document.querySelector("#wrongPickD");
    wrongAnswereD.addEventListener("click", wrongPick);
    
    }
    else if(order === 2){
        question.innerHTML = "The condition in an if / else statement is enclosed with<span>blank</span>.";
        questionOne.innerHTML="1.aaaaa";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2.bbbbbbb";
        questionTwo.setAttribute("id","correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        questionThree.innerHTML="3.cccccc";
        questionThree.setAttribute("id", "wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB");
        wrongAnswereB.addEventListener("click", wrongPick);

        questionFour.innerHTML="4.ddddddd";
        questionFour.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        list.push(questionFive);
    }
    else if(order === 3){
        question.innerHTML = "Arrays in JavaScript can be used to store.";
        questionOne.innerHTML="1.aaaaa";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2.bbbbbbb";
        questionTwo.setAttribute("id","wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB");
        wrongAnswereB.addEventListener("click", wrongPick);

        questionThree.innerHTML="3.cccccc";
        questionThree.setAttribute("id","correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        questionFour.innerHTML="4.ddddddd";
        questionFour.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        list.push(questionFive);
    }
    else if(order === 4){
        question.innerHTML = "String values must be enclosed within<span>blank</span>when being assigned to variables.";
        questionOne.innerHTML="1.aaaaa";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2.bbbbbbb";
        questionTwo.setAttribute("id","wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB"); 
        wrongAnswereB.addEventListener("click", wrongPick);

        questionThree.innerHTML="3.cccccc";
        questionThree.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFour.innerHTML="4.dddddd";
        questionFour.setAttribute("id","correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);

        questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        list.push(questionFive);
        
    }
    else if(order === 5){
        question.innerHTML = "A very used tool used during development and debugging for printing content to the debugger is:";
        questionOne.innerHTML="1.aaaaa";
        questionOne.setAttribute("id", "wrongPickA");
        var wrongAnswereA = document.querySelector("#wrongPickA");
        wrongAnswereA.addEventListener("click", wrongPick);

        questionTwo.innerHTML="2.bbbbbbb";
        questionTwo.setAttribute("id","wrongPickB");
        var wrongAnswereB = document.querySelector("#wrongPickB"); 
        wrongAnswereB.addEventListener("click", wrongPick);

        questionThree.innerHTML="3.cccccc";
        questionThree.setAttribute("id", "wrongPickC");
        var wrongAnswereC = document.querySelector("#wrongPickC");
        wrongAnswereC.addEventListener("click", wrongPick);

        questionFour.innerHTML="4.ddddddd";
        questionFour.setAttribute("id", "wrongPickD");
        var wrongAnswereD = document.querySelector("#wrongPickD");
        wrongAnswereD.addEventListener("click", wrongPick);

        questionFive.innerHTML="5.eeeeeee";
        questionFive.setAttribute("id", "correctPick");
        var correctAnswere = document.querySelector("#correctPick");
        correctAnswere.addEventListener("click", rightPick);
        list.push(questionOne);
        list.push(questionTwo);
        list.push(questionThree);
        list.push(questionFour);
        list.push(questionFive);

    }
    else if(order === 6){
        order = 0;
        console.log("go to highscore");
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



