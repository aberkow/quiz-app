/*Constructor function to hold all info for each question/answer/info*/

function Question(question, answerArr, correctAnswer, infoText) {
    this.question = question;
    this.answerArr = answerArr;
    this.correctAnswer = answerArr[correctAnswer];
    this.infoText = infoText;
}

/* questions */
var questionOne = new Question("What is Fragile X Syndrome?", ["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"], 0, "Fragile X Syndrome is a genetic disorder that...");

var questionTwo = new Question("What are the approximate odds of being a carrier for Fragile X Syndrome?", ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], 2, "The odds of being a carrier are higer for females because they have two X chromosomes.");

var questionThree = new Question("What are the approximate odds of having full mutation Fragile X Syndrome?", ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], 3, "Fragile X syndrome is more common in males and can effect them more strongly.");

var questionFour = new Question("Fragile X Syndrome is the most common known cause of __________", ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], 2, "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person.");

var questionFive = new Question("How are people commonly diagnosed with FXS?", ["Physical exam", "Blood test", "Psychological evaluation", "Family history"], 1, "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample.");

/*array representing the entire quiz*/
var quiz = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive
]

function displayQuestion(question) {
    $('.quiz__answers').empty();
    $('.quiz__question-text').text(question.question);
    for (var i = 0; i < question.answerArr.length; i++) {
        $('<div class="quiz__answers-item"/>').text(question.answerArr[i]).appendTo('.quiz__answers');
    }
}

$(document).ready(function() {
    /*just show the intro screen*/
    $('.quiz').hide();
    $('.final').hide();
   
   /*event handler area*/
 
    /*start the game and get the first question/answer set ready*/
    $('.intro__start').click(function() {
        $('.quiz').show();
        $('.intro').hide();
        displayQuestion(quiz[0]);
    });
    
    
    
    $('.quiz__answers-item').click(function(evt) {
        $(evt.target).addClass('selected');
        //needs to be a ternary operator?
        //if (evt.target).
    });
 
//this will set the text for the question area.    
//$('.quiz__question-text').text(questionOne.question);
    
    
    
    
    
    
    //this will change the question text sub 0 for variable
//    $('.quiz__question-text').text(questionsArr[0].questionText);
//    
//    //this will set the text for each possible answer sub 0 for variable
//    
//    for (var i = 0; i < questionsArr[0].answerArray.length; i++) {
//      $('<div class="quiz__answers-item"/>').text(questionsArr[0].answerArray[i]).appendTo('.quiz__answers');
//    }
//    
//    $('.quiz__answers-item').click(function(evt) {
//        $(evt.target).addClass('selected');
//    });
//    
//    $('.confirm__button').click(function() {
//        var currentQuestion = 1;
//        
//    });
     
    /*function area*/
    

    
});

//var quiz = {
//    /*Array of questions*/
//    questions: ["What is Fragile X Syndrome?", "What are the approximate odds of being a carrier for Fragile X Syndrome?", "What are the approximate odds of having full mutation Fragile X Syndrome?", "Fragile X Syndrome is the most common known cause of __________", "How are people commonly diagnosed with FXS?"],
//    /*Nested array of answers*/
//    answersArr: [["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"], ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], ["Physical exam", "Blood test", "Psychological evaluation", "Family history"]],
//    /*Location of correct answers within AnswersArr*/
//    //    correctItemInAnswers: [this.answersArr[0][0], this.answersArr[1][2], this.answersArr[2][3], this.answersArr[3][2], this.answersArr[4][1]],
//    /*Text to be displayed after selecting/confirming choice*/
//    infoText: ["Fragile X Syndrome is a genetic disorder that...", "The odds of being a carrier are higer for females because they have two X chromosomes.", "Fragile X syndrome is more common in males and can effect them more strongly.", "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person.", "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample."]
//}


//var questionArr = ["What is Fragile X Syndrome?", "What are the approximate odds of being a carrier for Fragile X Syndrome?", "What are the approximate odds of having full mutation Fragile X Syndrome?", "Fragile X Syndrome is the most common known cause of __________", "How are people commonly diagnosed with FXS?"];


//Qustion.prototype.askQuestion = function(){
//        
//    }



//var questionsArr = [
//    {
//        questionText: "What is Fragile X Syndrome?",
//        answerArray: ["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"],
//        correctAnswer: 0,
//        //        correctAnswer: "A genetic disorder",
//        correctText: "Fragile X Syndrome is a genetic disorder that...",
//    },
//    { 
//        questionText: "What are the approximate odds of being a carrier for Fragile X Syndrome?",
//        answerArray: ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"],
//        correctAnswer: 2,
//        //        correctAnswer: "1 in 500 for males and 1 in 150 for females",
//        correctText: "The odds of being a carrier are higer for females because they have two X chromosomes."   
//    },
//    {
//        questionText: "What are the approximate odds of having full mutation Fragile X Syndrome?",
//        answerArray: ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"],
//        correctAnswer: 3,
//        //        correctAnswer: "1 in 4000 for males and 1 in 6000 for females",
//        correctText: "Fragile X syndrome is more common in males and can effect them more strongly."
//    },
//    {
//        questionText: "Fragile X Syndrome is the most common known cause of __________",
//        answerArray: ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"],
//        correctAnswer: 2,
//        //        correctAnswer: "Inherited intellectual disability",
//        correctText: "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person."
//    },
//    {
//        questionText: "How are people commonly diagnosed with FXS?",
//        answerArray: ["Physical exam", "Blood test", "Psychological evaluation", "Family history"],
//        correctAnswer: 1,
//        //        correctAnswer: "Blood test",
//        correctText: "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample."
//    }
//]

//var questionArr = ["What is Fragile X Syndrome?", "What are the approximate odds of being a carrier for Fragile X Syndrome?", "What are the approximate odds of having full mutation Fragile X Syndrome?", "Fragile X Syndrome is the most common known cause of __________", "How are people commonly diagnosed with FXS?"];
//
//var answersArr = [["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"], ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], ["Physical exam", "Blood test", "Psychological evaluation", "Family history"]];
