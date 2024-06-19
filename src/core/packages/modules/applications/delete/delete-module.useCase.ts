import { IUseCase } from "core/common/interfaces/useCase.interface";
import { DeleteModuleOutput } from "./delete-module.input.dto";
import { DeleteModuleInput } from "./delete-module.output.dto";
import { IModuleRepository } from "../../infra/module.repository";

export class DeleteModuleUseCase
  implements IUseCase<DeleteModuleInput, DeleteModuleOutput>
{
  constructor(
    private moduleRepository: IModuleRepository<DeleteModuleInput, DeleteModuleOutput>,
  ) {}
  async execute(input: DeleteModuleInput): Promise<DeleteModuleOutput> {
    return await this.moduleRepository.delete(input);
  }
}
