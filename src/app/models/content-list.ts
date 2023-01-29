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

    private _addContent: IContent[];

    get addContent(): IContent[]{ 

        return this._addContent;

    }
}
    
    
