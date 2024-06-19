import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameAuthorInput } from "./findByName-author.input.dto";
import { FindByNameAuthorOutput } from "./findByName-author.output.dto";
import { IAuthorRepository } from "../../../infra/author.repository";

export class FindByNameAuthorUseCase
  implements IUseCase<FindByNameAuthorInput, FindByNameAuthorOutput>
{
  constructor(
    private authorRepository: IAuthorRepository<FindByNameAuthorInput, FindByNameAuthorOutput>,
  ) {}
  async execute(input: FindByNameAuthorInput): Promise<FindByNameAuthorOutput> {
    return await this.authorRepository.findByName(input);
  }
}
 