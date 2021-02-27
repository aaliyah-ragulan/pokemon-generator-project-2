// create an app object (pokemonGenerator)

const pokemonGenerator = {};
pokemonGenerator.apiURL = "https://pokeapi.co/api/v2/pokemon/";

//create selectors
pokemonGenerator.pokemonImage = document.querySelector(".generatedImage");
pokemonGenerator.pokemonName = document.querySelector(".generatedName");
pokemonGenerator.pokemonType = document.querySelector(".pokemonTypeName");
pokemonGenerator.pokemonNumber = document.querySelector(".pokemonNumber");
pokemonGenerator.pokemonAbilities = document.querySelector(".pokemonAbilities");
pokemonGenerator.pokemonMoves = document.querySelector(".pokemonMoves");
pokemonGenerator.favouritePokemon = document.querySelector(".favList");
pokemonGenerator.generatorButton = document.querySelector(".generatorBtn");
pokemonGenerator.numOfFav = 3;
pokemonGenerator.counter = 0;
pokemonGenerator.form = document.querySelector("form");
pokemonGenerator.favButton = document.querySelector(".favBtn");

// Click generates a random pokemon, information is store in a new variable

pokemonGenerator.generatorButton.addEventListener("click", function (event) {
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
      let pokemonName = jsonResponse.species["name"];
      let name = pokemonName;
      pokemonGenerator.pokemonName.innerHTML = name;

      // grabs type
      let pokemonType = jsonResponse.types[0]["type"]["name"];
      let type = pokemonType;
      pokemonGenerator.pokemonType.innerHTML = type;

      //grabs image
      let pokemonImage = jsonResponse.sprites["front_default"];
      let image = pokemonImage;
      let pokeImage = document.createElement("img");
      pokeImage.src = image;
      pokemonGenerator.pokemonImage.innerHTML = "";
      pokemonGenerator.pokemonImage.append(pokeImage);

      //grabs move
      let pokemonMoves = jsonResponse.moves[0]["move"]["name"];
      let stats = pokemonMoves;
      pokemonGenerator.pokemonMoves.innerHTML = stats;

      //grabs number
      let pokemonNumber = jsonResponse.order;
      let pokeNumber = pokemonNumber;
      pokemonGenerator.pokemonNumber.innerHTML = pokeNumber;

      //grabs ability
      let pokemonAbilities = jsonResponse.abilities[0]["ability"]["name"];
      let abilities = pokemonAbilities;
      pokemonGenerator.pokemonAbilities.innerHTML = abilities;
      let list = document.querySelector(".list");
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
      pokemonGenerator.favButton.onclick = handleSaveButton;
    });
});
