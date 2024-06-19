import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllAuthorInput } from "./findAll-author.input.dto";
import { FindAllAuthorOutput } from "./findAll-author.output.dto";
import { IAuthorRepository } from "../../../infra/author.repository";

export class FindAllAuthorUseCase
  implements IUseCase<FindAllAuthorInput, FindAllAuthorOutput>
{
  constructor(
    private authorRepository: IAuthorRepository<FindAllAuthorInput, FindAllAuthorOutput>,
  ) {}
  async execute(input: FindAllAuthorInput): Promise<FindAllAuthorOutput> {
    return await this.authorRepository.findAll(input);
  }
}
