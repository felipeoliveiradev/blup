import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindByNameValidationInput } from "./findByName-validation.input.dto";
import { FindByNameValidationOutput } from "./findByName-validation.output.dto";
import { IValidationRepository } from "../../../infra/validation.repository";

export class FindByNameValidationUseCase<T>
  implements IUseCase<FindByNameValidationInput, FindByNameValidationOutput<T>>
{
  constructor(
    private validationRepository: IValidationRepository<FindByNameValidationInput, FindByNameValidationOutput<T>>,
  ) {}
  async execute(input: FindByNameValidationInput): Promise<FindByNameValidationOutput<T>> {
    return await this.validationRepository.findByName(input);
  }
}
 