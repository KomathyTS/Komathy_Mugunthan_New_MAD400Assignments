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
    this.chessPlayerService.getContentItem(3).subscribe((chessGame: IContent) => {
       this.singleGame = chessGame;
    });
  }
  
  
}
