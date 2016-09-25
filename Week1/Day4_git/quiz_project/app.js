function score(event) {
    event.preventDefault();
    var amountCorrect = 0;
    var option = document.getElementsByName('qA5');
    for (var i = 1; i <= 5; i++) {
        var radios = document.getElementsByName('qA' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.value === "true" && radio.checked) {
                amountCorrect++;
            }
        }
    }
    alert("Correct Responses: " + amountCorrect + "/5");
}
$('#div1').show();
