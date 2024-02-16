import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PokemonResponse } from "./pokemon.interface";

@Injectable({
  providedIn: 'root'
})

export class pokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  private constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get(this.baseUrl + name);
  }


}