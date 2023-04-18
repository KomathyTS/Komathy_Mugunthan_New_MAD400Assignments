import { Component } from '@angular/core';
import { INVALIDGAME } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContentItem: IContent = INVALIDGAME; 
  tagsToBeParsed: string = "";
}
