/*Constructor function to hold all info for each question/answer/info*/

var indexCounter = 0;

//store the current state of the quiz as it goes along.
var currentQuizState = {
  numberCorrect: 0
};

//an array to hold all the questions
var quiz = [
  new Question("What is Fragile X Syndrome?", ["A genetic disorder", "A behavioral disorder", "A physical disability", "A mental disorder"], 0, "Fragile X Syndrome (FXS) is a genetic disorder that causes: intellectual, behavioral, social, emotional, physical, sensory, and speech and language delays and disabilities."),
  
  new Question("Who has the gene that causes FXS?", ["Only parents of people with FXS", "All of the immediate family members of someone with FXS", "Everyone in the world", "Only people with FXS"], 2, "FXS is caused by a mutation of the FMR1 gene which everyone has."),
  
  new Question("What are the approximate odds of being a carrier for FXS?", ["1 in 1000 for males and females", "1 in 600 for males and 1 in 1000 for females", "1 in 500 for males and 1 in 150 for females", "1 in 150 for males and 1 in 500 for females"], 2, "Because women have two X chromosomes they are more likely to be carriers than men."),
  
  new Question("Pre-mutation carriers are at risk for FX related issues including ______", ["Progressive loss of vision and hearing", "Neuro-degenerative issues and infertility", "Muscle loss and digestive problems", "Skin disorders"], 1, "Males over 50 have a 40% risk of FX-associated Tremor/Ataxia Syndrome (FXTAS) which causes symptoms similar to Parminson's Disease. Females under 40 have a 20% risk infertility due to FX-associated Primary Ovarian Insufficiency (FXPOI)."),  
    
  new Question("What are the approximate odds of having full mutation FXS?", ["1 in 300 for males and 1 in 500 for females", "1 in 2000 for males and 1 in 1000 for females", "1 in 3000 for males and 1 in 1500 for females", "1 in 4000 for males and 1 in 6000 for females"], 3, "Fragile X syndrome is more common in males (1 in 4000 vs 1 in 6000) and can effect them more severly."),
  
  new Question("FXS is the most common known cause of __________", ["Autism Spectrum Disorder", "Attention Deficit Disorder", "Inherited Intellectual Disability", "Dislexia"], 2, "While approximately 30% of people with FXS also have Autism Spectrum Disorder, FXS is the leading known cause of inherited intellectual disability."),
  
  new Question("How are people commonly diagnosed with FXS?", ["Physical exam", "Blood test", "Psychological evaluation", "Family history"], 1, "Both carriers and people with FXS are diagnosed through a genetic test usually from a blood sample."),
    
  new Question("What are some strengths of people with FXS?", ["Strong imitation skills", "Excellent visual memory", "Desire to please and help others", "All of the above"], 3, "Despite the challenges faced by people with FXS, these are only a few of the strengths they have.")
];

//constructor function to make questions/answers
function Question(question, answerArr, correctAnswer, infoText) {
    this.question = question;
    this.answerArr = answerArr;
    this.correctAnswer = answerArr[correctAnswer];
    this.infoText = infoText;
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
      questionCounter();
      displayQuestion();
      manageAnswers();
    });
  
  /*cycle back to the first question*/  
  $('.restart').click(function() {
    $('.final').hide();
    $('.intro').show();
    startQuiz();
  }); 
  
  $('.confirm__button').click(function() {
      if (currentQuizState.userChoice == undefined) {
        alert('Please choose an answer.');
      }
    //else if(?) userChoice != undefined && 'Check your answer'...?
      else if ($(this).text() == 'Check your answer') {
      //compare the answers, set the info text, switch the button text
        compareAnswers();
        $(this).text('Continue');
      } else {
      //clear the info text, go to the next question, and reset the button text.
        currentQuizState.userChoice = undefined;
        $('.result__text, .result__type').text('');
        questionCounter();
        displayQuestion();
        manageAnswers();

        $(this).text('Check your answer');
      }  
  });

    /*function area*/  
  function startQuiz() {
    indexCounter = 0;
    currentQuizState.numberCorrect = 0;
    currentQuizState.question = null;
    currentQuizState.userChoice = null;
    currentQuizState.answers = null;
    currentQuizState.correctChoice = null;
    currentQuizState.infoText = null;
  } 
  
  function questionCounter() {
    //either increment the counter or hide the quiz and show last screen/reset the counter.
    if (indexCounter < quiz.length) {
      currentQuizState.question = quiz[indexCounter].question;
      currentQuizState.answers = quiz[indexCounter].answerArr;
      currentQuizState.infoText = quiz[indexCounter].infoText;
      currentQuizState.correctChoice = quiz[indexCounter].correctAnswer.toString();
      indexCounter++; 
    } else {
      //show the final screen and give feedback
      $('.quiz').hide();
      $('.final').show();
      finalFeedback();
    }
  }
    
  function displayQuestion() {
    //set the text of the question.
    $('.quiz__question-text').text(currentQuizState.question);
   } 
  
  function manageAnswers() {
    //clear any previous answer sets and set next answer choices
    $('.quiz__answers').empty();
    for (var i = 0; i < currentQuizState.answers.length; i++) {
      $('<div class="quiz__answers-item"/>')
        .text(currentQuizState.answers[i])
        .appendTo($('.quiz__answers'))
        .on('click', function(evt) {
          $('.quiz__answers-item').removeClass('quiz__answers-item--selected');
          $(this).addClass('quiz__answers-item--selected');
          currentQuizState.userChoice = $(this).text();
      });
    }
  }
  
});

//find a way to make userChoice undefined w/o breaking things....
function compareAnswers() {
  //compare the correct answer to the user's choice.
  if (currentQuizState.userChoice == currentQuizState.correctChoice) {
    $('.result__type').text('Correct!');
    $('.quiz__answers-item--selected').addClass('quiz__answers-item--correct').removeClass('quiz__answers-item--selected');
    currentQuizState.numberCorrect++;
    console.log('Yay');
  } else {
    $('.result__type').text('Incorrect');
    $('.quiz__answers-item--selected').addClass('quiz__answers-item--incorrect').removeClass('quiz__answers-item--selected');
    $($('.quiz__answers-item')[currentQuizState.correctChoice]).addClass('quiz__answers-item--correct');
    console.log('Oops');
  }
  $('.result__text').text(currentQuizState.infoText);
}

//function showCorrectChoice() {
//  
//}

function finalFeedback() {
  //Give different feedback based on performance.
  var achievment;
  if (currentQuizState.numberCorrect == quiz.length) {
    achievment = 'Amazing!';
  } else if (currentQuizState.numberCorrect == quiz.length - 1) {
    achievment = 'Good job!';
  } else if (currentQuizState.numberCorrect == quiz.length - 2) {
    achievment = 'Not bad!';
  } else {
    achievment = 'Better luck next time!'
  }
  //set the final text for the quiz. # correct.
  $('.final__tally-text').text(achievment + ' You got ' + currentQuizState.numberCorrect + ' of ' + quiz.length + ' correct.');  
}
  
