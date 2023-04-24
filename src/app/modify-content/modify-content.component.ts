import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INVALIDGAME } from '../data/mock-content';
import { IContent } from '../models/icontent';
import { ChessPlayerService } from '../service/chess-player.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})

export class ModifyContentComponent implements OnInit{
  newContentItem!: IContent;
  tagsToBeParsed!: string;
  contentAddedSucessfully = false;
  contentEditedSuccessfully = false;

  constructor(private route: ActivatedRoute, private chessPlayerService: ChessPlayerService) {
    this.resetContent();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log("id value from the url is: ", id);

      if (id) {
        this.chessPlayerService.getContentItem(Number(id)).subscribe((chessGame: IContent) => {
          this.newContentItem = chessGame;
          this.stringifyTags();
        });
      }
    })
  }

  addContent(): void {

      this.parseTags();

      this.newContentItem.id = undefined;

      this.chessPlayerService.addContentItem(this.newContentItem).subscribe(newItemFromServer => {
        console.log("Chess Game Sucessfully Added", newItemFromServer);
        this.contentAddedSucessfully = true;
        this.resetContent();
      });
  }

  editContent(): void {
    this.parseTags();

    this.chessPlayerService.updateContentItem(this.newContentItem).subscribe(updatedItemFromServer => {
      console.log("Video Game Successfully Edited", updatedItemFromServer);
      this.contentEditedSuccessfully = true;
    });
  }

  private resetContent(): void {
    this.newContentItem = structuredClone(INVALIDGAME);
    this.tagsToBeParsed = "";
  }

  private parseTags(): void {
    this.newContentItem.tags = this.tagsToBeParsed.split(",").map(tag =>
     tag.trim()).filter(tag => tag.length > 0);
  }

  private stringifyTags(): void {
    this.tagsToBeParsed = this.newContentItem.tags?.join(", ") ?? "";
   }

}
