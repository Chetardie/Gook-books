interface IBook {
  name: string;
  description: string;
  imagePath: string;
}

export class Book implements  IBook {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
