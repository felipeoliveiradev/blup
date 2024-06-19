import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameOptionInput } from "./findByName-option.input.dto";
import { FindByNameOptionOutput } from "./findByName-option.output.dto";
import { IOptionRepository } from "../../../infra/option.repository";

export class FindByNameOptionUseCase<T>
  implements IUseCase<FindByNameOptionInput, FindByNameOptionOutput<T>>
{
  constructor(
    private optionRepository: IOptionRepository<FindByNameOptionInput, FindByNameOptionOutput<T>>,
  ) {}
  async execute(input: FindByNameOptionInput): Promise<FindByNameOptionOutput<T>> {
    return await this.optionRepository.findByName(input);
  }
}
 