function printName() {
  let first_name = (<HTMLInputElement>document.getElementById('firstName')).value
  let element = <HTMLInputElement>document.getElementById('firstName');
  //let element = <HTMLInputElement>document.getElementById('');
  //let input_element = <HTMLInputElement>html_element;
  //
  //let result_element = <HTMLInputElement>document.getElementById('');
  //let input_value = result_element.value;
  //let result_value = (<HTMLInputElement>document.getElementById('')).value
  document.getElementById('results').innerHTML = first_name;
  element.value = '';
}
