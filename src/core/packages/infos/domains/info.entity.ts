import { Entity } from "../../../common/aggregate/entity/entity.interface";
import { Author } from "../../../../core/packages/authors/domains/author.entity";
import { Data } from "node-lombok";
import { InfoValidator } from "./info.va";

type InfoConstructor = {
  name: string;
  version: string;
  keywords: string;
  description: string;
  author: Author;
  package: string;
};

@Data()
export class Info extends Entity {
  private name!: string;
  private version!: string;
  private description!: string;
  private keywords!: string;
  private author!: Author;
  private package!: string;

  constructor(prop: InfoConstructor) {
    super();
    this.setName = prop.name;
    this.setVersion = prop.version;
    this.setAuthor = prop.author;
    this.setPackage = prop.package;
    this.setDescription = prop.description;
    this.setKeywords = prop.keywords;
  }

  public create() {
    try {
      const author = new Author(this.author as any);
      author.validate();
      const info = new Info({
        name: this.name,
        author: author,
        version: this.version,
        description: this.description,
        package: this.package,
        keywords: this.keywords
      });
      info.validate();
      return info;
    } catch (error) {
      throw error;
    }
  }

  public validate() {
    const validator = new InfoValidator({
      name: this.name,
      version: this.version,
      description: this.description,
      package: this.package,
      keywords: this.keywords
    });
    validator.rules();
  }

  public toJSON() {
    return {
      name: this.name,
      version: this.version,
      author: this.author,
      keywords: this.keywords,
      description: this.description,
      package: this.package
    };
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }

  public get getVersion(): string {
    return this.version;
  }

  public set setVersion(value: string) {
    this.version = value;
  }

  public get getDescription(): string {
    return this.description;
  }

  public set setDescription(value: string) {
    this.description = value;
  }

  public get getKeywords(): string {
    return this.keywords;
  }

  public set setKeywords(value: string) {
    this.keywords = value;
  }

  public get getAuthor(): Author {
    return this.author;
  }

  public set setAuthor(value: Author) {
    this.author = value;
  }

  public get getPackage(): string {
    return this.package;
  }

  public set setPackage(value: string) {
    this.package = value;
  }
}
