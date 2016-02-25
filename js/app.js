function Question(questionArr, answerArray, correctAnswer, correctText) {
    this.question = questionArr[0];
    this.answer = answerArray;
    this.correctIndex = answerArray[correctAnswer];
    this.correctText = correctText;
}

var questionOne = new Question(questionArr[0], ["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"], 0, "Fragile X Syndrome is a genetic disorder that...");

var questionArr = ["What is Fragile X Syndrome?", "What are the approximate odds of being a carrier for Fragile X Syndrome?", "What are the approximate odds of having full mutation Fragile X Syndrome?", "Fragile X Syndrome is the most common known cause of __________", "How are people commonly diagnosed with FXS?"];


//Qustion.prototype.askQuestion = function(){
//        
//    }


$(document).ready(function() {
        
//    /*just show the intro screen*/
    $('.quiz').hide();
    $('.final').hide();
   
   /*event handler area*/
 
    /*start the game*/
    $('.intro__start').click(function() {
        $('.quiz').show();
        $('.intro').hide();    
    });
    
    //this will change the question text sub 0 for variable
    $('.quiz__question-text').text(questionsArr[0].questionText);
    
    //this will set the text for each possible answer sub 0 for variable
    
    for (var i = 0; i < questionsArr[0].answerArray.length; i++) {
      $('<div class="quiz__answers-item"/>').text(questionsArr[0].answerArray[i]).appendTo('.quiz__answers');
    }
    
    $('.quiz__answers-item').click(function(evt) {
        $(evt.target).addClass('selected');
    });
    
    $('.confirm__button').click(function() {
        var currentQuestion = 1;
        
    });
     
    /*function area*/
    

    
});

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
