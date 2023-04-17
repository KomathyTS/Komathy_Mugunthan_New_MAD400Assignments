import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CHESSGAMES } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  constructor() { }

  createDb() {
    let games: IContent[] = CHESSGAMES;
    return { games };
  }

  genId(games: IContent[]): number {
    if (games.length > 0) {
      let gameIds: number[] = [];
      games.forEach((individualGame) => {
        if (!individualGame.id)
          return;
        gameIds.push(individualGame.id);
      })

      // using the spread operator
      return Math.max(...gameIds) + 1;
    }

    return 0;
  }
}
