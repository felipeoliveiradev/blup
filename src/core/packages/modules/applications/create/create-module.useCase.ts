import { IUseCase } from "core/common/interfaces/useCase.interface";
import { CreateModuleInput } from "./create-module.input.dto";
import { CreateModuleOutput } from "./create-module.output.dto";
import { IModuleRepository } from "../../infra/module.repository";

export class CreateModuleUseCase
  implements IUseCase<CreateModuleInput, CreateModuleOutput>
{
  constructor(
    private ModuleRepository: IModuleRepository<CreateModuleInput, CreateModuleOutput>,
  ) {}
  async execute(input: CreateModuleInput): Promise<CreateModuleOutput> {
    return await this.ModuleRepository.create(input);
  }
}
