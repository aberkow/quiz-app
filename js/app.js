/*Constructor function to hold all info for each question/answer/info*/

var quizIndexCounter = 0;

var quiz = [
  new Question("What is Fragile X Syndrome?", ["A genetic disorder.", "A behavioral disorder.", "A physical disability.", "A mental disorder"], 0, "Fragile X Syndrome is a genetic disorder that..."),
  
  new Question("What are the approximate odds of being a carrier for Fragile X Syndrome?", ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], 2, "The odds of being a carrier are higer for females because they have two X chromosomes."),
  
  new Question("What are the approximate odds of having full mutation Fragile X Syndrome?", ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], 3, "Fragile X syndrome is more common in males and can effect them more strongly."),
  
  new Question("Fragile X Syndrome is the most common known cause of __________", ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], 2, "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person."),
  
  new Question("How are people commonly diagnosed with FXS?", ["Physical exam", "Blood test", "Psychological evaluation", "Family history"], 1, "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample.")
];

function Question(question, answerArr, correctAnswer, infoText) {
    this.question = question;
    this.answerArr = answerArr;
    this.correctAnswer = answerArr[correctAnswer];
    this.userAnswer = null;
    this.infoText = infoText;
}

/* questions */
//quiz.push(new Question("What is Fragile X Syndrome?", ["A genetic disorder.", "A behavioral disorder.", "A physical disability.", "A mental disorder"], 0, "Fragile X Syndrome is a genetic disorder that..."));
//
//quiz.push(new Question("What are the approximate odds of being a carrier for Fragile X Syndrome?", ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], 2, "The odds of being a carrier are higer for females because they have two X chromosomes."));
//
//quiz.push(new Question("What are the approximate odds of having full mutation Fragile X Syndrome?", ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], 3, "Fragile X syndrome is more common in males and can effect them more strongly."));
//
//quiz.push(new Question("Fragile X Syndrome is the most common known cause of __________", ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], 2, "A person with an intellectual disability has more difficulty learning and functioning in day to day life compared with a typical person."));
//
//quiz.push(new Question("How are people commonly diagnosed with FXS?", ["Physical exam", "Blood test", "Psychological evaluation", "Family history"], 1, "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample."));

/*array representing the entire quiz*/
//var quiz = [
////    questionOne,
////    questionTwo,
////    questionThree,
////    questionFour,
////    questionFive
//]

//var answerChoiceItem = 0;
//var answerChoices = []

$(document).ready(function() {
    /*just show the intro screen*/
    $('.quiz').hide();
    $('.final').hide();
   
   /*event handler area*/
 
    /*start the game and get the first question/answer set ready*/
    $('.intro__start').click(function() {
        $('.quiz').show();
        $('.intro').hide();
      
      displayQuestion(quiz[quizIndexCounter]);
      //createAnswerChoices(quiz[quizIndexCounter]);
      questionCounter();  
    });
  /*cycle back to the first question*/  
  $('.restart').click(function() {
    $('.final').hide();
    $('.intro').show();
  }); 
  
  $('.confirm__button').click(function() {
    var currentQuestion = quiz[quizIndexCounter];
    currentQuestion.userAnswer
    displayQuestion(currentQuestion);
    questionCounter();
  });

    /*function area*/  
   function questionCounter() {
    //either increment the counter or hide the quiz and show last screen/reset the counter.
    if (quizIndexCounter < quiz.length - 1) { 
      quizIndexCounter++;
      } else {
      $('.quiz').hide();
      $('.final').show();
      quizIndexCounter = 0;
    }
  }
    //clear the choices from the previous question.
    //set the text of the next question
    //set the answers each in its own <div>
  function displayQuestion(question) {
    $('.quiz__answers').empty();
    $('.quiz__question-text').text(quiz[quizIndexCounter].question);
    //$('.quiz__question-text').text(question.question);
    for (var i = 0; i < quiz[quizIndexCounter].answerArr.length; i++) { 
      $('<div class="quiz__answers-item"/>')
        .text(question.answerArr[i])
        .appendTo('.quiz__answers')
        .on('click', function(evt) {
          $('.quiz__answers-item').removeClass('selected');
          $(this).addClass('selected');
          quiz[quizIndexCounter].userAnswer = question.answerArr[i];
      });
      //debugger;
     }  
  }

  function createAnswerChoices(question) {
    if (answerChoiceItem < answerChoices.length - 1) {
      answerChoices.push($('.quiz__answers-item').text(question.answerArr[i]));
      answerChoiceItem++;
    }
  } 

});

