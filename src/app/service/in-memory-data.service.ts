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
}
