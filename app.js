// create an app object (pokemonGenerator)

const pokemonGenerator = {};

pokemonGenerator.apiURL = "https://pokeapi.co/api/v2/pokemon/";

//create selectors
let pokemonImage = document.querySelector(".generatedImage");
let pokemonName = document.querySelector(".generatedName");
let pokemonType = document.querySelector(".pokemonTypeName");
let pokemonNumber = document.querySelector(".pokemonNumber");
let pokemonAbilities = document.querySelector(".pokemonAbilities");
let pokemonMoves = document.querySelector(".pokemonMoves");
let favouritePokemon = document.querySelector(".favList");
let generatorButton = document.querySelector(".generatorBtn");

let favButton = document.querySelector(".favBtn");

//initialize preset data
//apiURL
pokemonGenerator.randomizePokemon = Math.floor(Math.random() * 100);

// fetch(`${pokemonGenerator.apiURL}${pokemonGenerator.randomizePokemon}`)
// .then((response) => {
//     return response.json();
// })

// .then((jsonResponse) => {
//     console.log(jsonResponse)

//    // pokemonGenerator.pokemonType = jsonResponse.types[0].type.name
//     pokemonGenerator.pokemonName = jsonResponse.species["name"]
//     console.log(pokemonGenerator.pokemonName)
// })

// Click generates a random pokemon, information is store in a new variable

generatorButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  fetch(`${pokemonGenerator.apiURL}${pokemonGenerator.randomizePokemon}`)
    .then((response) => {
      return response.json();
    })

    .then((jsonResponse) => {
      // console.log(jsonResponse);
      pokemonGenerator.pokemonName = jsonResponse.species["name"];
      let name = pokemonGenerator.pokemonName;

      pokemonName.innerHTML = name;

      //   let type = pokemonGenerator.console.log(name);
      //pokemonGenerator.pokemonType = jsonResponse.types[0].type.name
      pokemonGenerator.pokemonType = jsonResponse.types[0]["type"]["name"];
      let type = pokemonGenerator.pokemonType;
      //console.log(type)

      pokemonType.innerHTML = type;

      pokemonGenerator.pokemonImage = jsonResponse.sprites["front_default"];
      let image = pokemonGenerator.pokemonImage;
      let pokeImage = document.createElement("img");

      pokeImage.src = image;

      pokemonImage.append(pokeImage);

      //pokemonImage.src = image

      pokemonGenerator.pokemonMoves = jsonResponse.moves[0]["move"]["name"];
      let stats = pokemonGenerator.pokemonMoves;

      pokemonMoves.innerHTML = stats;

      pokemonGenerator.pokemonNumber = jsonResponse.order;
      let pokeNumber = pokemonGenerator.pokemonNumber;
      pokemonNumber.innerHTML = pokeNumber;

      pokemonGenerator.pokemonAbilities =
        jsonResponse.abilities[0]["ability"]["name"];
      let abilities = pokemonGenerator.pokemonAbilities;

      pokemonAbilities.innerHTML = abilities;

      favButton.addEventListener("click", function (event) {
        event.preventDefault();
        favouritePokemon.appendChild(document.createTextNode(name));
        console.log(name);
      });
    });
});

//create event listener on save pokemon button (grab api data outputted)

//create event listener on random generator button (grab api data)

//create a method to update pokemon profile and name based on api data
//create a method to insert pokemon key stats based on result
//create event listener to save generated pokemon
//create a method to add generated pokemon to list
//create a method to clear the list
