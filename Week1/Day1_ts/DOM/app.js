function printName() {
    var first_name = document.getElementById('firstName').value;
    var element = document.getElementById('firstName');
    document.getElementById('results').innerHTML = first_name;
    element.value = '';
}
