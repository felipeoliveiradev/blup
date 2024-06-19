import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateOptionOutput } from "./create-option.output.dto";
import { CreateOptionInput } from "./create-option.input.dto";
import { IOptionRepository } from "../../infra/option.repository";

export class CreateOptionUseCase<T>
  implements IUseCase<CreateOptionInput<T>, CreateOptionOutput<T>>
{
  constructor(
    private optionRepository: IOptionRepository<CreateOptionInput<T>, CreateOptionOutput<T>>,
  ) {}
  async execute(input: CreateOptionInput<T>): Promise<CreateOptionOutput<T>> {
    return await this.optionRepository.create(input);
  }
}
