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

  constructor(private chessPlayerService: ChessPlayerService) {

  }

  ngOnInit(): void {
    this.getTheNewItem("2");
  }

  getTheNewItem(newIdNumber: string): void {
    console.warn ("Getting an item: ", newIdNumber);
  

    this.chessPlayerService.getContentItem(Number(newIdNumber)).subscribe((chessGame: IContent) => {
      console.warn("Got the item: ", chessGame);
      this.singleGame = chessGame
    });
  
  }
}
