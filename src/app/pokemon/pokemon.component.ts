import { Component, OnInit, TemplateRef } from '@angular/core';
import { pokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  starterPokemon = ["bulbasaur", "squirtle", "charmander" ];
  pokemons: Pokemon[] = [];
  
  constructor(private service: pokemonService) { }

  ngOnInit(): void {
    for(let poke of this.starterPokemon) {
      let data = this.service.getPokemon(poke).subscribe(data => {
        let pokemon = new Pokemon();
        pokemon.name = data.name;
        pokemon.sprites = data.sprites;
        pokemon.id = data.id
        pokemon.weight = data.weight;
        pokemon.height = data.height;
        pokemon.types = data.types;
        this.pokemons.push(pokemon);        
      }); 
    }

      
  }
  
  confirm(name) {
    if(confirm('Do you want to select '+name)) {
      this.pokemons = this.pokemons.filter((p) => { return p.name === name});
    }
  }

  

}
