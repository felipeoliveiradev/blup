import { Entity } from "../../../common/aggregate/entity/entity.interface";
import { Data } from "node-lombok";
import { AuthorValidator } from "./author.va";

type AuthorConstructor = {
  name: string;
  github: string;
  email: string;
};

@Data()
export class Author extends Entity {
  private name: string;
  private github: string;
  private email: string;

  constructor(prop: AuthorConstructor) {
    super();
    this.name = prop.name;
    this.github = prop.github;
    this.email = prop.email;
  }

  create() {
    try {
      const author = new Author({
        name: this.name,
        github: this.github,
        email: this.email
      })
      author.validate();
      return author;
    } catch (error) {
      throw error;
    }
  }
  
  validate() {
    const authorVa = new AuthorValidator({
      name: this.name,
      github: this.github,
      email: this.email
    })
    authorVa.rules();
  }
  
  toJSON() {
    return {
      name: this.name,
      github: this.github,
      email: this.email
    }
  }
}
