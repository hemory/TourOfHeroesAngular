import { importType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
getHeroes(): Observable<Hero[]>{
  const heroes = of(Heroes);
  return heroes;
}

}
