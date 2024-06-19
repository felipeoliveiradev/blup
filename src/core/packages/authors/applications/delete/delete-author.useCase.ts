import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteAuthorInput } from "./delete-author.input.dto";
import { DeleteAuthorOutput } from "./delete-author.output.dto";
import { IAuthorRepository } from "../../infra/author.repository";

export class DeleteAuthorUseCase
  implements IUseCase<DeleteAuthorInput, DeleteAuthorOutput>
{
  constructor(
    private authorRepository: IAuthorRepository<DeleteAuthorInput, DeleteAuthorOutput>,
  ) {}
  async execute(input: DeleteAuthorInput): Promise<DeleteAuthorOutput> {
    return await this.authorRepository.delete(input);
  }
}
