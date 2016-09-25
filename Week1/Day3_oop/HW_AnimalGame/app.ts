namespace app {
  // arr of animals
  let animals = [
    new app.Classes.Animal("dog", "mammal", true, "woof"),
    new app.Classes.Animal("cat", "mammal", true, "meow"),
    new app.Classes.Animal("parrot", "bird", true, "Polly want a cracker")
  ]
  // multiD arr of questions
  let q = [
    ["is it a mammal?", "is it a bird?", "is it a reptile?", "is it a bug (including arachnids)?"],
    ["is it usually domesticated?"],
    ["is it a predator?"],
    ["does it live in the savannah?", "does it live in the desert?", "does it live in the desert?", "does it live in the water?", "does it live in the city?"]
  ];
  // arr of criteria loaded from answering q
  let criteria = [];
  let x = $('#yes').val();
  criteria.push(x)

  //search for the right animal, checking with criteria
  let answer = animals.every((item) => item.indexOf(criteria) !== -1);
  console.log(answer);

  function check() {
    for(let i = 0; i < q[0][i].length; i++) {
      if(q[0][i] === $('#yes').val) {
        criteria.push("mammal");
      }
    }
    }
  }
  // animals.push(input);
  // q.push(input);
