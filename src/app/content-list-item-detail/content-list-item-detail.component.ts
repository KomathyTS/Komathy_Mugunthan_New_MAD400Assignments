import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../models/icontent';
import { ChessPlayerService } from '../service/chess-player.service';

@Component({
  selector: 'app-content-list-item-detail',
  templateUrl: './content-list-item-detail.component.html',
  styleUrls: ['./content-list-item-detail.component.scss']
})
export class ContentListItemDetailComponent implements OnInit{
  id?: number;
  chessGameDetailItem?: IContent

  constructor(private route: ActivatedRoute, private chessPlayerService: ChessPlayerService) {

  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('idNumberValue'))


      this.chessPlayerService.getContentItem(this.id).subscribe((chessGame: IContent) => {
        console.warn("Got the item in the detail: ", chessGame);
        this.chessGameDetailItem = chessGame;
      });
    });
  }
}
