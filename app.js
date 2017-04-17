var questions = [{
        question: 'Merino is a common fiber used in yarn. Where does it come from?',
        choices: ['Sheep', 'Goats', 'Plant Fibers', 'Alpacas'],
        answer: 'Sheep'
    },
    {
        question: 'How do you create garter stitch on a flat piece?',
        choices: ['Short rows', 'Knit one direction and purl the other direction', 'Knit back and forth', 'Knit in circles'],
        answer: 'Knit back and forth'
    },
    {
        question: 'What is not a method for knitting in the round?',
        choices: ['Magic loop', 'Double pointed needles', 'Knit a flat piece and seam it', 'Using 2 circular needles'],
        answer: 'Knit a flat piece and seam it'
    },
    {
        question: 'What is not a type of knitting needle?',
        choices: ['Circular', 'Double pointed', 'Straight', 'Rounded'],
        answer: 'Rounded'
    },
    // {
    //     question: 'What is the purpose of ‘blocking’ a knitted item?',
    //     choices: ['To make sure you have the correct number of stitches', 'To achieve the desired shape', 'To secure the ends', ''],
    //     answer: 'To achieve the desired shape'
    // },
    // {
    //     question: 'What is meant by ‘gauge’?',
    //     choices: ['Weight of yarn', 'Thickness of needles', 'Number of stitches per inch', 'Yardage of yarn needed for a project'],
    //     answer: 'Number of stitches per inch'
    // },
    // {
    //     question: 'What is ‘whip stitch’ used for?',
    //     choices: ['Sewing whips', 'Joining 2 pieces of knit fabric', 'Hiding flaws in your knitting', 'Adding designs to the surface of a knitted item'],
    //     answer: 'Joining 2 pieces of knit fabric'
    // },
    // {
    //     question: 'What is the most common method for closing the toe on a sock?',
    //     choices: ['3 needle bind-off', 'Judy’s Magic Cast-off', 'Whip stitch', 'Kitchener stitch'],
    //     answer: 'Kitchener stitch'
    // },
    // {
    //     question: 'What is not a type of heel used in sock knitting?',
    //     choices: ['Short-row', 'Cupping', 'Flap and gusset', 'Afterthought'],
    //     answer: 'Cupping'
    // },
    // {
    //     question: 'What 2 stitches are used to create ribbing?',
    //     choices: ['Cable and twist', 'Front and back', 'Knit and purl', 'Texture and lace'],
    //     answer: 'Knit and purl'
    // },
    // {
    //     question: 'What is not a material used to create knitting needles?',
    //     choices: ['Ceramic', 'Metal', 'Wood', 'Acrylic'],
    //     answer: 'Ceramic'
    // },
];

var questNum = 0;

function question() {
    $('#question').text(questions[questNum].question);
    $('#choices').empty();
    for (var i = 0; i < questions[questNum].choices.length; i++) {
        $('#choices').append('<li><input type="radio" value="' + questions[questNum].choices[i] + '" name="' + questions[questNum].choices[i] + '" />' + questions[questNum].choices[i] + '</li>');
    }
}

function generator() {
    var score = 0;
    $('#submit').submit(function(event) {
        event.preventDefault();
        var chosenAnswer = $('li input[type="radio"]:checked').val();
        console.log('submitted');
        var correctAnswer = questions[questNum].answer;
        if (questNum >= questions.length) {
            //$('.question-box').toggleClass('hide')
            $('#results').text('You got ' + score + ' questions correct out of ' + questions.length)
        } else {
            if (chosenAnswer == correctAnswer) {
                $('#feedback').text("Congratulations! You answered correctly!");
                score++;
                questNum++;
                question();
            } else {
                $('#feedback').text("Sorry, you didn't get that one right. The correct answer was: " + questions[questNum].answer);
                questNum++;
                question();
            }
        }
    });
}


$(function() {
    question();
});

$(function() {
    generator();
});