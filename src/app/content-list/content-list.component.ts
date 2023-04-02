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
      console.log("Getting the chess game list")
      this.chessGameArray = chessGames;
    });

    this.chessPlayerService.getContentItem(0).subscribe((chessGame: IContent) => {
      console.log("Testing getting a single content item: ", chessGame);
    }); 

    let testGameToUpdate: IContent = {
      id: 2,
      title: "365Chess",
      description: "This has the biggest searchable chess games database online.",
      author: "arla Faraguna",
      imgSrc: "https://images.chesscomfiles.com/uploads/v1/landing/358.d7e3e8d3.1052x1052o.2ed81ac505ec.jpg",
      type: "Online chess game",
    };

    // this.chessPlayerService.addContentItem(testGameToAdd).subscribe((chessGame: IContent[]) => {
    //   console.log("Testing adding a game to the array: ", chessGame);
    // });

    this.chessPlayerService.updateContentItem(testGameToUpdate).subscribe((chessGame: IContent[]) => {
      console.log("Testing updating a game in the array: ", chessGame);
    });

    this.chessPlayerService.deleteContentItem(0).subscribe((chessGame: IContent) => {
      console.log("Testing deleting a single item (goose game): ", chessGame);
    });

  }

}


