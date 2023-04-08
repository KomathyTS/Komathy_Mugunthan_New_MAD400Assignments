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
    this.chessPlayerService.getContentItem(2).subscribe((chessGame: IContent) => {
      console.warn("Got the item: ", chessGame);
      this.singleGame = chessGame
    });
  
  }
}
