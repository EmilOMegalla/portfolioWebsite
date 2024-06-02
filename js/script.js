let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { name: 'Ivysaur', height: 1, types: ['grass', 'poison'] },
    { name: 'Vanusaur', height: 2, types: ['grass', 'poison'] },
    { name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
    {name: 'Butterfree', height: 1.1, types: ['bug', 'flying']}
];

// The bellow code block will loop over the array of pokemonList.
// Then it will check the Bokemon's height if it bigger than 1.7, if yes it will print the sentence "wow that's big".
// If the condition of hiegh was not met, it will then display the name and the height of the bokemon.
for (let i = 0; i < pokemonList.length; i++){
     if (pokemonList[i].height > 1.7) {
        document.write('\" ' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') <strong>Wow, that\'s big!\</strong>"<br>');
     } else {
         document.write('\" ' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')\"<br>');
    }
   
}
