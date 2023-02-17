import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { ChessPlayerService } from '../service/chess-player.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {

  chessGameArray: IContent[];

  constructor(private chessPlayerService: ChessPlayerService) {
    this.chessGameArray = [];
  }

  ngOnInit(): void {
    this.chessPlayerService.getContent().subscribe((chessGames: IContent[]) => {
      this.chessGameArray = chessGames;
    });
  }

}


