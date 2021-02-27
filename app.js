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
let list = document.querySelector(".list");

pokemonGenerator.numOfFav = 3;
pokemonGenerator.counter = 0;
pokemonGenerator.form = document.querySelector("form");

let favButton = document.querySelector(".favBtn");

// Click generates a random pokemon, information is store in a new variable

generatorButton.addEventListener("click", function (event) {
  const randomizePokemon = Math.floor(Math.random() * 893);
  event.preventDefault();

  //grabs api data
  fetch(`${pokemonGenerator.apiURL}${randomizePokemon}`)
    //returns promise
    .then((response) => {
      return response.json();
    })
    //parses json
    .then((jsonResponse) => {
      // grabs name
      pokemonGenerator.pokemonName = jsonResponse.species["name"];
      let name = pokemonGenerator.pokemonName;
      pokemonName.innerHTML = name;

      // grabs type
      pokemonGenerator.pokemonType = jsonResponse.types[0]["type"]["name"];
      let type = pokemonGenerator.pokemonType;
      pokemonType.innerHTML = type;

      //grabs image
      pokemonGenerator.pokemonImage = jsonResponse.sprites["front_default"];
      let image = pokemonGenerator.pokemonImage;
      let pokeImage = document.createElement("img");
      pokeImage.src = image;
      pokemonImage.innerHTML = "";
      pokemonImage.append(pokeImage);

      //grabs move
      pokemonGenerator.pokemonMoves = jsonResponse.moves[0]["move"]["name"];
      let stats = pokemonGenerator.pokemonMoves;
      pokemonMoves.innerHTML = stats;

      //grabs number
      pokemonGenerator.pokemonNumber = jsonResponse.order;
      let pokeNumber = pokemonGenerator.pokemonNumber;
      pokemonNumber.innerHTML = pokeNumber;

      //grabs ability
      pokemonGenerator.pokemonAbilities =
        jsonResponse.abilities[0]["ability"]["name"];
      let abilities = pokemonGenerator.pokemonAbilities;
      pokemonAbilities.innerHTML = abilities;

      // save button function
      const handleSaveButton = function (event) {
        event.preventDefault();
        let txt = name;
        li = document.createElement("li");
        li.innerHTML = "";

        // converting html collection into array
        const savedPokemonArray = [...list.children];
        const checkDuplicate = function () {
          let hasDuplicate = false;
          savedPokemonArray.forEach((pokemon) => {
            //  makes sure that same pokemon can't be saved twice
            const savedName = pokemon.innerHTML;
            if (savedName === txt) {
              hasDuplicate = true;
            }
          });
          return hasDuplicate;
        };

        // loop to ensure that user can only store 3 favorite pokemon
        if (pokemonGenerator.counter < pokemonGenerator.numOfFav) {
          if (li && !checkDuplicate()) {
            li.innerHTML = txt;
            list.insertBefore(li, list.childNodes[0]);
            pokemonGenerator.counter++;
          } else if (li) {
          }
        } else {
          alert("You have already saved 3!");
        }
      };

      //method to save pokemon, fav button functionality
      favButton.onclick = handleSaveButton;
    });
});
