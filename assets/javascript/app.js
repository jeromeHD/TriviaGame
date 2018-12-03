var card = $("#questions");

//Quesions and answers array
var triviaQuestion = [
  {
    question: "What is the airspeed velocity of an unladen european swallow?",
    choices: ["30mph", "16mph", "12mph", "24mph"],
    validAnswer: "24mph"
  },
  {
    question:
      "How many licks does it take to get to the center of a tootsie pop?",
    choices: ["267 licks", "589 licks", "364 licks", "879 licks"],
    validAnswer: "364 licks"
  },
  {
    question: "What is a group of unicorns known as?",
    choices: ["A murder", "A blessing", "A army", "A gaggle"],
    validAnswer: "A blessing"
  },
  {
    question:
      "What is the tiny plastic covering of the tip of a shoelace called?",
    choices: ["An aglet", "A knot", "A plastic cover", "A shoelace"],
    validAnswer: "An aglet"
  }
];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < triviaQuestion.length; i++) {
      card.append("<h2>" + triviaQuestion[i].question + "</h2>");
      for (var j = 0; j < triviaQuestion[i].choices.length; j++) {
        card.append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            triviaQuestion[i].choices[j] +
            "''>" +
            triviaQuestion[i].choices[j]
        );
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  //questions run and checked

  done: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === triviaQuestion[0].validAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === triviaQuestion[1].validAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === triviaQuestion[2].validAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === triviaQuestion[3].validAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    //Results Checked and presented

    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    card.append(
      "<h3>Unanswered: " +
        (triviaQuestion.length - (this.incorrect + this.correct)) +
        "</h3>"
    );
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
