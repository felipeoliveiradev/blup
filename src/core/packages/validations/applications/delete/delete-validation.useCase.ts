import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteValidationInput } from "./delete-validation.input.dto";
import { DeleteValidationOutput } from "./delete-validation.output.dto";
import { IValidationRepository } from "../../infra/validation.repository";

export class DeleteValidationUseCase<T>
  implements IUseCase<DeleteValidationInput<T>, DeleteValidationOutput>
{
  constructor(
    private validationRepository: IValidationRepository<DeleteValidationInput<T>, DeleteValidationOutput>,
  ) {}
  async execute(input: DeleteValidationInput<T>): Promise<DeleteValidationOutput> {
    return await this.validationRepository.delete(input);
  }
}
