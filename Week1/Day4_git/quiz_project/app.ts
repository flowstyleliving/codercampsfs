
function score(event) {
  event.preventDefault();
  let amountCorrect = 0;
  let option = document.getElementsByName('qA5');
  for (let i = 1; i <= 5; i++) {
    let radios = document.getElementsByName('qA' + i);
    for (let j = 0; j < radios.length; j++) {
      let radio = radios[j];
      if (radio.value === "true" && radio.checked) {
        amountCorrect++;
      }
    }
  }
  // if(option.value === "true") {
  //   amountCorrect++;
  // }
  alert("Correct Responses: " + amountCorrect + "/5");
}

$('#div1').show();
