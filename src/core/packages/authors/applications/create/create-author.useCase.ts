import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateAuthorInput } from "./create-author.input.dto";
import { IAuthorRepository } from "../../infra/author.repository";
import { CreateAuthorOutput } from "./create-author.output.dto";

export class CreateAuthorUseCase
  implements IUseCase<CreateAuthorInput, CreateAuthorOutput>
{
  constructor(
    private authorRepository: IAuthorRepository<CreateAuthorInput, CreateAuthorOutput>,
  ) {}
  async execute(input: CreateAuthorInput): Promise<CreateAuthorOutput> {
    return await this.authorRepository.create(input);
  }
}
