import { Component,  OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import { ChessPlayerService } from './service/chess-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // singleGame: IContent | undefined;
  singleGame?: IContent;
  title = 'K_Mugunthan_CHessGames';

  constructor(private chessPlayerService: ChessPlayerService) {
  }

  ngOnInit(): void{
    this.getTheNewItem("0");
   }
   getTheNewItem(newIdNumber: string): void {
     console.warn("Getting an item: ", newIdNumber);
     
    this.chessPlayerService.getContentItem(Number(newIdNumber)).subscribe((chessGame: IContent) => {
      console.warn("Got the input item ", chessGame);
       this.singleGame = chessGame;
    });
  }
  
  
}
