import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllOptionInput } from "./findAll-option.input.dto";
import { FindAllOptionOutput } from "./findAll-option.output.dto";
import { IOptionRepository } from "../../../infra/option.repository";

export class FindAllOptionUseCase<T>
  implements IUseCase<FindAllOptionInput, FindAllOptionOutput<T>>
{
  constructor(
    private optionRepository: IOptionRepository<FindAllOptionInput, FindAllOptionOutput<T>>,
  ) {}
  async execute(input: FindAllOptionInput): Promise<FindAllOptionOutput<T>> {
    return await this.optionRepository.findAll(input);
  }
}
