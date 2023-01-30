import { Title } from "@angular/platform-browser";
import { IContent } from "./icontent";

export class ContentList {

    static contentCount = 0; 
    _addContent: IContent[]; 

    constructor(addContent: IContent) {
        this._addContent = []; 
        this._addContent[0] = addContent; 
        this.increaseCount();
          }
          increaseCount() {
            return ++ContentList.contentCount;
        }

    get addContent(): IContent[]{ 

        return this._addContent;

    }

    public toString(input: number ) {

        return this.addContent;
    }
}
    
    
