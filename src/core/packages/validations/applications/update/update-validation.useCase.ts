import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateValidationInput } from "./update-validation.input.dto";
import { UpdateValidationOutput } from "./update-validation.output.dto";
import { IValidationRepository } from "../../infra/validation.repository";

export class UpdateValidationUseCase<T>
  implements IUseCase<UpdateValidationInput<T>, UpdateValidationOutput<T>>
{
  constructor(
    private validationRepository: IValidationRepository<UpdateValidationInput<T>, UpdateValidationOutput<T>>,
  ) {}
  async execute(input: UpdateValidationInput<T>): Promise<UpdateValidationOutput<T>> {
    return await this.validationRepository.update(input);
  }
}
