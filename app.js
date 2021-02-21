// create an app object (pokemonGenerator)

const pokemonGenerator = {}

pokemonGenerator.apiURL = "https://pokeapi.co/api/v2/pokemon/";

//create selectors
let pokemonImage = document.querySelector('.generatedImage')
let pokemonName  = document.querySelector('.generatedName')
let pokemonType = document.querySelector('.pokemonTypeName')
let pokemonCharacteristic = document.querySelector('.pokemonCharacteristic')
let pokemonAbilities = document.querySelector('.pokemonAbilities')
let pokemonMoves = document.querySelector('.pokemonMoves')
let favouritePokemon = document.querySelector('ul')
let generatorButton = document.querySelector('.generatorBtn')



//initialize preset data
//apiURL
pokemonGenerator.randomizePokemon = Math.floor(Math.random() * 100)

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

generatorButton.addEventListener('click', function ()  {
    fetch(`${pokemonGenerator.apiURL}${pokemonGenerator.randomizePokemon}`)
.then((response) => {
    return response.json();
})

.then((jsonResponse) => {
    pokemonGenerator.pokemonName = jsonResponse.species["name"]
    let name = pokemonGenerator.pokemonName
   
    console.log(name)

    //pokemonGenerator.pokemonType = jsonResponse.types[0].type.name
   
    
    


    

   // 

    
    
    
})

})

//create event listener on random generator button (grab api data)

    
    
//create a method to update pokemon profile and name based on api data
//create a method to insert pokemon key stats based on result
//create event listener to save generated pokemon
//create a method to add generated pokemon to list
//create a method to clear the list

