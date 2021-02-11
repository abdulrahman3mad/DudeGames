//from html
var numbers = document.querySelector(".numbers");
var inputnumber = document.querySelector(".numbersinput");
var Score = document.querySelector(".score");
var correctIcon = document.querySelector(".correct");
var wrongIcon = document.querySelector(".wrong");
var countDown = document.querySelector(".countdown");
var threeRightAnswersPrizeSpan = document.querySelector(".timerprize");
var dudename = document.querySelector(".name");
var nameinput = document.querySelector(".nameinput");
var calctype = document.querySelector(".calctype .icons");


//js variables
var number1 = 0, number2 = 0, addition = 0;
var score = 0;
var count = 60;
var rightAnswer = 0;
var interval = 0;
var startGame = true;
//volumns
var wrong = new Audio('sounds/wrong.mp3');
wrong.volume = 0.2;
var cheering = new Audio('sounds/cheering.mp3');
var right = new Audio('sounds/Right.mp3');
right.volume = 0.2;
var operatorvar;




window.onload = function () {
    highscore.textContent = "highscore: " + localStorage.getItem("score") + "   by  " + localStorage.getItem("name");
    nameinput.focus();
}

function whichoperator(operator) {
    operatorvar = operator;
}

calctype.children[0].addEventListener("click", function () {
    whichoperator("+");
    isItEmpty();

});
calctype.children[1].addEventListener("click", function () {
    whichoperator("-");
    isItEmpty();
});
calctype.children[2].addEventListener("click", function () {
    whichoperator("/");
    isItEmpty();
});
calctype.children[3].addEventListener("click", function () {
    whichoperator("×");
    isItEmpty();

});





inputnumber.addEventListener("keypress", function (event) {
    if (startGame == true) {
        if (event.key === "Enter") {
            wrongAnswer();
            changeNumbersValue();
            inputnumber.value = "";
            startGame = false;
        }
        startGame = true;
    }
})

inputnumber.addEventListener("input", function () {
    isItRight(parseInt(inputnumber.value));

})





function isItEmpty() {
    if (nameinput.value == "") {
        nameinput.placeholder = "name!";
    }

    else {
        startGameFunction();
    }
}

function startGameFunction() {
    makeItReady();
    interval = setInterval(startTimerFunction, 1000);
}



function makeItReady() {
    changeNumbersValue();

    dudename.textContent = nameinput.value;
    nameinput.value = "";
    startGame = true;
    calctype.parentElement.style.display = "none";
    inputnumber.style.display = "block";
    numbers.style.display = "block";
    dudename.style.display = "block";
    Score.style.display = "block";
    countDown.style.display = "block";
    inputnumber.focus();
    rightAnswer = 0;
    count = 60;
    countDown.textContent = "Time:" + count;
    score = 0;
    inputnumber.value = "";
}

function changeTimer() {
    count++;
    countDown.textContent = "Time:" + count;
}

function wrongAnswer() {
    rightAnswer--;
    showWrongIconAndMusic();
    hideWrongIcon();
}

function isItRight(inputValue) {
    if (inputValue === addition) {
        score++;
        Score.textContent = "Score: " + score;
        rightAnswer++;
        showRightIconAndMusic();
        hideRightIcon();
        threeRightAnswersPrize(rightAnswer);
        changeNumbersValue();
        inputnumber.value = "";
    }

}

function changeNumbersValue() {
    number1 = Math.ceil(Math.random() * (1 + (score * 3)));
    number2 = Math.ceil(Math.random() * (1 + (score * 3)));
    numbers.textContent = number1 + operatorvar + number2;
    if (operatorvar == "+") {
        addition = number1 + number2;
    }
    else if (operatorvar == "-") {
        addition = number1 - number2;
    }
    else if (operatorvar == "/") {
        addition = number1 / number2;
    }
    else if (operatorvar == "×") {
        addition = number1 * number2;
    }
}

function showRightIconAndMusic() {
    correctIcon.style.display = "block";
    right.play();
}
function showWrongIconAndMusic() {
    wrongIcon.style.display = "block";
    wrong.play();
}

function hideRightIcon() {
    setTimeout(function () {
        correctIcon.style.display = "none";
    }, 300)

}
function hideWrongIcon() {

    setTimeout(function () {
        wrongIcon.style.display = "none";
    }, 300)

}
function threeRightAnswersPrize(rightAnswer) {
    if (rightAnswer % 3 == 0) {
        threeRightAnswersPrizeSpan.style.display = "block";
        setTimeout(function () {
            threeRightAnswersPrizeSpan.style.display = "none";
        }, 500);
        changeTimer();
    }
    if (rightAnswer % 10 == 0) {
        score = score + 2;
        cheering.play();
    }
}

function startTimerFunction() {
    if (count > 0) {
        count--;
        countDown.textContent = "Time: " + count;
    }
    else {
        clearInterval(interval);
        endGame();
    }
}

function endGame() {


    numbers.style.display = "none";
    inputnumber.style.display = "none";
    calctype.parentElement.style.display = "flex";
    Score.style.display = "none";
    countDown.style.display = "none";
    dudename.style.display = "none";
    startGame = false;

}
/*
flex-direction: column;
justify-content: center;
align-items:center;
*/