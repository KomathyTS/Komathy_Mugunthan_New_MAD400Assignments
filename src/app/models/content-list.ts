
import { IContent } from "./icontent";

export class ContentList {

    _chessGame: IContent[]; 

    constructor() {
        this._chessGame = []; 
     
        }

    get GameChess(): IContent[]{ 

        return this._chessGame;

    }

    addContents(newGame: IContent) {
        this._chessGame.push(newGame);
    }

    arryLength(): number {

        return this._chessGame.length;
    }

    toString(index: number): string {

        const GameOfChess: IContent = this._chessGame[index];
        let prettyHtmlOutput = `
          <h2>${GameOfChess.title}</h2>
          <img src="${GameOfChess.imgSrc}">
          <p>${GameOfChess.description}</p>
          <span class="author">${GameOfChess.author}</span>
          <span class="type">${GameOfChess.type}</span>`;

          if (GameOfChess.tags) 
          {
            prettyHtmlOutput += '<div class="tags">'; 
            GameOfChess.tags?.forEach((tag) => {
              prettyHtmlOutput += `<span>${tag}</span>`; 
            });
      
            prettyHtmlOutput += "</div>"; 
          }
          return prettyHtmlOutput;

    }
}
    
    
