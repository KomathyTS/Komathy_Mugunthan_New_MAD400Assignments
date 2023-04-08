import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { ChessPlayerService } from '../service/chess-player.service';


@Component({
  selector: 'app-content-list-item-search',
  templateUrl: './content-list-item-search.component.html',
  styleUrls: ['./content-list-item-search.component.scss']
})
export class ContentListItemSearchComponent implements OnInit {
  singleGame?: IContent;
  searchDidNotWork: boolean;

  constructor(private chessPlayerService: ChessPlayerService) {
    this.searchDidNotWork = false;
  }

  ngOnInit(): void {
    this.getTheNewItem("2");
  }

  getTheNewItem(newIdNumber: string): void {
    console.warn ("Getting an item: ", newIdNumber);
  

    this.chessPlayerService.getContentItem(Number(newIdNumber)).subscribe((chessGame: IContent) => {
     
      if (chessGame == undefined || chessGame.id === -1) {
        this.searchDidNotWork = true;
        return;
      }
      
      this.searchDidNotWork = false;
      console.warn("Got the item: ", chessGame);
      this.singleGame = chessGame
    });
  
  }
}
