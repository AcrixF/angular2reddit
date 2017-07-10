/**
 * Created by neoa on 09/07/17.
 */
export class Article {

  public title : string;
  public link : string;
  public votes : number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes;
  }

  public voteUp(): void {
    this.votes +=1;
  }

  public voteDown(): void{
    this.votes -=1;
  }

  public domain(): string{
    try {
      const link : string = this.link.split('//')[1];
      console.log(link.split('/')[0]);
      return link.split('/')[0];
    }catch ( err ){
      return null;
    }
  }
}
