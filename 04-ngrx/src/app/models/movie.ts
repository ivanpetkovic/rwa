export class Movie {
  public score: number;
  public image: string;

  constructor(
    public id: string,
    public title: string,
    public year: number,
    score?: number,
    image?: string,
  ) {
    this.score = score ?? 0;
    this.image = image ?? '';
  }
}
