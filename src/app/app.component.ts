import { Component } from '@angular/core';
import { ContentList } from './models/content-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'K_Mugunthan_CHessGames';
  chessGameLists: ContentList;

  constructor() {
    this.chessGameLists = new ContentList();
    
    this.chessGameLists.addContents({
      id: 0,
      title: "Chess Game for Kids",
      description: "Kids chess for online",
      author: "---",
      imgSrc: "  ",
      type: "  ",
      tags: ["Puzzle", "Bitzs"]
    });

    this.chessGameLists.addContents({
      id: 1,
      title: "Chess Game for Kids",
      description: "Kids chess for online",
      author: "---",
      imgSrc: "  ",
      type: "  ",
      tags: ["Puzzle", "Bitzs"]
    });
  }
}
