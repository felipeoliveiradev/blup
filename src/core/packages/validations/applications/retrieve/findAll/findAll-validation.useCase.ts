import { IUseCase } from "core/common/interfaces/useCase.interface";
import { FindAllValidationInput } from "./findAll-validation.input.dto";
import { FindAllValidationOutput } from "./findAll-validation.output.dto";
import { IValidationRepository } from "../../../infra/validation.repository";

export class FindAllValidationUseCase<T>
  implements IUseCase<FindAllValidationInput, FindAllValidationOutput<T>>
{
  constructor(
    private validationRepository: IValidationRepository<FindAllValidationInput, FindAllValidationOutput<T>>,
  ) {}
  async execute(input: FindAllValidationInput): Promise<FindAllValidationOutput<T>> {
    return await this.validationRepository.findAll(input);
  }
}
