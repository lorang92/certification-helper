function showResult(elem, correct) {
    if (correct) {
        elem.classList.add('correct');
        elem.innerText = 'correct';
    } else {
        elem.classList.add('incorrect');
        elem.innerText = 'incorrect';
    }
}

(function (){
    // Question 1
    var elemAnswer1 = document.getElementById('answer1');
    var answer1_1 = concatWithSpaces('Hello', 'Oslo') === 'Hello Oslo';
    var answer1_2 = concatWithSpaces('CSS', 'JavaScript') === 'CSS JavaScript';
    showResult(elemAnswer1, answer1_1 && answer1_2);

    // Question 2
    var elemAnswer2 = document.getElementById('answer2');
    var answer2_1 = sum([1, 2]) === 3;
    var answer2_2 = sum([4, 6, 7]) === 17;
    showResult(elemAnswer2, answer2_1 && answer2_2);
})();