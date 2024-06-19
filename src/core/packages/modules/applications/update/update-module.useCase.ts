import { IUseCase } from "core/common/interfaces/useCase.interface";
import { UpdateModuleOutput } from "./update-module.input.dto";
import { UpdateModuleInput } from "./update-module.output.dto";
import { IModuleRepository } from "../../infra/module.repository";

export class UpdateModuleUseCase
  implements IUseCase<UpdateModuleInput, UpdateModuleOutput>
{
  constructor(
    private moduleRepository: IModuleRepository<UpdateModuleInput, UpdateModuleOutput>,
  ) {}
  async execute(input: UpdateModuleInput): Promise<UpdateModuleOutput> {
    return await this.moduleRepository.update(input);
  }
}
