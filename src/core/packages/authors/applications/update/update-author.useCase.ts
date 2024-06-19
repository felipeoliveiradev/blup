import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateAuthorInput } from "./update-author.input.dto";
import { UpdateAuthorOutput } from "./update-author.output.dto";
import { IAuthorRepository } from "../../infra/author.repository";

export class UpdateAuthorUseCase
  implements IUseCase<UpdateAuthorInput, UpdateAuthorOutput>
{
  constructor(
    private authorRepository: IAuthorRepository<UpdateAuthorInput, UpdateAuthorOutput>,
  ) {}
  async execute(input: UpdateAuthorInput): Promise<UpdateAuthorOutput> {
    return await this.authorRepository.update(input);
  }
}
