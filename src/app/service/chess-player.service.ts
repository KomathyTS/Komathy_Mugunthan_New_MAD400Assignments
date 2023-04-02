import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INVALIDGAME, CHESSGAMES } from '../data/mock-content';
import { IContent } from '../models/icontent';


@Injectable({
  providedIn: 'root'
})
export class ChessPlayerService {

  constructor() { }

  getContent(): Observable<IContent[]> {
    return of(CHESSGAMES);
  }

  getContentItem(index: number): Observable<IContent> {
    console.warn("Got to get content item");
    let chessGameFound: IContent | undefined;
    for (let i = 0; i < CHESSGAMES.length; i++){
      if (CHESSGAMES[i].id == index) {
        chessGameFound = CHESSGAMES[i];
        break;
      }
    }
    if (!chessGameFound) { // never found a valid game
      return of(INVALIDGAME);
    }
    console.warn("Got the item", chessGameFound);
    return of(chessGameFound);
  }

  addContentItem(item: IContent): Observable<IContent[]>{
    if (CHESSGAMES.find((game: IContent) => game.id === item.id) == undefined) {
      CHESSGAMES.push(item);
    }
    return of(CHESSGAMES);
  }

  updateContentItem(item: IContent): Observable<IContent[]>{
    let indexOfGameToUpdate = CHESSGAMES.findIndex((game: IContent) => {
      return game.id === item.id;
    });
    if (indexOfGameToUpdate !== -1) {
      CHESSGAMES[indexOfGameToUpdate] = item;
    }
    return of(CHESSGAMES);
  }

  deleteContentItem(index: number): Observable<IContent> {
    let chessGameFound: IContent | undefined;
    for (let i = 0; i < CHESSGAMES.length; i++){
      if (CHESSGAMES[i].id === index) {
        chessGameFound = CHESSGAMES[i];
        delete CHESSGAMES[i];
        console.log("Did the game get deleted? ", CHESSGAMES);
        break;
      }
    }
    if (!chessGameFound) {
      return of(INVALIDGAME)
    }
    return of(chessGameFound);
  }


}