export class Product {
    id: number;
    title: string;
    description: string;
    tracklist:string;
    picture: string;
  
    constructor(id, title, description = '', price = 0, picture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR608TWmLRWFNYPlY5xgKkgZPYe7mwv0GDMDtAS9nRdlVo4aytG',tracklist) {
      this.id = id;
      this.title = title;

      this.picture = picture;
      this.tracklist =tracklist;
    }
  }