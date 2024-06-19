import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateOptionInput } from "./update-option.input.dto";
import { UpdateOptionOutput } from "./update-option.output.dto";
import { IOptionRepository } from "../../infra/option.repository";

export class UpdateOptionUseCase<T>
  implements IUseCase<UpdateOptionInput<T>, UpdateOptionOutput<T>>
{
  constructor(
    private optionRepository: IOptionRepository<UpdateOptionInput<T>, UpdateOptionOutput<T>>,
  ) {}
  async execute(input: UpdateOptionInput<T>): Promise<UpdateOptionOutput<T>> {
    return await this.optionRepository.update(input);
  }
}
