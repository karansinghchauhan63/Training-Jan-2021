import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

type NewType = Observable<Hero[]>;

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): NewType {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }
}
