import { Component } from '@angular/core';
import { INVALIDGAME } from '../data/mock-content';
import { IContent } from '../models/icontent';
import { ChessPlayerService } from '../service/chess-player.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContentItem!: IContent; 
  tagsToBeParsed!: string;
  contentAddedSucessfully = false;

  constructor(private chessPlayerService: ChessPlayerService) {
    this.resetContent();
  }

  addContent(): void {
    this.newContentItem.tags = 
    this.tagsToBeParsed.split(",").map(tag => 
      tag.trim()).filter(tag => tag.length > 0);

    
      this.newContentItem.id = undefined;

      this.chessPlayerService.addContentItem(this.newContentItem).subscribe(newItemFromServer => {
        console.log("Chess Game Sucessfully Added", newItemFromServer);
        this.contentAddedSucessfully = true;
        this.resetContent();
      });
  }

  resetContent(): void {
    this.newContentItem = structuredClone(INVALIDGAME);
    this.tagsToBeParsed = "";
  }

}
