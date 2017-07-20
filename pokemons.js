/**
 * Created by nadamo on 2017. 07. 14..
 */

var const_LiContainerForPokemon = "const_LiContainerForPokemon";
var vPokemons = [];

var backgroundPics = [
	"004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png",
	"10-2-pokemon-picture.png",
	"11-2-pokemon-png.png",
	"133Eevee_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png",
	"393Piplup_Pokemon_Ranger_Guardian_Signs.png",
	"4-2-pokemon-transparent.png",
	"62e0dd7c4263d90e07ef6b469f9e79f9.png",
	"Pikachu.png",
	"pokemon_PNG69.png",
	"pokemon_PNG87.png"
];

//function loadImage()
//{
	let rnd = Math.floor(Math.random() * (backgroundPics.length - 1));
    let img = document.getElementById("backgroundPic");
    img.setAttribute("width", "1000vw")
    img.setAttribute("height", "1000vw")
    img.setAttribute("src", backgroundPics[rnd]);
//}

/*
* <li>
 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 alt="bulbasaur" width="96" height="96">
 <label>Bulbasaur</label>
 <span>
 <span class="grass">grass</span>
 <span class="poison">poison</span>
 </span>
 </li>
* */


//
// function renderPokemon(pokemon){
// 	let li = document.createElement('li');
// 	let img = document.createElement('img');
// 	img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
//
// 	li.appendChild(img);
// 	document.querySelector('main ul').appendChild(li);
//
// }

//var pokemonIds = ["1", "5", "15", "193", "152"];


renderAllPokemons();

function renderAllPokemons(visiblePokemons)
{
    disableAllListElement();
    //visiblePokemons.forEach((pokemon) => renderPokemon(pokemon));
	//let pokemon = PokemonData
//    let pokemons = [];
   // pokemonIds.forEach(id=>pokemons.push(getPokemon(id)));
    let pokemons = PokemonData.getAllPokemons();
    pokemons.forEach((pokemon) => renderPokemon(pokemon));
}

function renderPokemon(pokemon){

    let span = document.createElement("span");

    if (pokemon.type.length == 1)
	{
        let innerSpan = document.createElement("span");
        innerSpan.setAttribute("class", pokemon.type[0] + " " + "onlytype");
        span.appendChild(innerSpan);
	}
	else {
		let innerSpan = document.createElement("span");
		let innerSpan2 = document.createElement("span");
		innerSpan.setAttribute("class", pokemon.type[0] + " " + "firstType");
		innerSpan2.setAttribute("class", pokemon.type[1] + " " + "secondType");

		span.appendChild(innerSpan);
		span.appendChild(innerSpan2);
    }

    let li = document.createElement('li');
    let liIdName = const_LiContainerForPokemon + pokemon.name;
    li.setAttribute("id", liIdName);
    vPokemon = {pokemon : pokemon, liName: liIdName};
    vPokemons.push(vPokemon);
    let img = document.createElement('img');
    img.src = pokemon.sprite;
    let labelName = document.createElement("label");
    labelName.textContent = pokemon.name;

    li.appendChild(span);
	span.appendChild(img);
	span.appendChild(labelName);

	document.querySelector('main article section ul').appendChild(li);

}

function disableAllListElement()
{
	let lis = document.querySelectorAll("main article section ul li");
	lis.forEach(li => li.style.display="none");
}

function vEnablePokemons(vEnablePokemonsList)
{
    disableAllListElement();
    vEnablePokemonsList.forEach(vPokemon => document.getElementById(vPokemon.liName).style="block");
}

//
// document.getElementById("searchButton").addEventListener("click",
// 	function(event)
// 	{
//
// 		console.log(document.getElementById("search").value);
// 	})

function fuggvenyNeveAkeresesre()
{
	// let filteredPokemons = pokemons.map(value => value.name.toLowerCase()).filter(function(pokename){
	// 	return pokename.match(".*" + document.getElementById("search").value.toLowerCase() + ".*");
	// });

    let vFilteredPokemons = vPokemons.filter(function (vPokemon) {
        return vPokemon.pokemon.name.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase()) > -1;
    });

    vEnablePokemons(vFilteredPokemons);

}