export class Quote {


// public showAuthorName: boolean;
// constructor(public id: number,public name: string,public description: string, public completeDate: Date){
// this.showAuthorName=false;


    
    id: number;
    name: string;
    quoteName : string;
    last : string;
    showAuthorName: boolean;

    constructor (id: number, name: string, quoteName: string, last: string, public submitDate: Date) {
        this.id = id,
        this.name =name,
        this.quoteName = quoteName,
        this.last = last, //edit this property
        this.showAuthorName = false
    }
}

