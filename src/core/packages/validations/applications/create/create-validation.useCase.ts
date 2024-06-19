import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateValidationOutput } from "./create-validation.output.dto";
import { CreateValidationInput } from "./create-validation.input.dto";
import { IValidationRepository } from "../../infra/validation.repository";

export class CreateValidationUseCase<T>
  implements IUseCase<CreateValidationInput<T>, CreateValidationOutput<T>>
{
  constructor(
    private validationRepository: IValidationRepository<CreateValidationInput<T>, CreateValidationOutput<T>>,
  ) {}
  async execute(input: CreateValidationInput<T>): Promise<CreateValidationOutput<T>> {
    return await this.validationRepository.create(input);
  }
}
