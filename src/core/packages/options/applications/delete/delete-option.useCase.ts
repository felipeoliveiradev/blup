import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteOptionInput } from "./delete-option.input.dto";
import { DeleteOptionOutput } from "./delete-option.output.dto";
import { IOptionRepository } from "../../infra/option.repository";

export class DeleteOptionUseCase<T>
  implements IUseCase<DeleteOptionInput<T>, DeleteOptionOutput>
{
  constructor(
    private optionRepository: IOptionRepository<DeleteOptionInput<T>, DeleteOptionOutput>,
  ) {}
  async execute(input: DeleteOptionInput<T>): Promise<DeleteOptionOutput> {
    return await this.optionRepository.delete(input);
  }
}
